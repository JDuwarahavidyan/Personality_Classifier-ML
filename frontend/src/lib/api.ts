import { env } from '@/env'
import type { PersonalityRequest, PersonalityResponse } from '@/types/api'

export async function predictPersonality(
  data: PersonalityRequest,
  signal?: AbortSignal
): Promise<PersonalityResponse> {
  const response = await fetch(env.PREDICT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    signal,
  })

  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${response.statusText}`)
  }

  return response.json() as Promise<PersonalityResponse>
}
