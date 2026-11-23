import { useState, useMemo } from 'react';
import { equipment } from './data/equipment';
import CardGrid from './components/CardGrid';
import EquipmentModal from './components/EquipmentModal';
import './App.css';

const CATEGORIES = ['Barchasi', 'Elektr uskunalari', 'Himoya vositalari'];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Barchasi');

  const filteredItems = useMemo(() => {
    return equipment.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());
      const matchesCategory =
        activeCategory === 'Barchasi' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-logo">
            <span className="header-icon" aria-hidden="true">⚡</span>
            <div>
              <h1 className="header-title">Elektr Xavfsizligi Ma'lumotnomasi</h1>
              <p className="header-subtitle">
                Elektr uskunalari va himoya vositalari bo'yicha qo'llanma
              </p>
            </div>
          </div>
          <div className="header-stats">
            <span className="stat-item">
              <span className="stat-num">
                {equipment.filter((e) => e.category === 'Elektr uskunalari').length}
              </span>{' '}
              Uskuna
            </span>
            <span className="stat-divider">|</span>
            <span className="stat-item">
              <span className="stat-num">
                {equipment.filter((e) => e.category === 'Himoya vositalari').length}
              </span>{' '}
              Himoya vositasi
            </span>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Search and filter toolbar */}
        <div className="toolbar">
          <div className="search-wrap">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="search"
              className="search-input"
              placeholder="Uskuna nomi bo'yicha qidirish…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Qidiruv"
            />
            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch('')}
                aria-label="Qidiruvni tozalash"
              >
                ✕
              </button>
            )}
          </div>
          <div className="category-filters" role="group" aria-label="Kategoriya filtri">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeCategory === cat ? ' filter-btn-active' : ''}${cat === 'Himoya vositalari' ? ' filter-btn-safety' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat === 'Himoya vositalari' && '🛡️ '}
                {cat === 'Elektr uskunalari' && '⚡ '}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="result-count" aria-live="polite">
          {filteredItems.length} ta natija ko'rsatilmoqda
        </p>

        {/* Grid */}
        <CardGrid items={filteredItems} onCardClick={setSelectedItem} />
      </main>

      <footer className="site-footer">
        <p>
          Barcha ma'lumotlar faqat ma'lumotnoma maqsadida. Elektr ishlarini faqat
          malakali mutaxassis amalga oshirishi kerak.
        </p>
      </footer>

      {/* Modal */}
      {selectedItem && (
        <EquipmentModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
