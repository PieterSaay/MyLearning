import { useNavigate, useParams } from 'react-router-dom'
import { SUBJECTS, GRADE_COLORS } from '../data/seedData'
import NavBar from '../components/NavBar'

const ACTIVITIES = [
  { id:'lesson',    label:'Lessons',    emoji:'📖', desc:'Learn something new',         color:'bg-blue-100',   text:'text-blue-700',   border:'border-blue-300' },
  { id:'quiz',      label:'Quizzes',    emoji:'❓', desc:'Test your knowledge',         color:'bg-green-100',  text:'text-green-700',  border:'border-green-300' },
  { id:'flashcard', label:'Flashcards', emoji:'🃏', desc:'Flip & remember key facts',   color:'bg-yellow-100', text:'text-yellow-700', border:'border-yellow-300' },
  { id:'game',      label:'Word Game',  emoji:'🎮', desc:'Play & learn with letters',   color:'bg-purple-100', text:'text-purple-700', border:'border-purple-300' },
]

export default function ActivityScreen() {
  const { grade, subject } = useParams()
  const navigate = useNavigate()
  const subjectInfo = SUBJECTS.find(s => s.id === subject)
  const gc = GRADE_COLORS[Number(grade)] || GRADE_COLORS[1]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title={subjectInfo?.label || subject} />

      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        <div className={`text-center mb-6 rounded-3xl py-5 px-4 ${gc.light} border-2 ${gc.border}`}>
          <div className="text-5xl mb-1">{subjectInfo?.emoji}</div>
          <h2 className={`text-2xl font-extrabold ${gc.text}`}>{subjectInfo?.label}</h2>
          <p className="text-gray-500 text-sm mt-1">Grade {grade} · Choose an activity</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ACTIVITIES.map(act => (
            <button
              key={act.id}
              onClick={() => navigate(`/grade/${grade}/subject/${subject}/activity/${act.id}`)}
              className={`card-press flex flex-col items-center justify-center gap-2 rounded-2xl p-5 shadow-md border-2 ${act.border} ${act.color} hover:shadow-lg active:scale-95 transition-all duration-150 min-h-[130px]`}
            >
              <span className="text-4xl">{act.emoji}</span>
              <span className={`text-base font-extrabold ${act.text}`}>{act.label}</span>
              <span className="text-xs text-gray-500 text-center leading-tight">{act.desc}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
