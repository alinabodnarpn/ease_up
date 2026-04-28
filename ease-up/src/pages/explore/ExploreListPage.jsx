import { useParams, useNavigate } from 'react-router-dom';
import PlaceCard from '../../components/explore/PlaceCard';
import RouteCard from '../../components/explore/RouteCard';
import VolunteerCard from '../../components/explore/VolunteerCard';

const LIST_LABELS = {
  popular:    'Популярні доступні місця',
  routes:     'Топ доступних маршрутів',
  volunteers: 'Волонтери в м. Львів',
};

const MOCK_DATA = {
  popular: [
    { id: 1, name: 'Музей Івана Георгія Пінзеля', rating: '5.0', type: 'Вид: збережена інфра', address: 'Площа Митна, 2',               image: '/images/place-pinzel-museum.svg' },
    { id: 6, name: 'Jam Factory Art Center',       rating: '4.3', type: 'Вид: збережена інфра', address: 'Вул. Хмельницького, 124',       image: '/images/place-celentano.svg' },
    { id: 7, name: 'Фітнес клуб ЛІГА',            rating: '4.9', type: 'Вид: збережена інфра', address: 'Вул. Скляська, 1',              image: '/images/place-shoco.svg' },
    { id: 8, name: 'Сенсотека',                   rating: '4.7', type: 'Вид: збережена інфра', address: 'Вул. Власа Самчука, 22',        image: '/images/place-park-art-of-rest.svg' },
  ],
  routes: [
    { id: 10, name: 'Маршрут 1', image: '/images/route-1.svg' },
    { id: 11, name: 'Маршрут 2', image: '/images/route-2.svg' },
    { id: 12, name: 'Маршрут 3', image: '/images/route-3.svg' },
  ],
  volunteers: [
    { id: 1, name: 'Христина', role: 'Психолог',                                        rating: '4.9', hours: 2,   avatar: '/images/avatar.svg' },
    { id: 2, name: 'Ольга',    role: 'Психолог',                                        rating: '4.1', hours: 2,   avatar: '/images/avatar.svg' },
    { id: 3, name: 'Віталій',  role: 'Спеціаліст з продажу медичного обладнання',       rating: '4.8', hours: 1.5, avatar: '/images/avatar.svg' },
    { id: 4, name: 'Андрій',   role: 'Організатор маршрутів',                           rating: '4.6', hours: 1.5, avatar: '/images/avatar.svg' },
  ],
};

export default function ExploreListPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const title = LIST_LABELS[type] || type;
  const items = MOCK_DATA[type] || [];

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
        {type === 'routes' ? (
          <div className="routes-list">
            {items.map(r => <RouteCard key={r.id} route={r} />)}
          </div>
        ) : type === 'volunteers' ? (
          <div className="places-list">
            {items.map(v => <VolunteerCard key={v.id} volunteer={v} />)}
          </div>
        ) : (
          <>
            <div className="places-list">
              {items.map(p => <PlaceCard key={p.id} place={p} />)}
            </div>
            <a href="#" className="map-btn" onClick={(e) => e.preventDefault()}>
              <img src="/icons/Map.svg" alt="" aria-hidden="true" className="map-btn__icon" />
              Показати на мапі
            </a>
          </>
        )}
      </section>

    </main>
  );
}
