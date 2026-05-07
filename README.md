# 🧠 Personality Classifier

> Predict whether you're an **Introvert** or **Extrovert** using Machine Learning — powered by behavioral data and dual-model inference.

🌐 **Live Demo:** [personality-classifier-ml.onrender.com](https://personality-classifier-ml.onrender.com)

---

> ⏳ **Note:** The backend is hosted on a **free tier (Hugging Face Spaces)**. On the first request after inactivity, it may take **1–2 minutes to spin up**. Please be patient — the app will load shortly!

---

## ✨ Features

- 🔍 **Dual ML Inference** — SVM and Gradient Boosting models predict simultaneously
- 📊 **Confidence Scores** — See how certain each model is about your personality type
- 🎨 **Smooth Animations** — Framer Motion powered multi-stage quiz experience
- 📱 **Responsive UI** — Works beautifully on desktop and mobile
- ⚡ **Slow Connection Detection** — Friendly feedback when the backend is warming up
- 🛡️ **Type-safe** — Built with TypeScript end-to-end

---

## 🏗️ Architecture

```
┌─────────────────────┐         ┌──────────────────────────┐
│                     │  HTTP   │                          │
│   React Frontend    │ ──────► │   FastAPI Backend        │
│   (Render)          │         │   (Hugging Face Spaces)  │
│                     │         │                          │
└─────────────────────┘         └──────────────────────────┘
                                          │
                                          ▼
                                ┌──────────────────┐
                                │  SVM Model       │ ← 91.5% accuracy
                                │  Gradient Boost  │ ← 91.3% accuracy
                                └──────────────────┘
```

---

## 🤖 How It Works

The app collects **7 behavioral indicators** through an interactive quiz:

| Feature | Type | Range |
|---|---|---|
| Time Spent Alone (hrs/day) | Numeric | 0 – 11 |
| Stage Fear | Yes / No | — |
| Social Event Attendance | Numeric | 0 – 10 |
| Going Outside Frequency | Numeric | 0 – 10 |
| Drained After Socializing | Yes / No | — |
| Friend Circle Size | Numeric | 0 – 15 |
| Social Media Post Frequency | Numeric | 0 – 10 |

The backend preprocesses your answers (encoding → imputation → scaling) and runs them through two ML models, returning predictions with confidence percentages.

**Sample Response:**
```json
{
  "prediction": "Introvert",
  "confidence": "93.08%",
  "model": "SVM",
  "secondary_prediction": "Introvert",
  "secondary_confidence": "97.01%",
  "secondary_model": "Gradient Boosting"
}
```

---

## 📈 Model Performance

| Model | Accuracy | Precision | Recall | F1 | ROC-AUC |
|---|---|---|---|---|---|
| **SVM** | 91.5% | 0.916 | 0.915 | 0.915 | 0.935 |
| **Gradient Boosting** | 91.3% | 0.914 | 0.913 | 0.913 | 0.961 |

---

## 🚀 Deployment

| Layer | Platform | Notes |
|---|---|---|
| **Frontend** | [Render](https://render.com) | Static React build |
| **Backend** | [Hugging Face Spaces](https://huggingface.co/spaces) | FastAPI + Docker (free tier) |

> The backend runs on Hugging Face Spaces free tier. **Cold starts may take 1–2 minutes** after a period of inactivity. Once warm, responses are fast.

---

## 🛠️ Tech Stack

**Backend**
- [FastAPI](https://fastapi.tiangolo.com/) — High-performance Python API framework
- [scikit-learn](https://scikit-learn.org/) — SVM & Gradient Boosting models
- [pandas](https://pandas.pydata.org/) + [numpy](https://numpy.org/) — Data processing
- [joblib](https://joblib.readthedocs.io/) — Model serialization
- [Uvicorn](https://www.uvicorn.org/) — ASGI server

**Frontend**
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Smooth animations
- [Radix UI](https://www.radix-ui.com/) — Accessible component primitives
- [Vite](https://vitejs.dev/) — Fast build tooling

---

## 📁 Project Structure

```
personality-classifier/
├── api/                        # FastAPI backend
│   ├── main.py                 # API endpoints & prediction logic
│   ├── models/                 # Trained ML model files (.pkl)
│   ├── artifacts/              # Preprocessing artifacts (scaler, imputers)
│   └── requirements.txt
│
├── frontend/                   # React + TypeScript frontend
│   ├── src/
│   │   ├── components/         # UI components (QuizForm, ResultCard, etc.)
│   │   └── App.tsx             # Main app with quiz state machine
│   └── package.json
│
└── model_training/             # ML pipeline
    ├── notebook/               # Jupyter notebooks (EDA, training, evaluation)
    ├── dataset/                # Raw & processed datasets
    └── models/                 # Saved model artifacts
```

---

## 🧪 Running Locally

**Backend**
```bash
cd api
docker build -t personality-classifier-api .
docker run -p 8000:8000 personality-classifier-api
# API available at http://localhost:8000
# Docs at http://localhost:8000/docs
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
# App available at http://localhost:5173
```

---

