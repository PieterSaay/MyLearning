import { useParams, useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { db } from '../db/db'
import { SUBJECTS, GRADE_COLOR } from '../data/seedData'
import NavBar from '../components/NavBar'
import ProgressBar from '../components/ProgressBar'
import { useProgress } from '../hooks/useProgress'

const KP_COLORS = [
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-green-100 text-green-700 border-green-200',
  'bg-purple-100 text-purple-700 border-purple-200',
  'bg-orange-100 text-orange-700 border-orange-200',
]

export default function LessonScreen() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const [idx, setIdx] = useState(0)
  const subjectInfo = SUBJECTS.find(s => s.id === subject)
  const gc = GRADE_COLOR
  const { save } = useProgress(4, subject)

  const lessons = useLiveQuery(
    () => db.lessons.where({ grade: 4, subject }).toArray(),
    [subject], []
  )

  const goTo = (i) => {
    if (i < 0 || !lessons || i >= lessons.length) return
    setIdx(i)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!lessons?.length) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <NavBar title="Lesse" />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <div className="text-6xl">📭</div>
          <p className="text-gray-400 text-lg font-semibold">Geen lesse beskikbaar vir hierdie vak nie.</p>
          <button onClick={() => navigate(-1)} className="px-5 py-2 rounded-2xl bg-indigo-100 text-indigo-600 font-bold active:scale-95">
            ← Terug
          </button>
        </div>
      </div>
    )
  }

  const lesson = lessons[idx]
  const isLast = idx === lessons.length - 1

  const handleFinish = () => {
    save('lesson', lessons.length, lessons.length)
    navigate(-1)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title={`${subjectInfo?.emoji} Lesse`} />

      <main className="flex-1 px-4 py-5 max-w-lg mx-auto w-full">
        {/* Progress */}
        {lessons.length <= 12 ? (
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm font-bold text-gray-500">Les {idx + 1} van {lessons.length}</span>
            <div className="flex gap-1.5">
              {lessons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-200 ${i === idx ? 'w-6 h-3 bg-indigo-500' : i < idx ? 'w-3 h-3 bg-indigo-300' : 'w-3 h-3 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-5">
            <ProgressBar current={idx + 1} total={lessons.length} color="bg-indigo-500" />
          </div>
        )}

        {/* Lesson card */}
        <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 overflow-hidden animate-slide-up">
          {/* Coloured emoji banner */}
          <div className={`${gc.light} border-b ${gc.border} py-6 flex flex-col items-center gap-2`}>
            <span className="text-7xl drop-shadow-sm">{lesson.emoji}</span>
            <h2 className={`text-2xl font-extrabold ${gc.text} text-center px-4 leading-tight`}>{lesson.title}</h2>
          </div>

          {/* Content — whitespace-pre-wrap so \n and emoji lines display correctly */}
          <div className="p-5">
            <p className="lesson-content text-gray-700 text-[15px] leading-7">{lesson.content}</p>
          </div>

          {/* Key points */}
          <div className="mx-4 mb-5 rounded-2xl bg-indigo-50 border border-indigo-100 p-4">
            <h3 className="text-xs font-extrabold text-indigo-500 uppercase tracking-widest mb-3">
              ✨ Sleutelpunte
            </h3>
            <div className="flex flex-col gap-2">
              {lesson.keyPoints.map((kp, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 rounded-xl border px-3 py-2 text-sm font-semibold ${KP_COLORS[i % KP_COLORS.length]}`}
                >
                  <span className="mt-0.5 font-extrabold">{i + 1}.</span>
                  <span className="leading-snug">{kp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={() => goTo(idx - 1)}
            disabled={idx === 0}
            className="flex-1 py-3 rounded-2xl font-bold text-indigo-600 bg-white border-2 border-indigo-200 disabled:opacity-25 active:scale-95 transition-all shadow-sm"
          >
            ← Vorige
          </button>
          {isLast ? (
            <button
              onClick={handleFinish}
              className="flex-1 py-3 rounded-2xl font-extrabold text-white bg-green-500 active:scale-95 transition-all shadow-md"
            >
              🎉 Klaar!
            </button>
          ) : (
            <button
              onClick={() => goTo(idx + 1)}
              className="flex-1 py-3 rounded-2xl font-extrabold text-white bg-indigo-500 active:scale-95 transition-all shadow-md"
            >
              Volgende →
            </button>
          )}
        </div>

        {isLast && (
          <div className="text-center mt-4 text-green-600 font-bold text-lg animate-bounce-in">
            🎊 Jy het al die lesse voltooi!
          </div>
        )}
      </main>
    </div>
  )
}
