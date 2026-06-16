import { useParams } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { db } from '../db/db'
import { SUBJECTS } from '../data/seedData'
import NavBar from '../components/NavBar'

export default function LessonScreen() {
  const { grade, subject } = useParams()
  const [idx, setIdx] = useState(0)
  const subjectInfo = SUBJECTS.find(s => s.id === subject)

  const lessons = useLiveQuery(
    () => db.lessons.where({ grade: Number(grade), subject }).toArray(),
    [grade, subject], []
  )

  if (!lessons?.length) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <NavBar title="Lessons" />
        <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
          No lessons available yet for this subject.
        </div>
      </div>
    )
  }

  const lesson = lessons[idx]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title={`${subjectInfo?.emoji} Lessons`} />

      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full">
        {/* Lesson counter */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500 font-semibold">Lesson {idx + 1} of {lessons.length}</span>
          <div className="flex gap-1">
            {lessons.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === idx ? 'bg-indigo-500 scale-125' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Lesson card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border border-indigo-100">
          <div className="text-5xl text-center mb-3">{lesson.emoji}</div>
          <h2 className="text-2xl font-extrabold text-indigo-700 text-center mb-4">{lesson.title}</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">{lesson.content}</p>

          <div className="bg-indigo-50 rounded-2xl p-4">
            <h3 className="font-bold text-indigo-600 mb-2 text-sm uppercase tracking-wide">Key Points</h3>
            <ul className="space-y-2">
              {lesson.keyPoints.map((kp, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setIdx(i => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="flex-1 py-3 rounded-2xl font-bold text-indigo-600 bg-white border-2 border-indigo-200 disabled:opacity-30 active:scale-95 transition-all"
          >
            ← Previous
          </button>
          <button
            onClick={() => setIdx(i => Math.min(lessons.length - 1, i + 1))}
            disabled={idx === lessons.length - 1}
            className="flex-1 py-3 rounded-2xl font-bold text-white bg-indigo-500 disabled:opacity-30 active:scale-95 transition-all shadow-md"
          >
            Next →
          </button>
        </div>

        {idx === lessons.length - 1 && (
          <div className="text-center mt-4 text-green-600 font-bold text-lg animate-bounce-in">
            🎉 You finished all lessons!
          </div>
        )}
      </main>
    </div>
  )
}
