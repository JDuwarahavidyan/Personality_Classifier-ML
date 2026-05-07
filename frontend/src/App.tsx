import { AnimatePresence, motion } from 'framer-motion'
import { usePersonalityQuiz } from '@/hooks/usePersonalityQuiz'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { HeroSection } from '@/components/hero/HeroSection'
import { QuizForm } from '@/components/quiz/QuizForm'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { ResultCard } from '@/components/result/ResultCard'
import { ErrorAlert } from '@/components/shared/ErrorAlert'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function App() {
  const { state, result, errorMessage, isSlowConnection, startQuiz, submitForm, resetQuiz } =
    usePersonalityQuiz()

  return (
    <PageWrapper>
      <AnimatePresence mode="wait">
        {state === 'hero' && (
          <motion.div key="hero" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <HeroSection onStart={startQuiz} />
          </motion.div>
        )}

        {state === 'quiz' && (
          <motion.div key="quiz" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <QuizForm onSubmit={submitForm} onBack={() => window.location.reload()} />
          </motion.div>
        )}

        {state === 'loading' && (
          <motion.div key="loading" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.25 }}>
            <LoadingSpinner isSlow={isSlowConnection} />
          </motion.div>
        )}

        {state === 'result' && result && (
          <motion.div key="result" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <ResultCard result={result} onReset={resetQuiz} />
          </motion.div>
        )}

        {state === 'error' && (
          <motion.div key="error" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <ErrorAlert message={errorMessage ?? 'Unknown error'} onRetry={resetQuiz} />
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
