import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { SUBJECTS, GRADE_COLOR } from '../data/seedData'
import { getApiKey } from '../hooks/useApiKey'
import { useGradeMastery } from '../hooks/useMastery'

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Goeie môre'
  if (h < 17) return 'Goeie middag'
  return 'Goeie aand'
}

function StarMastery({ pct }) {
  const filled = pct >= 67 ? 3 : pct >= 34 ? 2 : pct > 0 ? 1 : 0
  return (
    <div className="flex items-center gap-1">
      {[1,2,3].map(n => (
        <span key={n} className={`text-lg ${n <= filled ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
      ))}
      {pct > 0 && <span className="text-xs text-gray-400 font-semibold ml-1">{pct}%</span>}
      {pct === 0 && <span className="text-xs text-gray-400 font-semibold ml-1">Begin!</span>}
    </div>
  )
}

export default function HomeScreen() {
  const navigate = useNavigate()
  const masteryRecords = useGradeMastery(4)

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100">
      {/* Settings gear */}
      <button
        onClick={() => navigate('/settings')}
        className="absolute top-4 right-4 p-2 rounded-xl bg-white/80 border border-indigo-100 text-xl active:scale-95 transition-all z-10 shadow-sm"
        title="Instellings"
      >
        ⚙️
        {getApiKey() && <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-400 block" />}
      </button>

      {/* Header / mascot */}
      <header className="text-center pt-10 pb-6 px-4">
        <div className="animate-mascot inline-block text-7xl mb-2 drop-shadow-md select-none">🦁</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 leading-tight tracking-tight">
          WonderLearn
        </h1>
        <p className="text-indigo-500 font-semibold mt-1 text-base">{getGreeting()}, WonderLeerder! 👋</p>
        <p className="text-gray-400 text-sm mt-1">CAPS-leer vir Graad 4-leerders</p>
      </header>

      {/* Subject list */}
      <main className="flex-1 px-4 pb-10 max-w-md mx-auto w-full">
        <div className={`text-center mb-6 rounded-3xl py-5 px-4 ${GRADE_COLOR.light} border-2 ${GRADE_COLOR.border} shadow-sm`}>
          <div className="text-5xl mb-1">📚</div>
          <h2 className={`text-2xl font-extrabold ${GRADE_COLOR.text}`}>Graad 4 Vakke</h2>
          <p className="text-gray-400 text-sm mt-1 font-semibold">Kies 'n vak om te leer!</p>
        </div>

        <div className="flex flex-col gap-3">
          {SUBJECTS.map(subj => {
            const m = subjectMastery[subj.id] || { correct: 0, attempts: 0 }
            const pct = m.attempts > 0 ? Math.round((m.correct / m.attempts) * 100) : 0
            return (
              <button
                key={subj.id}
                onClick={() => navigate(`/subject/${subj.id}`)}
                className={`card-press flex items-center gap-4 rounded-2xl p-4 shadow-md border-2 bg-white ${subj.border} active:scale-95 transition-all duration-150`}
              >
                <div className={`w-14 h-14 rounded-2xl ${subj.color} flex items-center justify-center text-3xl shadow-sm flex-shrink-0`}>
                  {subj.emoji}
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className={`text-base font-extrabold ${subj.text}`}>{subj.label}</div>
                  <StarMastery pct={pct} />
                </div>
                <div className="text-gray-300 text-2xl flex-shrink-0">›</div>
              </button>
            )
          })}
        </div>

        {/* Offline badge */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white/70 px-4 py-2 rounded-full shadow-sm">
            <span className="text-green-500 font-bold text-sm">●</span>
            Werk sonder internet
          </span>
        </div>
      </main>
    </div>
  )
}
