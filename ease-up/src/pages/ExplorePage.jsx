import { useNavigate } from 'react-router-dom';
import CategoryGrid from '../components/explore/CategoryGrid';
import PlaceCard from '../components/explore/PlaceCard';
import RouteCard from '../components/explore/RouteCard';

const MOCK_POPULAR = [
  { id: 1, name: 'Музей Івана Георгія Пінзеля', rating: '5.0', type: 'Вид: збережена інфра', address: 'Площа Митна, 2',           image: '/images/place-pinzel-museum.svg' },
  { id: 2, name: 'Pizza Celentano Futura',       rating: '4.8', type: 'Вид: збережена інфра', address: 'Вул. Культурна, 100 а',    image: '/images/place-celentano.svg' },
  { id: 3, name: 'Shoco.',                       rating: '4.6', type: 'Вид: збережена інфра', address: 'Вул. Сяйво, 11',           image: '/images/place-shoco.svg' },
  { id: 4, name: 'Park. Art of Rest',            rating: '4.6', type: 'Вид: збережена інфра', address: 'Вул. Дмитра Вітовського, 43А', image: '/images/place-park-art-of-rest.svg' },
];

const MOCK_ROUTES = [
  { id: 10, name: 'Маршрут 1', image: '/images/route-1.svg' },
  { id: 11, name: 'Маршрут 2', image: '/images/route-2.svg' },
  { id: 12, name: 'Маршрут 3', image: '/images/route-3.svg' },
];

export default function ExplorePage() {
  const navigate = useNavigate();

  return (
    <main className="main-content" style={{ padding: 0, paddingBottom: 120 }}>

      {/* Greeting */}
      <div className="explore-greeting">
        <div className="explore-greeting__left">
          <img src="/images/avatar.svg" alt="Аватар" className="explore-greeting__avatar" />
          <span className="explore-greeting__text">Привіт, Каріна!</span>
        </div>
        <button className="icon-btn" aria-label="Сповіщення">
          <img src="/icons/bell.svg" alt="" aria-hidden="true" className="header-icon" />
        </button>
      </div>

      {/* Search row */}
      <div className="explore-search-row">
        <div className="search-bar">
          <img src="/icons/search.svg" alt="" aria-hidden="true" className="search-bar__icon" />
          <input className="search-bar__input" type="search" placeholder="Пошук..." aria-label="Пошук по сайту" />
        </div>
        <button className="filter-btn" type="button" aria-label="Фільтр">
          <img src="/icons/filter.svg" alt="" aria-hidden="true" />
        </button>
      </div>

      {/* Categories */}
      <section className="explore-section">
        <div className="section-header">
          <h2>Категорії</h2>
          <a href="#" className="section-arrow-link" aria-label="Всі категорії">
            <img src="/icons/arrow-right.svg" alt="" aria-hidden="true" className="section-arrow-icon" />
          </a>
        </div>
        <CategoryGrid />
      </section>

      {/* Popular places */}
      <section className="explore-section">
        <div className="section-header">
          <h2>Популярні доступні місця</h2>
          <a
            href="#"
            className="section-arrow-link"
            aria-label="Всі популярні місця"
            onClick={(e) => { e.preventDefault(); navigate('/explore/list/popular'); }}
          >
            <img src="/icons/arrow-right.svg" alt="" aria-hidden="true" className="section-arrow-icon" />
          </a>
        </div>
        <div className="places-list">
          {MOCK_POPULAR.map(p => <PlaceCard key={p.id} place={p} />)}
        </div>
        <a
          href="/map"
          className="map-btn"
          onClick={(e) => { e.preventDefault(); navigate('/map'); }}
        >
          <img src="/icons/Map.svg" alt="" aria-hidden="true" className="map-btn__icon" />
          Показати на мапі
        </a>
      </section>

      {/* Routes */}
      <section className="explore-section">
        <div className="section-header">
          <h2>Топ доступних маршрутів</h2>
          <a
            href="#"
            className="section-arrow-link"
            aria-label="Всі маршрути"
            onClick={(e) => { e.preventDefault(); navigate('/explore/list/routes'); }}
          >
            <img src="/icons/arrow-right.svg" alt="" aria-hidden="true" className="section-arrow-icon" />
          </a>
        </div>
        <div className="routes-list">
          {MOCK_ROUTES.map(r => <RouteCard key={r.id} route={r} />)}
        </div>
      </section>

    </main>
  );
}
