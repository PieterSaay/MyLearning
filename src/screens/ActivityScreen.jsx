import { useNavigate, useParams } from 'react-router-dom'
import { SUBJECTS, GRADE_COLOR } from '../data/seedData'
import NavBar from '../components/NavBar'

const ACTIVITIES = [
  { id:'lesson',    label:'Lesse',       emoji:'📖', desc:'Leer iets nuuts stap vir stap',  color:'bg-blue-50',   text:'text-blue-700',   border:'border-blue-300',   ring:'ring-blue-200' },
  { id:'quiz',      label:'Vraelys',     emoji:'🧠', desc:'Toets jou kennis!',              color:'bg-green-50',  text:'text-green-700',  border:'border-green-300',  ring:'ring-green-200' },
  { id:'flashcard', label:'Flitskaarte', emoji:'🃏', desc:'Flip & onthou sleutelpunte',     color:'bg-amber-50',  text:'text-amber-700',  border:'border-amber-300',  ring:'ring-amber-200' },
  { id:'game',      label:'Woordspel',   emoji:'🎮', desc:'Speel & leer met woorde',        color:'bg-purple-50', text:'text-purple-700', border:'border-purple-300', ring:'ring-purple-200' },
]

export default function ActivityScreen() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const subjectInfo = SUBJECTS.find(s => s.id === subject)
  const gc = GRADE_COLOR

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title={subjectInfo?.label || subject} />

      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        {/* Subject banner */}
        <div className={`text-center mb-6 rounded-3xl py-6 px-4 ${gc.light} border-2 ${gc.border} shadow-sm`}>
          <div className="text-6xl mb-2">{subjectInfo?.emoji}</div>
          <h2 className={`text-2xl font-extrabold ${gc.text}`}>{subjectInfo?.label}</h2>
          <p className="text-gray-400 text-sm mt-1 font-semibold">Graad 4 · Kies 'n aktiwiteit</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ACTIVITIES.map((act, i) => (
            <button
              key={act.id}
              onClick={() => navigate(`/subject/${subject}/activity/${act.id}`)}
              className={`card-press flex flex-col items-center justify-center gap-3 rounded-3xl p-5 shadow-md border-2 ${act.border} ${act.color} active:scale-95 transition-all duration-150 min-h-[140px]`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-5xl">{act.emoji}</span>
              <span className={`text-sm font-extrabold ${act.text} text-center`}>{act.label}</span>
              <span className="text-xs text-gray-400 text-center leading-tight">{act.desc}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
