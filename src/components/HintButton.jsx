import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApiKey } from '../hooks/useApiKey'

async function fetchHint(question, options, apiKey) {
  const optionsList = options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join('\n')
  const prompt = `Jy is 'n vriendelike onderwyser vir Suid-Afrikaanse laerskoolleerders.
Die leerder sukkel met hierdie vraag:

Vraag: ${question}
Opsies:
${optionsList}

Gee 'n kort Sokratiese leidraad (MOENIE die antwoord gee nie) in eenvoudige Afrikaans.
Een of twee sinne. Moedig die leerder aan om self te dink.`

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-8',
      max_tokens: 150,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `API fout: ${res.status}`)
  }

  const data = await res.json()
  return data.content?.[0]?.text ?? ''
}

export default function HintButton({ question, options }) {
  const navigate = useNavigate()
  const [state, setState] = useState('idle') // idle | loading | done | error | nokey | offline
  const [hint, setHint] = useState('')
  const [error, setError] = useState('')

  const handleHint = async () => {
    if (state === 'done') {
      setState('idle')
      setHint('')
      return
    }

    const apiKey = getApiKey()
    if (!apiKey) {
      setState('nokey')
      return
    }

    if (!navigator.onLine) {
      setState('offline')
      return
    }

    setState('loading')
    try {
      const text = await fetchHint(question, options, apiKey)
      setHint(text)
      setState('done')
    } catch (e) {
      setError(e.message)
      setState('error')
    }
  }

  return (
    <div className="mt-1">
      <button
        onClick={handleHint}
        disabled={state === 'loading'}
        className="flex items-center gap-2 text-sm text-indigo-500 font-semibold px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 active:scale-95 transition-all disabled:opacity-50"
      >
        {state === 'loading' ? (
          <span className="animate-pulse">⏳ Dink na…</span>
        ) : state === 'done' ? (
          '💡 Versteek leidraad'
        ) : (
          '💡 Hulp nodig?'
        )}
      </button>

      {state === 'done' && hint && (
        <div className="mt-2 rounded-2xl bg-indigo-50 border border-indigo-200 p-3 text-sm text-indigo-800 leading-relaxed">
          {hint}
        </div>
      )}

      {state === 'nokey' && (
        <div className="mt-2 rounded-2xl bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
          Geen API-sleutel gestel nie.{' '}
          <button
            onClick={() => navigate('/settings')}
            className="underline font-bold"
          >
            Stel dit op in Instellings
          </button>
          .
        </div>
      )}

      {state === 'offline' && (
        <div className="mt-2 rounded-2xl bg-gray-50 border border-gray-200 p-3 text-sm text-gray-600">
          Jy is tans vanlyn. Verbind met die internet om AI-wenke te gebruik.
        </div>
      )}

      {state === 'error' && (
        <div className="mt-2 rounded-2xl bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}
    </div>
  )
}
