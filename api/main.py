from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import os


import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


le          = joblib.load(os.path.join(BASE_DIR, 'artifacts/label_encoder.pkl'))
scaler      = joblib.load(os.path.join(BASE_DIR, 'artifacts/scaler.pkl'))
num_imputer = joblib.load(os.path.join(BASE_DIR, 'artifacts/num_imputer.pkl'))
cat_imputer = joblib.load(os.path.join(BASE_DIR, 'artifacts/cat_imputer.pkl'))


svm_model = joblib.load(os.path.join(BASE_DIR, 'models/svm.pkl'))
gb_model  = joblib.load(os.path.join(BASE_DIR, 'models/gradient_boosting.pkl'))

app = FastAPI(
    title="Personality Classifier API",
    description="Predicts whether a person is an Introvert or Extrovert",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class PersonalityInput(BaseModel):
    Time_spent_Alone          : float
    Stage_fear                : str    
    Social_event_attendance   : float
    Going_outside             : float
    Drained_after_socializing : str   
    Friends_circle_size       : float
    Post_frequency            : float

@app.get("/")
def root():
    return {"status": "Personality Classifier API is running"}


@app.post("/predict")
def predict(data: PersonalityInput):

    # Create DataFrame
    input_df = pd.DataFrame([data.dict()])

    # Encode Yes/No
    input_df['Stage_fear']                = input_df['Stage_fear'].map({'No': 0, 'Yes': 1})
    input_df['Drained_after_socializing'] = input_df['Drained_after_socializing'].map({'No': 0, 'Yes': 1})

    # Impute
    cat_cols = ['Stage_fear', 'Drained_after_socializing']
    num_cols = [col for col in input_df.columns if col not in cat_cols]

    input_df[num_cols] = num_imputer.transform(input_df[num_cols])
    input_df[cat_cols] = cat_imputer.transform(input_df[cat_cols])

    # Scale
    input_scaled = pd.DataFrame(scaler.transform(input_df), columns=input_df.columns)

    # Predict - SVM primary
    svm_pred  = svm_model.predict(input_scaled)[0]
    svm_proba = svm_model.predict_proba(input_scaled)[0].max()

    # Predict - GB secondary
    gb_pred  = gb_model.predict(input_scaled)[0]
    gb_proba = gb_model.predict_proba(input_scaled)[0].max()

    return {
        "prediction"            : le.inverse_transform([svm_pred])[0],
        "confidence"            : f"{svm_proba:.2%}",
        "model"                 : "SVM",
        "secondary_prediction"  : le.inverse_transform([gb_pred])[0],
        "secondary_confidence"  : f"{gb_proba:.2%}",
        "secondary_model"       : "Gradient Boosting"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.getenv("PORT", "8000")), reload=True)
