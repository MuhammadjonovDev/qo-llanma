import Card from './Card';

export default function CardGrid({ items, onCardClick }) {
  if (items.length === 0) {
    return (
      <div className="no-results">
        <span className="no-results-icon">🔍</span>
        <p>Hech narsa topilmadi. Qidiruv so'rovini o'zgartiring.</p>
      </div>
    );
  }

  return (
    <div className="card-grid">
      {items.map((item) => (
        <Card key={item.id} item={item} onClick={onCardClick} />
      ))}
    </div>
  );
}
