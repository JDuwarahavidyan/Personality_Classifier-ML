import { motion } from 'framer-motion'
import { PERSONALITY_TEXT } from '@/data/personalityText'
import { cn } from '@/lib/utils'

interface PersonalityDescriptionProps {
  type: 'Introvert' | 'Extrovert'
}

export function PersonalityDescription({ type }: PersonalityDescriptionProps) {
  const config = PERSONALITY_TEXT[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      <p className="mb-5 leading-relaxed text-slate-300">{config.description}</p>

      <div className="flex flex-wrap gap-2">
        {config.traits.map((trait, i) => (
          <motion.span
            key={trait}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.08 }}
            className={cn(
              'rounded-full border px-3 py-1 text-xs font-semibold',
              type === 'Introvert'
                ? 'border-purple-500/30 bg-purple-500/15 text-purple-300'
                : 'border-amber-500/30 bg-amber-500/15 text-amber-300',
            )}
          >
            {trait}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
