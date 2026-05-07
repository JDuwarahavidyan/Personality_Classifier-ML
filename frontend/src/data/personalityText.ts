export const PERSONALITY_TEXT = {
  Introvert: {
    emoji: '🧠',
    headline: 'You recharge in solitude and think deeply.',
    description:
      'Introverts are reflective, observant, and thrive in meaningful one-on-one connections. You process the world from the inside out — ideas first, action second. Your inner world is rich, your focus laser-sharp.',
    traits: ['Deep Thinker', 'Empathetic Listener', 'Creative', 'Observant', 'Loyal'],
    gradient: 'from-purple-400 via-violet-400 to-indigo-400',
    glow: 'shadow-purple-500/60',
    ring: 'ring-purple-500/40',
    barColor: 'bg-purple-500',
  },
  Extrovert: {
    emoji: '🌟',
    headline: 'You light up every room you walk into.',
    description:
      'Extroverts are energized by people, thrive in dynamic environments, and bring warmth and enthusiasm wherever they go. You think out loud, connect easily, and turn strangers into friends in minutes.',
    traits: ['Charismatic', 'Energetic', 'Spontaneous', 'Expressive', 'Natural Leader'],
    gradient: 'from-amber-400 via-orange-400 to-rose-400',
    glow: 'shadow-amber-500/60',
    ring: 'ring-amber-500/40',
    barColor: 'bg-amber-500',
  },
} as const
