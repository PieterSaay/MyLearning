import { useNavigate, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import { SUBJECTS, GRADE_COLORS } from '../data/seedData'
import NavBar from '../components/NavBar'
import MasteryBar from '../components/MasteryBar'
import { useGradeMastery } from '../hooks/useMastery'

export default function SubjectScreen() {
  const { grade } = useParams()
  const navigate = useNavigate()
  const gc = GRADE_COLORS[Number(grade)] || GRADE_COLORS[1]
  const masteryRecords = useGradeMastery(grade)

  const subjectMastery = useMemo(() => {
    const map = {}
    for (const r of masteryRecords || []) {
      if (!map[r.subject]) map[r.subject] = { correct: 0, attempts: 0 }
      map[r.subject].correct += r.correct
      map[r.subject].attempts += r.attempts
    }
    return map
  }, [masteryRecords])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title={`Graad ${grade}`} />

      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        <div className={`text-center mb-6 rounded-3xl py-5 px-4 ${gc.light} border-2 ${gc.border}`}>
          <div className="text-5xl mb-1">📖</div>
          <h2 className={`text-2xl font-extrabold ${gc.text}`}>Graad {grade} Vakke</h2>
          <p className="text-gray-500 text-sm mt-1">Kies \'n vak om te begin leer!</p>
        </div>

        <div className="flex flex-col gap-4">
          {SUBJECTS.map(subj => {
            const m = subjectMastery[subj.id] || { correct: 0, attempts: 0 }
            return (
              <button
                key={subj.id}
                onClick={() => navigate(`/grade/${grade}/subject/${subj.id}`)}
                className={`card-press flex items-center gap-4 rounded-2xl p-4 shadow-md border-2 bg-white ${subj.border} hover:shadow-lg active:scale-95 transition-all duration-150`}
              >
                <div className={`w-14 h-14 rounded-2xl ${subj.color} flex items-center justify-center text-3xl shadow-sm flex-shrink-0`}>
                  {subj.emoji}
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className={`text-lg font-extrabold ${subj.text}`}>{subj.label}</div>
                  <MasteryBar correct={m.correct} attempts={m.attempts} className="mt-1" />
                </div>
                <div className="ml-2 text-gray-300 text-2xl flex-shrink-0">›</div>
              </button>
            )
          })}
        </div>
      </main>
    </div>
  )
}
