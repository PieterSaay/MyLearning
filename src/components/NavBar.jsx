import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft, Home } from 'lucide-react'

export default function NavBar({ title, showBack = true, showHome = true }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-40 flex items-center gap-2 px-4 py-3 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      {showBack && location.key !== 'default' && (
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100 active:scale-90 transition-transform"
          aria-label="Go back"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
      )}
      <div className="flex-1 text-center">
        <span className="text-lg font-extrabold text-indigo-700 tracking-tight">{title || '🌟 WonderLearn'}</span>
      </div>
      {showHome && location.pathname !== '/' && (
        <button
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-gray-100 active:scale-90 transition-transform"
          aria-label="Go home"
        >
          <Home size={22} className="text-gray-600" />
        </button>
      )}
    </nav>
  )
}
