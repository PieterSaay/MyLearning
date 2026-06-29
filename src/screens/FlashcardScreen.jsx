import { useParams, useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { db } from '../db/db'
import { SUBJECTS } from '../data/seedData'
import NavBar from '../components/NavBar'
import ProgressBar from '../components/ProgressBar'

export default function FlashcardScreen() {
  const { grade, subject } = useParams()
  const navigate = useNavigate()
  const subjectInfo = SUBJECTS.find(s => s.id === subject)
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState([])

  const cards = useLiveQuery(
    () => db.flashcards.where({ grade: Number(grade), subject }).toArray(),
    [grade, subject], []
  )

  if (!cards?.length) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
        <NavBar title="Flitskaarte" />
        <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">Geen flitskaarte vir hierdie vak nie.</div>
      </div>
    )
  }

  const card = cards[idx]
  const done = idx >= cards.length

  const markKnown = (didKnow) => {
    if (didKnow) setKnown(k => [...k, idx])
    const next = idx + 1
    setIdx(next)
    setFlipped(false)
  }

  if (done) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
        <NavBar title="Flitskaarte" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-extrabold text-orange-600 mb-2">Alle kaarte klaar!</h2>
          <p className="text-gray-500 mb-6">Jy het {known.length} van {cards.length} kaarte geken</p>
          <div className="flex gap-4">
            <button onClick={() => { setIdx(0); setFlipped(false); setKnown([]) }} className="px-6 py-3 rounded-2xl bg-orange-400 text-white font-bold shadow active:scale-95">
              Weer Speel
            </button>
            <button onClick={() => navigate(-1)} className="px-6 py-3 rounded-2xl bg-white border-2 border-orange-200 text-orange-600 font-bold active:scale-95">
              Klaar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <NavBar title={`${subjectInfo?.emoji} Flitskaarte`} />

      <main className="flex-1 px-4 py-4 max-w-lg mx-auto w-full flex flex-col gap-4">
        <ProgressBar current={idx} total={cards.length} color="bg-orange-400" />

        {/* Flashcard */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <button
            onClick={() => setFlipped(f => !f)}
            className="w-full max-w-sm aspect-[3/2] rounded-3xl shadow-xl border-4 border-yellow-300 flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 active:scale-95"
            style={{ background: flipped ? '#fef3c7' : '#fff' }}
          >
            <span className="text-4xl">{card.emoji}</span>
            <span className="text-xl font-extrabold text-center text-gray-800 leading-snug">
              {flipped ? card.back : card.front}
            </span>
            <span className="text-xs text-gray-400 mt-2">
              {flipped ? '← Draai vir die vraag' : 'Tik om antwoord te wys →'}
            </span>
          </button>

          {flipped && (
            <div className="flex gap-4 mt-6 w-full max-w-sm">
              <button
                onClick={() => markKnown(false)}
                className="flex-1 py-4 rounded-2xl bg-red-100 border-2 border-red-300 text-red-700 font-bold active:scale-95 transition-all"
              >
                😕 Nog aan leer
              </button>
              <button
                onClick={() => markKnown(true)}
                className="flex-1 py-4 rounded-2xl bg-green-400 text-white font-bold shadow-md active:scale-95 transition-all"
              >
                ✅ Ek het dit!
              </button>
            </div>
          )}

          {!flipped && (
            <p className="text-gray-400 text-sm mt-6">Kaart {idx + 1} van {cards.length}</p>
          )}
        </div>
      </main>
    </div>
  )
}
