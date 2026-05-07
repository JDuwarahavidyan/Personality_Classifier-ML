export interface PersonalityRequest {
  Time_spent_Alone: number
  Stage_fear: 'Yes' | 'No'
  Social_event_attendance: number
  Going_outside: number
  Drained_after_socializing: 'Yes' | 'No'
  Friends_circle_size: number
  Post_frequency: number
}

export interface PersonalityResponse {
  prediction: 'Introvert' | 'Extrovert'
  confidence: string
  model: string
  secondary_prediction: 'Introvert' | 'Extrovert'
  secondary_confidence: string
  secondary_model: string
}

export type QuizState = 'hero' | 'quiz' | 'loading' | 'result' | 'error'

export interface FormValues {
  Time_spent_Alone: number
  Stage_fear: boolean
  Social_event_attendance: number
  Going_outside: number
  Drained_after_socializing: boolean
  Friends_circle_size: number
  Post_frequency: number
}
