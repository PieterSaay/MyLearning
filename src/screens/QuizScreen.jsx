import { useParams, useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState, useCallback } from 'react'
import { db } from '../db/db'
import { SUBJECTS } from '../data/seedData'
import { useProgress } from '../hooks/useProgress'
import NavBar from '../components/NavBar'
import ProgressBar from '../components/ProgressBar'
import RewardAnimation from '../components/RewardAnimation'

export default function QuizScreen() {
  const { grade, subject } = useParams()
  const navigate = useNavigate()
  const subjectInfo = SUBJECTS.find(s => s.id === subject)
  const { save } = useProgress(Number(grade), subject)

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [showReward, setShowReward] = useState(false)

  const questions = useLiveQuery(
    () => db.questions.where({ grade: Number(grade), subject }).toArray(),
    [grade, subject], []
  )

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    setShowExplanation(true)
    const correct = idx === questions[current].answer
    if (correct) {
      setScore(s => s + 1)
      setShowReward(true)
    }
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      save('quiz', score + (selected === questions[current].answer ? 1 : 0), questions.length)
      setDone(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setShowExplanation(false)
    }
  }

  const handleRestart = () => {
    setCurrent(0); setSelected(null); setShowExplanation(false); setScore(0); setDone(false)
  }

  const handleRewardDone = useCallback(() => setShowReward(false), [])

  if (!questions?.length) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <NavBar title="Vraelys" />
        <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">Vrae word gelaai…</div>
      </div>
    )
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const stars = pct >= 80 ? 3 : pct >= 50 ? 2 : 1
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <NavBar title="Vraelys Resultate" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="text-6xl mb-4">{pct >= 80 ? '🏆' : pct >= 50 ? '😊' : '💪'}</div>
          <div className="text-4xl mb-2">{'⭐'.repeat(stars)}</div>
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-1">
            {score} / {questions.length} korrek
          </h2>
          <p className="text-gray-500 mb-2">{pct}% — {pct >= 80 ? 'Uitstekend!' : pct >= 50 ? 'Goeie poging!' : 'Hou aan oefen!'}</p>
          <div className="w-full max-w-xs mb-8">
            <ProgressBar current={score} total={questions.length} color="bg-green-500" />
          </div>
          <div className="flex gap-4">
            <button onClick={handleRestart} className="px-6 py-3 rounded-2xl bg-indigo-500 text-white font-bold shadow-md active:scale-95 transition-all">
              Probeer Weer
            </button>
            <button onClick={() => navigate(-1)} className="px-6 py-3 rounded-2xl bg-white border-2 border-indigo-200 text-indigo-600 font-bold active:scale-95 transition-all">
              Klaar
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[current]
  const OPTION_COLORS = [
    'bg-blue-100 border-blue-300 text-blue-800',
    'bg-green-100 border-green-300 text-green-800',
    'bg-orange-100 border-orange-300 text-orange-800',
    'bg-pink-100 border-pink-300 text-pink-800',
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title={`${subjectInfo?.emoji} Vraelys`} />
      {showReward && <RewardAnimation onDone={handleRewardDone} />}

      <main className="flex-1 px-4 py-4 max-w-lg mx-auto w-full flex flex-col gap-4">
        <ProgressBar current={current} total={questions.length} color={subjectInfo ? 'bg-indigo-500' : 'bg-indigo-500'} />

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-indigo-100">
          <p className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wide">Vraag {current + 1}</p>
          <p className="text-xl font-bold text-gray-800 leading-snug">{q.question}</p>
        </div>

        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => {
            let cls = `card-press w-full text-left rounded-2xl border-2 p-4 font-semibold text-base transition-all duration-200 ${OPTION_COLORS[i]}`
            if (selected !== null) {
              if (i === q.answer) cls += ' ring-4 ring-green-400 scale-100'
              else if (i === selected && i !== q.answer) cls += ' ring-4 ring-red-400 opacity-70'
              else cls += ' opacity-40'
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} className={cls} disabled={selected !== null}>
                <span className="font-extrabold mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
                {selected !== null && i === q.answer && <span className="ml-2">✅</span>}
                {selected !== null && i === selected && i !== q.answer && <span className="ml-2">❌</span>}
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className={`rounded-2xl p-4 border-2 text-sm leading-relaxed ${selected === q.answer ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
            <strong>{selected === q.answer ? '✅ Korrek! ' : '❌ Nie heeltemal nie. '}</strong>
            {q.explanation}
          </div>
        )}

        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl bg-indigo-500 text-white font-extrabold text-lg shadow-md active:scale-95 transition-all mt-2"
          >
            {current + 1 < questions.length ? 'Volgende Vraag →' : 'Sien Resultate 🏆'}
          </button>
        )}
      </main>
    </div>
  )
}
