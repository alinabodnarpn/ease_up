import { useParams, useNavigate } from 'react-router-dom';
import PlaceCard from '../../components/explore/PlaceCard';

const CATEGORY_LABELS = {
  supermarkets: 'Супермаркети',
  clothing:     'Одяг',
  pharmacies:   'Аптеки',
  restaurants:  'Ресторани',
  cafes:        "Кав'ярні",
  parks:        'Парки',
};

const MOCK_PLACES = [
  { id: 2, name: 'Селям',               rating: '4.1', type: 'Вид: збережена інфра', address: 'Вул. Дмитра Вітовського, 20', image: '/images/place-pinzel-museum.svg' },
  { id: 3, name: 'Pizza Celentano Futura', rating: '4.1', type: 'Вид: збережена інфра', address: 'Вул. Культурна, 5',      image: '/images/place-celentano.svg' },
  { id: 4, name: 'Shoco.',              rating: '4.6', type: 'Вид: збережена інфра', address: 'Вул. Сяйво, 44',             image: '/images/place-shoco.svg' },
  { id: 5, name: 'Park. Art of Rest',   rating: '4.9', type: 'Інклюзивна рецепція',  address: 'Вул. Дмитра Вітовського, 434', image: '/images/place-park-art-of-rest.svg' },
];

export default function ExploreCategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const title = CATEGORY_LABELS[slug] || slug;

  return (
    <main className="main-content" style={{ padding: 0, paddingBottom: 120 }}>

      {/* Page header */}
      <div className="page-header" style={{ padding: '20px 20px 0' }}>
        <button className="page-header__back" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src="/icons/arrow-left.svg" alt="Назад" className="page-header__icon" />
        </button>
        <h1 className="page-header__title">{title}</h1>
        <button className="page-header__action" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src="/icons/filter.svg" alt="Фільтр" className="page-header__icon" />
        </button>
      </div>

      {/* Search */}
      <div className="explore-search-row">
        <div className="search-bar">
          <img src="/icons/search.svg" alt="" aria-hidden="true" className="search-bar__icon" />
          <input className="search-bar__input" type="search" placeholder="Пошук..." aria-label="Пошук" />
        </div>
        <button className="filter-btn" type="button" aria-label="Фільтр">
          <img src="/icons/filter.svg" alt="" aria-hidden="true" />
        </button>
      </div>

      <section className="explore-section">
        <div className="places-list">
          {MOCK_PLACES.map(p => <PlaceCard key={p.id} place={p} />)}
        </div>
        <a href="#" className="map-btn" onClick={(e) => e.preventDefault()}>
          <img src="/icons/Map.svg" alt="" aria-hidden="true" className="map-btn__icon" />
          Показати на мапі
        </a>
      </section>

    </main>
  );
}
