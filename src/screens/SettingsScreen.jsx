import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { getApiKey, setApiKey } from '../hooks/useApiKey'

export default function SettingsScreen() {
  const navigate = useNavigate()
  const [key, setKey] = useState(getApiKey)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setApiKey(key)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleClear = () => {
    setKey('')
    setApiKey('')
    setSaved(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <NavBar title="⚙️ Instellings" />

      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        <div className="bg-white rounded-3xl shadow-lg p-6 border border-indigo-100 mb-4">
          <h2 className="text-lg font-extrabold text-indigo-700 mb-1">🤖 AI Wenke</h2>
          <p className="text-sm text-gray-500 mb-4">
            Voer jou Anthropic API-sleutel in om slim leidrade te ontvang terwyl jy vasvrae beantwoord.
            Jou sleutel word slegs op hierdie toestel gestoor en nooit aangestuur nie.
          </p>

          <label className="block text-sm font-bold text-gray-700 mb-1">Anthropic API-sleutel</label>
          <input
            type="password"
            value={key}
            onChange={e => { setKey(e.target.value); setSaved(false) }}
            placeholder="sk-ant-..."
            className="w-full rounded-xl border-2 border-indigo-200 px-4 py-3 text-sm font-mono text-gray-800 focus:outline-none focus:border-indigo-400 mb-3"
          />

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 py-3 rounded-2xl bg-indigo-500 text-white font-bold active:scale-95 transition-all"
            >
              {saved ? '✅ Gestoor!' : 'Stoor Sleutel'}
            </button>
            {key && (
              <button
                onClick={handleClear}
                className="px-5 py-3 rounded-2xl bg-red-100 border-2 border-red-200 text-red-600 font-bold active:scale-95 transition-all"
              >
                Verwyder
              </button>
            )}
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl border-2 border-amber-200 p-4 text-sm text-amber-800">
          <strong>Hoe om 'n sleutel te kry:</strong> Gaan na{' '}
          <span className="font-mono">console.anthropic.com</span>, meld aan, en skep 'n API-sleutel
          onder "API Keys". Die toepassing gebruik hierdie sleutel direk van jou toestel af.
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 w-full py-3 rounded-2xl bg-white border-2 border-indigo-200 text-indigo-600 font-bold active:scale-95 transition-all"
        >
          Terug
        </button>
      </main>
    </div>
  )
}
