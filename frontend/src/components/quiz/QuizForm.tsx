import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, ArrowLeft } from 'lucide-react'
import { FIELD_CONFIG } from '@/data/fieldConfig'
import { SliderField } from './SliderField'
import { ToggleField } from './ToggleField'
import type { FormValues } from '@/types/api'

const DEFAULT_VALUES: FormValues = {
  Time_spent_Alone: 5,
  Stage_fear: false,
  Social_event_attendance: 5,
  Going_outside: 5,
  Drained_after_socializing: false,
  Friends_circle_size: 7,
  Post_frequency: 5,
}

interface QuizFormProps {
  onSubmit: (values: FormValues) => Promise<void>
  onBack: () => void
}

export function QuizForm({ onSubmit, onBack }: QuizFormProps) {
  const [values, setValues] = useState<FormValues>(DEFAULT_VALUES)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void onSubmit(values)
  }

  const setField = <K extends keyof FormValues>(key: K, val: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: val }))
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-col items-center text-center"
      >
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-1.5 self-start text-sm text-slate-500 transition-colors hover:text-slate-300"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <h2 className="text-3xl font-bold text-white">
          Tell Us About{' '}
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Yourself
          </span>
        </h2>
        <p className="mt-2 text-slate-400">
          Adjust each slider and toggle to match your typical behaviour
        </p>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {FIELD_CONFIG.map((field, i) => (
            <motion.div
              key={field.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              {field.type === 'slider' ? (
                <SliderField
                  config={field}
                  value={values[field.key] as number}
                  onChange={(v) => setField(field.key, v as FormValues[typeof field.key])}
                />
              ) : (
                <ToggleField
                  config={field}
                  value={values[field.key] as boolean}
                  onChange={(v) => setField(field.key, v as FormValues[typeof field.key])}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-8 flex justify-center"
        >
          <button
            type="submit"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 px-10 py-4 text-lg font-semibold text-white shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 active:scale-100"
          >
            <Wand2 className="h-5 w-5" />
            Analyze My Personality
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </motion.div>
      </form>
    </div>
  )
}
