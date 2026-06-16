import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { seedDatabase } from './db/seed'
import HomeScreen from './screens/HomeScreen'
import SubjectScreen from './screens/SubjectScreen'
import ActivityScreen from './screens/ActivityScreen'
import LessonScreen from './screens/LessonScreen'
import QuizScreen from './screens/QuizScreen'
import FlashcardScreen from './screens/FlashcardScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  useEffect(() => {
    seedDatabase().catch(console.error)
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/grade/:grade" element={<SubjectScreen />} />
        <Route path="/grade/:grade/subject/:subject" element={<ActivityScreen />} />
        <Route path="/grade/:grade/subject/:subject/activity/lesson" element={<LessonScreen />} />
        <Route path="/grade/:grade/subject/:subject/activity/quiz" element={<QuizScreen />} />
        <Route path="/grade/:grade/subject/:subject/activity/flashcard" element={<FlashcardScreen />} />
        <Route path="/grade/:grade/subject/:subject/activity/game" element={<GameScreen />} />
      </Routes>
    </HashRouter>
  )
}
