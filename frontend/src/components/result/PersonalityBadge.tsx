import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PERSONALITY_TEXT } from '@/data/personalityText'

interface PersonalityBadgeProps {
  type: 'Introvert' | 'Extrovert'
}

export function PersonalityBadge({ type }: PersonalityBadgeProps) {
  const config = PERSONALITY_TEXT[type]

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Emoji with glow ring */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
        className="relative"
      >
        <div className={cn('absolute inset-0 rounded-full blur-2xl', `shadow-2xl ${config.glow}`)} />
        <div
          className={cn(
            'relative flex h-24 w-24 items-center justify-center rounded-full border-2 ring-4',
            'border-white/10 bg-white/5',
            config.ring,
          )}
        >
          <span className="text-5xl">{config.emoji}</span>
        </div>
      </motion.div>

      {/* Type label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
          You are an
        </p>
        <h2
          className={cn(
            'text-5xl font-black tracking-tight bg-gradient-to-r bg-clip-text text-transparent sm:text-6xl',
            config.gradient,
          )}
        >
          {type}
        </h2>
        <p className="mt-2 text-base text-slate-300">{config.headline}</p>
      </motion.div>
    </div>
  )
}
