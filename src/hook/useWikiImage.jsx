import { useEffect, useState } from 'react'

const cache = new Map()

export function useWikiImage(title) {
  const [state, setState] = useState(() => cache.get(title) ?? { status: 'loading', src: null })

  useEffect(() => {
    if (!title) {
      console.warn('wikiTitle yo\'q')
      setState({ status: 'error', src: null })
      return
    }
    if (cache.has(title)) {
      setState(cache.get(title))
      return
    }

    let cancelled = false
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} (${title})`)
        return res.json()
      })
      .then((data) => {
        const src = data.thumbnail?.source || data.originalimage?.source || null
        console.log(title, '->', src)
        const result = src ? { status: 'ok', src } : { status: 'error', src: null }
        cache.set(title, result)
        if (!cancelled) setState(result)
      })
      .catch((err) => {
        console.error('Wiki xatosi:', err.message)
        const result = { status: 'error', src: null }
        cache.set(title, result)
        if (!cancelled) setState(result)
      })

    return () => {
      cancelled = true
    }
  }, [title])

  return state
}