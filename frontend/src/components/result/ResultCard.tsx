import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import type { PersonalityResponse } from '@/types/api'
import { PersonalityBadge } from './PersonalityBadge'
import { ConfidenceBar } from './ConfidenceBar'
import { PersonalityDescription } from './PersonalityDescription'

interface ResultCardProps {
  result: PersonalityResponse
  onReset: () => void
}

export function ResultCard({ result, onReset }: ResultCardProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        className="w-full max-w-lg"
      >
        {/* Main card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
          {/* Badge */}
          <PersonalityBadge type={result.prediction} />

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Confidence bars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-3"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Model Confidence
            </p>
            <ConfidenceBar
              modelName={result.model}
              confidence={result.confidence}
              isPrimary
            />
            <ConfidenceBar
              modelName={result.secondary_model}
              confidence={result.secondary_confidence}
              isPrimary={false}
            />
          </motion.div>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Description */}
          <PersonalityDescription type={result.prediction} />

          {/* Reset button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 flex justify-center"
          >
            <button
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
              Take Again
            </button>
          </motion.div>
        </div>

        {/* Agreement note */}
        {result.prediction === result.secondary_prediction && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-4 text-center text-xs text-slate-600"
          >
            Both models agree — high confidence result ✓
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
