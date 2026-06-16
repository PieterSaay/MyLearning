import { useEffect, useState } from 'react'

const EMOJIS = ['⭐', '🌟', '✨', '🎉', '🎊', '🏆', '💫', '🎈']
const MESSAGES = ['Amazing!', 'Well done!', 'Fantastic!', 'You rock!', 'Brilliant!', 'Super!', 'Awesome!', 'Great job!']

export default function RewardAnimation({ onDone }) {
  const [stars, setStars] = useState([])
  const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]

  useEffect(() => {
    const items = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.4,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }))
    setStars(items)
    const t = setTimeout(onDone, 1800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="animate-bounce-in text-center">
        <div className="text-7xl mb-2">{emoji}</div>
        <div className="text-3xl font-extrabold text-indigo-600 drop-shadow-lg">{message}</div>
      </div>
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute text-3xl animate-float-up"
          style={{ left: `${s.x}%`, bottom: '20%', animationDelay: `${s.delay}s` }}
        >
          {s.emoji}
        </div>
      ))}
    </div>
  )
}
