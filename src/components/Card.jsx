import { useState } from 'react';

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='220' viewBox='0 0 320 220'%3E%3Crect width='320' height='220' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='%2394a3b8' font-family='sans-serif'%3ERasm mavjud emas%3C/text%3E%3C/svg%3E";

export default function Card({ item, onClick }) {
  const [imgSrc, setImgSrc] = useState(item.image);
  const isSafety = item.category === 'Himoya vositalari';

  return (
    <article
      className={`card${isSafety ? ' card-safety' : ''}`}
      onClick={() => onClick(item)}
      tabIndex={0}
      role="button"
      aria-label={`${item.name} haqida ko'proq bilish`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(item); }}
    >
      <div className="card-image-wrap">
        <img
          src={imgSrc}
          alt={item.alt}
          className="card-image"
          loading="lazy"
          onError={() => setImgSrc(PLACEHOLDER)}
        />
        {isSafety && (
          <span className="card-safety-badge" aria-label="Himoya vositasi">
            🛡️
          </span>
        )}
      </div>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
      </div>
    </article>
  );
}
