import { useState, useCallback } from 'react'
import { predictPersonality } from '@/lib/api'
import type { FormValues, PersonalityResponse, QuizState } from '@/types/api'

interface UsePersonalityQuiz {
  state: QuizState
  result: PersonalityResponse | null
  errorMessage: string | null
  isSlowConnection: boolean
  startQuiz: () => void
  submitForm: (values: FormValues) => Promise<void>
  resetQuiz: () => void
}

export function usePersonalityQuiz(): UsePersonalityQuiz {
  const [state, setState] = useState<QuizState>('hero')
  const [result, setResult] = useState<PersonalityResponse | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  const startQuiz = useCallback(() => {
    setState('quiz')
  }, [])

  const submitForm = useCallback(async (values: FormValues) => {
    setState('loading')
    setIsSlowConnection(false)

    const slowTimer = setTimeout(() => setIsSlowConnection(true), 5000)

    try {
      const data = await predictPersonality({
        Time_spent_Alone: values.Time_spent_Alone,
        Stage_fear: values.Stage_fear ? 'Yes' : 'No',
        Social_event_attendance: values.Social_event_attendance,
        Going_outside: values.Going_outside,
        Drained_after_socializing: values.Drained_after_socializing ? 'Yes' : 'No',
        Friends_circle_size: values.Friends_circle_size,
        Post_frequency: values.Post_frequency,
      })
      setResult(data)
      setState('result')
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setErrorMessage(msg)
      setState('error')
    } finally {
      clearTimeout(slowTimer)
    }
  }, [])

  const resetQuiz = useCallback(() => {
    setResult(null)
    setErrorMessage(null)
    setIsSlowConnection(false)
    setState('quiz')
  }, [])

  return { state, result, errorMessage, isSlowConnection, startQuiz, submitForm, resetQuiz }
}
