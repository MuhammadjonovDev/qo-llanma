import { useState } from 'react'
import { useWikiImage } from '../hook/useWikiImage'

export default function Card({ item, onClick }) {
  const { status, src } = useWikiImage(item.wikiTitle)
  const [imgFailed, setImgFailed] = useState(false)

  const showImage = status === 'ok' && !imgFailed

  return (
    <button className="card" onClick={() => onClick(item)}>
      <div className="card-image">
        {status === 'loading' && <div className="skeleton" />}

        {showImage && (
          <img
            src={src}
            alt={item.alt || item.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}

        {(status === 'error' || imgFailed) && (
          <div className="placeholder">⚡</div>
        )}
      </div>
      <h3 className="card-title">{item.name}</h3>
    </button>
  )
}