import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ConfidenceBarProps {
  modelName: string
  confidence: string
  isPrimary: boolean
}

export function ConfidenceBar({ modelName, confidence, isPrimary }: ConfidenceBarProps) {
  const target = parseFloat(confidence.replace('%', ''))
  const [value, setValue] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setValue(target), isPrimary ? 400 : 600)
    return () => clearTimeout(t)
  }, [target, isPrimary])

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'h-2 w-2 rounded-full',
              isPrimary ? 'bg-purple-400' : 'bg-emerald-400',
            )}
          />
          <span className="text-sm font-medium text-slate-300">{modelName}</span>
          {isPrimary && (
            <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-medium text-purple-400">
              Primary
            </span>
          )}
        </div>
        <motion.span
          className={cn('text-xl font-bold', isPrimary ? 'text-purple-300' : 'text-emerald-300')}
          animate={{ opacity: [0.5, 1] }}
          transition={{ delay: isPrimary ? 0.4 : 0.6 }}
        >
          {confidence}
        </motion.span>
      </div>

      {/* Track */}
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={cn('absolute left-0 top-0 h-full rounded-full', isPrimary ? 'bg-purple-500' : 'bg-emerald-500')}
          initial={{ width: '0%' }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: isPrimary ? 0.4 : 0.6 }}
        />
      </div>
    </div>
  )
}
