export default function MasteryBar({ correct = 0, attempts = 0, className = '' }) {
  if (attempts === 0) {
    return <span className={`text-xs text-gray-400 ${className}`}>Begin!</span>
  }
  const pct = Math.round((correct / attempts) * 100)
  const color = pct >= 70 ? 'bg-green-400' : pct >= 40 ? 'bg-yellow-400' : 'bg-red-400'
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-bold text-gray-500">{pct}%</span>
    </div>
  )
}
