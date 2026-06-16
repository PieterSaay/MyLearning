import { useNavigate } from 'react-router-dom'
import { GRADES, GRADE_COLORS } from '../data/seedData'

const GRADE_EMOJIS = { 1:'🌱', 2:'🌟', 3:'🚀', 4:'🔥', 5:'💡', 6:'⚡', 7:'🏆' }

export default function HomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="text-center pt-10 pb-4 px-4">
        <div className="text-6xl mb-3">🌟</div>
        <h1 className="text-4xl font-extrabold text-indigo-700 leading-tight">WonderLearn</h1>
        <p className="text-gray-500 mt-2 text-lg">CAPS-aligned learning for South African kids</p>
      </header>

      {/* Grade selector */}
      <main className="flex-1 px-4 pb-8">
        <h2 className="text-center text-xl font-bold text-gray-700 mb-5 mt-2">Which grade are you in?</h2>
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto sm:max-w-md sm:grid-cols-3">
          {GRADES.map(grade => {
            const c = GRADE_COLORS[grade]
            return (
              <button
                key={grade}
                onClick={() => navigate(`/grade/${grade}`)}
                className={`card-press flex flex-col items-center justify-center gap-2 rounded-3xl p-5 shadow-lg border-4 ${c.border} ${c.light} hover:shadow-xl active:scale-95 transition-all duration-150`}
              >
                <span className="text-4xl">{GRADE_EMOJIS[grade]}</span>
                <span className={`text-xl font-extrabold ${c.text}`}>Grade {grade}</span>
              </button>
            )
          })}
        </div>

        {/* Offline badge */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white/70 px-4 py-2 rounded-full shadow-sm">
            <span className="text-green-500 font-bold">●</span> Works offline · Powered by CAPS curriculum
          </span>
        </div>
      </main>
    </div>
  )
}
