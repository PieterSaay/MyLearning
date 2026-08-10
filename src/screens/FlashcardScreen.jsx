import { useParams, useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState, useEffect, useRef, useCallback } from 'react'
import { db } from '../db/db'
import { SUBJECTS } from '../data/seedData'
import NavBar from '../components/NavBar'
import ProgressBar from '../components/ProgressBar'
import { useSubjectMastery, recordAttempt } from '../hooks/useMastery'

export default function FlashcardScreen() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const subjectInfo = SUBJECTS.find(s => s.id === subject)
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState([])
  const [cards, setCards] = useState(null)

  const rawCards = useLiveQuery(
    () => db.flashcards.where({ grade: 4, subject }).toArray(),
    [subject], []
  )
  const masteryRecords = useSubjectMastery(4, subject)
  const initialized = useRef(false)

  const sortCards = useCallback((cs, records) => {
    const map = {}
    for (const m of records) {
      map[m.itemId] = m.attempts > 0 ? m.correct / m.attempts : -1
    }
    return [...cs].sort((a, b) => (map[a.id] ?? -1) - (map[b.id] ?? -1))
  }, [])

  useEffect(() => {
    if (!rawCards?.length || initialized.current) return
    setCards(sortCards(rawCards, masteryRecords))
    initialized.current = true
  }, [rawCards, masteryRecords, sortCards])

  if (!cards) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <NavBar title="Flitskaarte" />
        <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
          Geen flitskaarte vir hierdie vak nie.
        </div>
      </div>
    )
  }

  const card = cards[idx]
  const done = idx >= cards.length

  const markKnown = (didKnow) => {
    recordAttempt(card.id, 'flashcard', 4, subject, didKnow)
    if (didKnow) setKnown(k => [...k, idx])
    setIdx(idx + 1)
    setFlipped(false)
  }

  const handleRestart = () => {
    setCards(sortCards(rawCards, masteryRecords))
    setIdx(0)
    setFlipped(false)
    setKnown([])
  }

  if (done) {
    const pct = Math.round((known.length / cards.length) * 100)
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <NavBar title="Flitskaarte" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
          <div className="text-7xl animate-bounce-in">{pct >= 70 ? '🏆' : '💪'}</div>
          <h2 className="text-2xl font-extrabold text-orange-600">Alle kaarte klaar!</h2>
          <div className="bg-white rounded-2xl shadow-md px-8 py-4 border-2 border-orange-200">
            <p className="text-3xl font-extrabold text-orange-500">{known.length}<span className="text-gray-400 text-xl font-bold">/{cards.length}</span></p>
            <p className="text-gray-500 text-sm mt-1">kaarte geken</p>
          </div>
          <p className="text-gray-400 text-sm">{pct >= 70 ? 'Uitstekende werk! 🌟' : 'Oefen die moeilike kaarte weer!'}</p>
          <div className="flex gap-4 mt-2">
            <button onClick={handleRestart} className="px-6 py-3 rounded-2xl bg-orange-400 text-white font-bold shadow active:scale-95 transition-all">
              Weer Speel 🔄
            </button>
            <button onClick={() => navigate(-1)} className="px-6 py-3 rounded-2xl bg-white border-2 border-orange-200 text-orange-600 font-bold active:scale-95 transition-all">
              Klaar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <NavBar title={`${subjectInfo?.emoji} Flitskaarte`} />

      <main className="flex-1 px-4 py-4 max-w-lg mx-auto w-full flex flex-col gap-4">
        <ProgressBar current={idx} total={cards.length} color="bg-orange-400" />

        <p className="text-center text-gray-500 text-sm font-semibold">
          Kaart {idx + 1} van {cards.length}
          {known.length > 0 && <span className="ml-2 text-green-500">· {known.length} geken ✓</span>}
        </p>

        {/* 3-D flip card */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flip-scene w-full max-w-sm" style={{ height: 240 }}>
            <div
              className={`flip-card w-full h-full cursor-pointer`}
              style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              onClick={() => setFlipped(f => !f)}
            >
              {/* Front */}
              <div className="flip-face rounded-3xl shadow-xl border-4 border-amber-300 bg-white flex flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="text-5xl">{card.emoji}</span>
                <span className="text-lg font-extrabold text-gray-800 leading-snug">{card.front}</span>
                <span className="text-xs text-amber-400 font-semibold mt-1">👆 Tik om antwoord te wys</span>
              </div>
              {/* Back */}
              <div className="flip-face flip-back rounded-3xl shadow-xl border-4 border-green-300 bg-green-50 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="text-5xl">{card.emoji}</span>
                <span className="text-base font-bold text-gray-700 leading-snug">{card.back}</span>
                <span className="text-xs text-green-400 font-semibold mt-1">👆 Tik om vraag te wys</span>
              </div>
            </div>
          </div>

          {/* Know / don't know buttons — only visible when flipped */}
          <div className={`flex gap-4 mt-6 w-full max-w-sm transition-all duration-300 ${flipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <button
              onClick={() => markKnown(false)}
              className="flex-1 py-4 rounded-2xl bg-red-100 border-2 border-red-300 text-red-700 font-extrabold text-sm active:scale-95 transition-all shadow-sm"
            >
              😕 Nog leer
            </button>
            <button
              onClick={() => markKnown(true)}
              className="flex-1 py-4 rounded-2xl bg-green-400 text-white font-extrabold text-sm shadow-md active:scale-95 transition-all"
            >
              ✅ Ek het dit!
            </button>
          </div>

          {!flipped && (
            <p className="text-gray-300 text-sm mt-6 text-center select-none">
              ↑ Tik die kaart om te flip
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
