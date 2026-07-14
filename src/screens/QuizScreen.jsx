import { useParams, useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState, useEffect, useCallback, useRef } from 'react'
import { db } from '../db/db'
import { SUBJECTS } from '../data/seedData'
import { useProgress } from '../hooks/useProgress'
import { useSubjectMastery, recordAttempt } from '../hooks/useMastery'
import NavBar from '../components/NavBar'
import ProgressBar from '../components/ProgressBar'
import RewardAnimation from '../components/RewardAnimation'
import HintButton from '../components/HintButton'

const OPTION_STYLES = [
  { base: 'bg-blue-50   border-blue-300  text-blue-900',  letter: 'bg-blue-500   text-white' },
  { base: 'bg-green-50  border-green-300 text-green-900', letter: 'bg-green-500  text-white' },
  { base: 'bg-orange-50 border-orange-300 text-orange-900', letter: 'bg-orange-500 text-white' },
  { base: 'bg-pink-50   border-pink-300  text-pink-900',  letter: 'bg-pink-500   text-white' },
]

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
  const [shakeIdx, setShakeIdx] = useState(null)
  const [questions, setQuestions] = useState(null)

  const rawQuestions = useLiveQuery(
    () => db.questions.where({ grade: Number(grade), subject }).toArray(),
    [grade, subject], []
  )
  const masteryRecords = useSubjectMastery(grade, subject)
  const initialized = useRef(false)

  const sortQuestions = useCallback((qs, records) => {
    const map = {}
    for (const m of records) {
      map[m.itemId] = m.attempts > 0 ? m.correct / m.attempts : -1
    }
    return [...qs].sort((a, b) => (map[a.id] ?? -1) - (map[b.id] ?? -1))
  }, [])

  useEffect(() => {
    if (!rawQuestions?.length || initialized.current) return
    setQuestions(sortQuestions(rawQuestions, masteryRecords))
    initialized.current = true
  }, [rawQuestions, masteryRecords, sortQuestions])

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    setShowExplanation(true)
    const correct = idx === questions[current].answer
    if (correct) {
      setScore(s => s + 1)
      setShowReward(true)
    } else {
      setShakeIdx(idx)
      setTimeout(() => setShakeIdx(null), 600)
    }
    recordAttempt(questions[current].id, 'quiz', grade, subject, correct)
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
    setQuestions(sortQuestions(rawQuestions, masteryRecords))
    setCurrent(0)
    setSelected(null)
    setShowExplanation(false)
    setScore(0)
    setDone(false)
  }

  const handleRewardDone = useCallback(() => setShowReward(false), [])

  if (!questions) {
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
    const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '😊' : '💪'
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <NavBar title="Resultate" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
          <div className="text-7xl animate-bounce-in">{emoji}</div>
          <div className="text-4xl">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>
          <div className="bg-white rounded-3xl shadow-lg px-10 py-6 border-2 border-indigo-100">
            <p className="text-4xl font-extrabold text-indigo-700">{score}<span className="text-gray-300 text-2xl">/{questions.length}</span></p>
            <p className="text-gray-500 text-sm mt-1">korrek</p>
          </div>
          <p className="text-gray-500 font-semibold">
            {pct}% — {pct >= 80 ? '🌟 Uitstekend!' : pct >= 50 ? '👏 Goeie poging!' : '💪 Hou aan oefen!'}
          </p>
          <div className="w-full max-w-xs">
            <ProgressBar current={score} total={questions.length} color="bg-green-500" />
          </div>
          <div className="flex gap-4 mt-2">
            <button onClick={handleRestart} className="px-6 py-3 rounded-2xl bg-indigo-500 text-white font-bold shadow-md active:scale-95 transition-all">
              Probeer Weer 🔄
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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title={`${subjectInfo?.emoji} Vraelys`} />
      {showReward && <RewardAnimation onDone={handleRewardDone} />}

      <main className="flex-1 px-4 py-4 max-w-lg mx-auto w-full flex flex-col gap-4">
        <ProgressBar current={current} total={questions.length} color="bg-indigo-500" />

        {/* Question card */}
        <div className="bg-white rounded-3xl shadow-lg p-5 border border-indigo-100">
          <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-2">Vraag {current + 1} van {questions.length}</p>
          <p className="text-[18px] font-extrabold text-gray-800 leading-snug">{q.question}</p>
          {selected === null && <HintButton question={q.question} options={q.options} />}
        </div>

        {/* Option buttons */}
        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => {
            const s = OPTION_STYLES[i]
            const isSelected = selected === i
            const isCorrect = i === q.answer
            const isWrong = isSelected && !isCorrect

            let ring = ''
            let opacity = ''
            if (selected !== null) {
              if (isCorrect) ring = 'ring-4 ring-green-400'
              else if (isWrong) ring = 'ring-4 ring-red-400'
              else opacity = 'opacity-40'
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`card-press flex items-center gap-3 w-full text-left rounded-2xl border-2 p-4 font-semibold text-base transition-all duration-200 ${s.base} ${ring} ${opacity} ${shakeIdx === i ? 'animate-shake' : ''} ${selected !== null && isCorrect ? 'animate-pop-correct' : ''}`}
              >
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm flex-shrink-0 ${s.letter}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 leading-snug">{opt}</span>
                {selected !== null && isCorrect && <span className="text-lg">✅</span>}
                {selected !== null && isWrong && <span className="text-lg">❌</span>}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`rounded-2xl p-4 border-2 text-sm leading-relaxed animate-slide-up ${selected === q.answer ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
            <strong>{selected === q.answer ? '✅ Korrek! ' : '❌ Probeer weer! '}</strong>
            {q.explanation}
          </div>
        )}

        {/* Next button */}
        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl bg-indigo-500 text-white font-extrabold text-lg shadow-md active:scale-95 transition-all animate-slide-up"
          >
            {current + 1 < questions.length ? 'Volgende Vraag →' : 'Sien Resultate 🏆'}
          </button>
        )}
      </main>
    </div>
  )
}
