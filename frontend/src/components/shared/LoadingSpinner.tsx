import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  isSlow: boolean
}

export function LoadingSpinner({ isSlow }: LoadingSpinnerProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      {/* Pulsing emoji */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="text-6xl"
      >
        🧠
      </motion.div>

      {/* Spinner ring */}
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500"
        />
      </div>

      {/* Status text */}
      <div className="text-center">
        <p className="text-lg font-semibold text-slate-200">Analyzing your personality…</p>
        <p className="mt-1 text-sm text-slate-500">Consulting SVM &amp; Gradient Boosting models</p>

        {isSlow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-400"
          >
            Waking up the AI server — this can take up to 30 seconds on first load ☕
          </motion.p>
        )}
      </div>
    </div>
  )
}
