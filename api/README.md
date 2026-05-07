# 🧠 Personality Classifier API

<div align="center">

![Banner](https://img.shields.io/badge/ML-Personality%20Classifier-blueviolet?style=for-the-badge&logo=brain)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.9-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker)

> **Predict whether a person is an Introvert or Extrovert based on behavioral characteristics using Machine Learning.**

</div>

---

## ✨ Overview

This API accepts behavioral data about a person and returns a personality prediction — **Introvert** or **Extrovert** — powered by two trained ML models: **SVM** (primary) and **Gradient Boosting** (secondary).

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `POST` | `/predict` | Predict personality type |
| `GET` | `/docs` | Interactive Swagger UI |

---

## 📥 Request Format

```json
{
    "Time_spent_Alone": 7,
    "Stage_fear": "Yes",
    "Social_event_attendance": 2,
    "Going_outside": 2,
    "Drained_after_socializing": "Yes",
    "Friends_circle_size": 3,
    "Post_frequency": 1
}
```

## 📤 Response Format

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

## 🔧 Input Features

| Feature | Type | Range | Description |
|---------|------|-------|-------------|
| `Time_spent_Alone` | `float` | 0 – 11 | Hours spent alone per day |
| `Stage_fear` | `string` | Yes / No | Has stage fear |
| `Social_event_attendance` | `float` | 0 – 10 | Social event frequency |
| `Going_outside` | `float` | 0 – 10 | Goes outside frequency |
| `Drained_after_socializing` | `string` | Yes / No | Feels drained after socializing |
| `Friends_circle_size` | `float` | 0 – 15 | Number of close friends |
| `Post_frequency` | `float` | 0 – 10 | Social media post frequency |

---

## 📊 Model Performance

| Model | Accuracy | Precision | Recall | F1 Score | ROC-AUC |
|-------|----------|-----------|--------|----------|---------|
| ⭐ **SVM** (Primary) | 91.5% | 0.916 | 0.915 | 0.915 | 0.935 |
| Gradient Boosting | 91.3% | 0.914 | 0.913 | 0.913 | 0.961 |

> SVM was selected as the primary model for its consistent and balanced performance across all metrics.

---

## 🔄 Preprocessing Pipeline

```
Raw Input
    │
    ▼
Encode Yes/No columns → 0 / 1
    │
    ▼
Impute Missing Values (median / mode)
    │
    ▼
Standard Scaling
    │
    ▼
Predict → Introvert / Extrovert
```

---

## 🧪 Test with curl

```bash
curl -X POST "https://duwarahavidyan-personality-classifier-api.hf.space/predict" \
-H "Content-Type: application/json" \
-d '{
    "Time_spent_Alone": 7,
    "Stage_fear": "Yes",
    "Social_event_attendance": 2,
    "Going_outside": 2,
    "Drained_after_socializing": "Yes",
    "Friends_circle_size": 3,
    "Post_frequency": 1
}'
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| API Framework | FastAPI |
| ML Library | scikit-learn 1.5.0 |
| Models | SVM, Gradient Boosting |
| Containerization | Docker |
| Hosting | Hugging Face Spaces |
| Language | Python 3.9 |

---

## 👤 Author

<div align="center">

**Duwarahavidyan**

*Built as part of a technical assessment for an AI/ML Engineering role.*

</div>