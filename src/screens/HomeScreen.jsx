import { useNavigate } from 'react-router-dom'
import { GRADES, GRADE_COLORS } from '../data/seedData'
import { getApiKey } from '../hooks/useApiKey'

const GRADE_EMOJIS = { 1:'🌱', 2:'🌟', 3:'🚀', 4:'🔥', 5:'💡', 6:'⚡', 7:'🏆' }
const GRADE_ANIMALS = { 1:'🐣', 2:'🐸', 3:'🦊', 4:'🦁', 5:'🐬', 6:'🦅', 7:'🦄' }

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Goeie môre'
  if (h < 17) return 'Goeie middag'
  return 'Goeie aand'
}

export default function HomeScreen() {
  const navigate = useNavigate()

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
        <p className="text-gray-400 text-sm mt-1">CAPS-leer vir Suid-Afrikaanse kinders</p>
      </header>

      {/* Grade picker */}
      <main className="flex-1 px-4 pb-10">
        <div className="bg-white/60 backdrop-blur rounded-3xl p-4 shadow-inner mb-5 max-w-sm mx-auto text-center">
          <p className="text-gray-600 font-bold text-lg">🎒 In watter graad is jy?</p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto sm:max-w-md sm:grid-cols-3 sm:gap-5">
          {GRADES.map(grade => {
            const c = GRADE_COLORS[grade]
            return (
              <button
                key={grade}
                onClick={() => navigate(`/grade/${grade}`)}
                className={`card-press flex flex-col items-center justify-center gap-2 rounded-3xl py-6 px-3 shadow-lg border-4 ${c.border} ${c.light} active:scale-95 transition-all duration-150`}
                style={{ boxShadow: '0 6px 18px 0 rgba(0,0,0,0.10)' }}
              >
                <span className="text-5xl leading-none">{GRADE_ANIMALS[grade]}</span>
                <span className={`text-xs font-extrabold uppercase tracking-wide ${c.text}`}>
                  {GRADE_EMOJIS[grade]} Graad {grade}
                </span>
              </button>
            )
          })}
        </div>

        {/* Offline badge */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white/70 px-4 py-2 rounded-full shadow-sm">
            <span className="text-green-500 font-bold text-sm">●</span>
            Werk sonder internet · Alle grade 1–7
          </span>
        </div>
      </main>
    </div>
  )
}
