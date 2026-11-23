import { useState, useEffect, useCallback } from 'react';

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='220' viewBox='0 0 320 220'%3E%3Crect width='320' height='220' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='%2394a3b8' font-family='sans-serif'%3ERasm mavjud emas%3C/text%3E%3C/svg%3E";

export default function EquipmentModal({ item, onClose }) {
  const [imgSrc, setImgSrc] = useState(item.image);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Lock scroll
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = original;
    };
  }, [handleKeyDown]);

  // Reset image when item changes
  useEffect(() => {
    setImgSrc(item.image);
  }, [item.image]);

  const isSafety = item.category === 'Himoya vositalari';

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <div
        className={`modal-content${isSafety ? ' modal-safety' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`modal-header${isSafety ? ' modal-header-safety' : ''}`}>
          <div>
            <span className={`modal-category-badge${isSafety ? ' badge-safety' : ' badge-electrical'}`}>
              {item.category}
            </span>
            <h2 className="modal-title">{item.name}</h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Modalni yopish"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Image */}
          <div className="modal-image-wrap">
            <img
              src={imgSrc}
              alt={item.alt}
              className="modal-image"
              onError={() => setImgSrc(PLACEHOLDER)}
            />
          </div>

          {/* Description */}
          <section className="modal-section">
            <h3 className="modal-section-title">📋 Ta'rif</h3>
            <p>{item.description}</p>
          </section>

          {/* Purpose */}
          <section className="modal-section">
            <h3 className="modal-section-title">🎯 Vazifasi</h3>
            <p>{item.purpose}</p>
          </section>

          {/* Usage */}
          <section className="modal-section">
            <h3 className="modal-section-title">📍 Qo'llanish joyi</h3>
            <p>{item.usage}</p>
          </section>

          {/* Parameters */}
          {item.parameters && item.parameters.length > 0 && (
            <section className="modal-section">
              <h3 className="modal-section-title">⚙️ Asosiy parametrlar</h3>
              <table className="modal-params-table">
                <tbody>
                  {item.parameters.map((p, i) => (
                    <tr key={i}>
                      <td className="param-label">{p.label}</td>
                      <td className="param-value">{p.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {/* Safety Notes */}
          <section className="modal-section">
            <h3 className="modal-section-title">🛡️ O'rnatish va xavfsizlik</h3>
            <p>{item.safetyNotes}</p>
          </section>

          {/* Faults */}
          <section className="modal-section">
            <h3 className="modal-section-title">
              {isSafety ? '🔍 Tekshirish va eskirish belgilari' : '⚠️ Keng tarqalgan nosozliklar'}
            </h3>
            <p>{item.faults}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn-close-modal" onClick={onClose}>
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
}
