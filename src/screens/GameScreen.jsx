import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { SUBJECTS } from '../data/seedData'
import NavBar from '../components/NavBar'
import RewardAnimation from '../components/RewardAnimation'

// Word Scramble game using subject-specific word banks
const WORD_BANKS = {
  maths:     ['triangle','fraction','multiply','addition','subtract','division','perimeter','geometry','decimal','equation'],
  english:   ['sentence','alphabet','syllable','adjective','paragraph','punctuation','synonym','antonym','narrative','metaphor'],
  science:   ['photosynthesis','evaporation','ecosystem','electricity','gravity','molecule','organism','atmosphere','magnetic','nutrition'],
  afrikaans: ['selfstandig','werkwoord','byvoeglik','bywoord','meervoud','enkelvoud','sinsbou','uitdrukking','voegwoord','telwoord'],
  lifeskills:['responsibility','community','constitution','democracy','environment','nutrition','diversity','integrity','empathy','leadership'],
}

function scramble(word) {
  const arr = word.split('')
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  const result = arr.join('')
  return result === word ? scramble(word) : result
}

export default function GameScreen() {
  const { grade, subject } = useParams()
  const navigate = useNavigate()
  const subjectInfo = SUBJECTS.find(s => s.id === subject)

  const words = WORD_BANKS[subject] || WORD_BANKS['maths']
  const [wordIdx, setWordIdx] = useState(0)
  const [scrambled, setScrambled] = useState('')
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [showReward, setShowReward] = useState(false)
  const [done, setDone] = useState(false)
  const [hint, setHint] = useState(false)

  useEffect(() => {
    if (wordIdx < words.length) {
      setScrambled(scramble(words[wordIdx]))
      setInput('')
      setFeedback(null)
      setHint(false)
    }
  }, [wordIdx, words])

  const handleCheck = () => {
    const correct = input.trim().toLowerCase() === words[wordIdx].toLowerCase()
    setAttempts(a => a + 1)
    if (correct) {
      setScore(s => s + 1)
      setFeedback('correct')
      setShowReward(true)
      setTimeout(() => {
        if (wordIdx + 1 >= words.length) setDone(true)
        else setWordIdx(i => i + 1)
      }, 1500)
    } else {
      setFeedback('wrong')
    }
  }

  const handleSkip = () => {
    if (wordIdx + 1 >= words.length) setDone(true)
    else setWordIdx(i => i + 1)
  }

  const handleRewardDone = useCallback(() => setShowReward(false), [])

  if (done) {
    const pct = Math.round((score / words.length) * 100)
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <NavBar title="Woordspel" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="text-6xl mb-3">{pct >= 70 ? '🏆' : '💪'}</div>
          <h2 className="text-2xl font-extrabold text-purple-700 mb-1">Spel Verby!</h2>
          <p className="text-gray-600 mb-2 text-lg">Jy het <strong>{score}/{words.length}</strong> woorde ontwar</p>
          <p className="text-gray-400 text-sm mb-6">{pct}% sukseskoers</p>
          <div className="flex gap-4">
            <button onClick={() => { setWordIdx(0); setScore(0); setAttempts(0); setDone(false) }} className="px-6 py-3 rounded-2xl bg-purple-500 text-white font-bold shadow active:scale-95">
              Speel Weer
            </button>
            <button onClick={() => navigate(-1)} className="px-6 py-3 rounded-2xl bg-white border-2 border-purple-200 text-purple-600 font-bold active:scale-95">
              Klaar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <NavBar title={`${subjectInfo?.emoji} Woordspel`} />
      {showReward && <RewardAnimation onDone={handleRewardDone} />}

      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full flex flex-col gap-5">
        {/* Score */}
        <div className="flex justify-between text-sm font-bold text-gray-500">
          <span>Woord {wordIdx + 1} van {words.length}</span>
          <span className="text-purple-600">Telling: {score} ⭐</span>
        </div>

        {/* Scrambled word */}
        <div className="bg-white rounded-3xl shadow-lg p-6 text-center border-2 border-purple-200">
          <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-semibold">Ontwar hierdie {subjectInfo?.label || subject} woord:</p>
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {scrambled.split('').map((ch, i) => (
              <span key={i} className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-100 text-purple-700 font-extrabold text-xl border-2 border-purple-300">
                {ch.toUpperCase()}
              </span>
            ))}
          </div>
          {hint && (
            <p className="text-sm text-indigo-500 mt-2">
              Wenk: <em>begin met "<strong>{words[wordIdx][0].toUpperCase()}</strong>" en het {words[wordIdx].length} letters</em>
            </p>
          )}
        </div>

        {/* Input */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={input}
            onChange={e => { setInput(e.target.value); setFeedback(null) }}
            onKeyDown={e => e.key === 'Enter' && handleCheck()}
            placeholder="Tik jou antwoord..."
            className="w-full px-4 py-4 rounded-2xl border-2 border-purple-200 text-lg font-semibold focus:outline-none focus:border-purple-400 bg-white text-gray-800"
            autoCapitalize="none"
            autoCorrect="off"
          />
          {feedback === 'wrong' && (
            <p className="text-red-500 font-semibold text-center text-sm">Nie heeltemal nie — probeer weer! 💪</p>
          )}
          {feedback === 'correct' && (
            <p className="text-green-600 font-bold text-center">🎉 Korrek! Goed gedaan!</p>
          )}
        </div>

        <button
          onClick={handleCheck}
          disabled={!input.trim()}
          className="w-full py-4 rounded-2xl bg-purple-500 text-white font-extrabold text-lg shadow-md active:scale-95 transition-all disabled:opacity-40"
        >
          Kontroleer Antwoord
        </button>

        <div className="flex gap-3">
          <button onClick={() => setHint(true)} className="flex-1 py-3 rounded-2xl bg-white border-2 border-purple-200 text-purple-500 font-bold text-sm active:scale-95 transition-all">
            💡 Wenk
          </button>
          <button onClick={handleSkip} className="flex-1 py-3 rounded-2xl bg-white border-2 border-gray-200 text-gray-400 font-bold text-sm active:scale-95 transition-all">
            Slaan oor →
          </button>
        </div>
      </main>
    </div>
  )
}
