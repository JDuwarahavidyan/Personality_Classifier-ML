import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw } from 'lucide-react'

interface ErrorAlertProps {
  message: string
  onRetry: () => void
}

export function ErrorAlert({ message, onRetry }: ErrorAlertProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md rounded-3xl border border-rose-500/30 bg-rose-500/10 p-8 text-center backdrop-blur-sm"
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400">
            <AlertTriangle className="h-7 w-7" />
          </div>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">Something went wrong</h3>
        <p className="mb-6 text-sm text-slate-400">{message}</p>

        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-rose-500 hover:scale-105 active:scale-100"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      </motion.div>
    </div>
  )
}
