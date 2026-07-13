const KEY = 'wl_anthropic_api_key'

export function getApiKey() {
  return localStorage.getItem(KEY) || ''
}

export function setApiKey(key) {
  if (key) {
    localStorage.setItem(KEY, key.trim())
  } else {
    localStorage.removeItem(KEY)
  }
}
