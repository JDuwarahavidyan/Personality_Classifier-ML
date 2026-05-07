import { motion } from 'framer-motion'
import { Brain, Sparkles, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  onStart: () => void
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      {/* Floating emoji */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-8"
      >
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute h-28 w-28 rounded-full bg-purple-500/20 blur-xl" />
          <span className="relative text-7xl">🧬</span>
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300"
      >
        <Sparkles className="h-3.5 w-3.5" />
        AI-Powered Personality Analysis
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
      >
        Discover Your{' '}
        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
          True Self
        </span>
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4 max-w-2xl text-lg text-slate-400"
      >
        Answer 7 questions about your social habits and let our dual AI models — SVM & Gradient
        Boosting — reveal whether you're an Introvert or Extrovert with up to{' '}
        <span className="font-semibold text-slate-300">91.5% accuracy</span>.
      </motion.p>

      {/* Model chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-10 flex flex-wrap justify-center gap-3"
      >
        {[
          { label: 'SVM', desc: '91.5% accuracy', color: 'bg-purple-500/15 text-purple-300 border-purple-500/25' },
          {
            label: 'Gradient Boosting',
            desc: '91.3% accuracy',
            color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
          },
          { label: '7 Features', desc: 'behavioral inputs', color: 'bg-blue-500/15 text-blue-300 border-blue-500/25' },
        ].map(({ label, desc, color }) => (
          <div key={label} className={`rounded-full border px-4 py-1.5 text-sm ${color}`}>
            <span className="font-semibold">{label}</span>{' '}
            <span className="opacity-70">· {desc}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 active:scale-100"
        >
          <Brain className="h-5 w-5" />
          Discover Your Personality
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          {/* Shimmer overlay */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-sm text-slate-600"
      >
        Takes less than 2 minutes · No sign-up required
      </motion.p>
    </div>
  )
}
