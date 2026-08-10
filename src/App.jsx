import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { seedDatabase } from './db/seed'
import HomeScreen from './screens/HomeScreen'
import ActivityScreen from './screens/ActivityScreen'
import LessonScreen from './screens/LessonScreen'
import QuizScreen from './screens/QuizScreen'
import FlashcardScreen from './screens/FlashcardScreen'
import GameScreen from './screens/GameScreen'
import SettingsScreen from './screens/SettingsScreen'

export default function App() {
  useEffect(() => {
    seedDatabase().catch(console.error)
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/subject/:subject" element={<ActivityScreen />} />
        <Route path="/subject/:subject/activity/lesson" element={<LessonScreen />} />
        <Route path="/subject/:subject/activity/quiz" element={<QuizScreen />} />
        <Route path="/subject/:subject/activity/flashcard" element={<FlashcardScreen />} />
        <Route path="/subject/:subject/activity/game" element={<GameScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
      </Routes>
    </HashRouter>
  )
}
