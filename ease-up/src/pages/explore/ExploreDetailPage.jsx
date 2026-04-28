import { useParams, useNavigate } from 'react-router-dom';

const MOCK_PLACE = {
  id: 1,
  name: 'Музей Івана Георгія Пінзеля',
  description: "Музей видатного українського скульптора доби бароко Івана Георгія Пінзеля розташований у колишньому костелі кларисок у Львові, що є пам'яткою архітектури XVII століття.",
  rating: 5.0,
  distance: '1 км від вас',
  saves: 45,
  image: '/images/place-pinzel-museum.svg',
  accessibility: [
    "Безбар'єрний шлях до будівлі",
    'Доступний вхід до будівлі',
    'Інклюзивна рецепція',
    "Безбар'єрність у приміщенні",
    'Інклюзивна експозиція',
  ],
};

export default function ExploreDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = MOCK_PLACE;

  return (
    <main className="main-content" style={{ padding: 0, paddingBottom: 120 }}>

      {/* Image with back/menu overlay */}
      <div style={{ position: 'relative' }}>
        <img
          src={place.image}
          alt={place.name}
          style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
        />
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute', top: 16, left: 16,
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <img src="/icons/arrow-left.svg" alt="Назад" style={{ width: 20, height: 20 }} />
        </button>
        <button
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, color: '#555',
          }}
        >
          ···
        </button>
      </div>

      <div style={{ padding: '20px 20px 0' }}>

        {/* Name */}
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#111', marginBottom: 8, lineHeight: 1.3 }}>
          {place.name}
        </h1>

        {/* Stars */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
          {[1,2,3,4,5].map(i => (
            <img
              key={i}
              src="/icons/star.svg"
              alt=""
              style={{ width: 18, height: 18, opacity: i <= Math.round(place.rating) ? 1 : 0.25 }}
            />
          ))}
        </div>

        {/* Distance / saves */}
        <div style={{ display: 'flex', gap: 16, fontSize: 14, color: '#8d8d8d', marginBottom: 16 }}>
          <span>📍 {place.distance}</span>
          <span>🔖 {place.saves}</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6, marginBottom: 20 }}>
          {place.description}
        </p>

        {/* Accessibility checklist */}
        <div style={{ marginBottom: 24 }}>
          {place.accessibility.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{ color: '#4CAF50', fontSize: 18, lineHeight: 1 }}>✓</span>
              <span style={{ fontSize: 15, color: '#111' }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Rate button */}
        <a
          href="#"
          className="map-btn"
          onClick={(e) => { e.preventDefault(); navigate(`/explore/place/${id}/rate`); }}
        >
          Оцінити місце
        </a>

      </div>
    </main>
  );
}
