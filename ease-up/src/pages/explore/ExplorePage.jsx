import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import PlaceCard from '../../components/explore/PlaceCard';
import RouteCard from '../../components/explore/RouteCard';
import VolunteerCard from '../../components/explore/VolunteerCard';
import useFetch from '../../hooks/useFetch';
import {
  getPopularPlaces,
  getRoutes,
  getVolunteers,
} from '../../services/exploreApi';

const categories = [
  { id: 1, label: 'Супермаркети', icon: '/icons/category-supermarket.svg', slug: 'supermarket' },
  { id: 2, label: 'Одяг', icon: '/icons/category-clothes.svg', slug: 'clothes' },
  { id: 3, label: 'Аптеки', icon: '/icons/category-pharmacy.svg', slug: 'pharmacy' },
  { id: 4, label: 'Ресторани', icon: '/icons/category-restaurant.svg', slug: 'restaurant' },
  { id: 5, label: 'Кав\'ярні', icon: '/icons/category-cafe.svg', slug: 'cafe' },
  { id: 6, label: 'Парки', icon: '/icons/category-park.svg', slug: 'park' },
  { id: 7, label: 'Музеї', icon: '/icons/category-park.svg', slug: 'museum' },
];

export default function ExplorePage() {
  const [query, setQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [ratingFilter, setRatingFilter] = useState('all');

  const {
    data: popularPlaces,
    loading: placesLoading,
    error: placesError,
  } = useFetch(getPopularPlaces, []);

  const {
    data: routes,
    loading: routesLoading,
    error: routesError,
  } = useFetch(getRoutes, []);

  const {
    data: volunteers,
    loading: volunteersLoading,
    error: volunteersError,
  } = useFetch(getVolunteers, []);

  const filteredPlaces = useMemo(() => {
    if (!popularPlaces) return [];
    let result = popularPlaces;
    if (query.trim()) {
      result = result.filter((place) =>
        `${place.title} ${place.description} ${place.address}`
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    }
    if (ratingFilter !== 'all') {
      result = result.filter((place) => place.rating >= Number(ratingFilter));
    }
    return result;
  }, [popularPlaces, query, ratingFilter]);

  const filteredRoutes = useMemo(() => {
    if (!routes) return [];
    if (!query.trim()) return routes;

    return routes.filter((route) =>
      `${route.title} ${route.description}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [routes, query]);

  const filteredVolunteers = useMemo(() => {
    if (!volunteers) return [];
    if (!query.trim()) return volunteers;

    return volunteers.filter((volunteer) =>
      `${volunteer.name} ${volunteer.role}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [volunteers, query]);

  return (
    <main className="main-content">
      <section className="explore-hero">
        <div className="explore-hero__top">
          <div className="explore-hero__user">
            <img
              src="/images/avatar.svg"
              alt="Karina"
              className="explore-hero__avatar"
            />
            <span className="explore-hero__greeting">Привіт, Karina!</span>
          </div>

          <button type="button" className="explore-hero__icon-btn" aria-label="Сповіщення">
            <img src="/icons/bell.svg" alt="" />
          </button>
        </div>

        <div className="explore-search-row">
          <div className="explore-search">
            <img src="/icons/search.svg" alt="" className="explore-search__icon" />
            <input
              type="text"
              className="explore-search__input"
              placeholder="Пошук"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <button
            type="button"
            className="explore-filter-btn"
            aria-label="Фільтр"
            onClick={() => setFilterOpen(true)}
          >
            <img src="/icons/slider.png" alt="" />
          </button>
        </div>
      </section>

      <section className="explore-section">
        <div className="explore-section__header">
          <h2 className="explore-section__title">Категорії</h2>
          <Link to="/explore/list/all" className="explore-section__arrow">
            <img src="/icons/arrow-right.svg" alt="" />
          </Link>
        </div>

        <div className="explore-categories">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/explore/list/${category.slug}`}
              className="explore-category-chip"
            >
              <img
                src={category.icon}
                alt=""
                className="explore-category-chip__icon"
              />
              <span>{category.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="explore-section">
        <div className="explore-section__header">
          <h2 className="explore-section__title">Популярні доступні місця</h2>
          <Link to="/explore/list/popular" className="explore-section__arrow">
            <img src="/icons/arrow-right.svg" alt="" />
          </Link>
        </div>

        {placesLoading && <p>Loading...</p>}
        {placesError && <p>{placesError}</p>}

        <div className="explore-vertical-list">
          {filteredPlaces.slice(0, 2).map((place) => (
            <PlaceCard key={place.id} {...place} compact />
          ))}
        </div>
      </section>

      <section className="explore-section">
        <div className="explore-section__header">
          <h2 className="explore-section__title">Топ доступних маршрутів</h2>
          <Link to="/explore/routes" className="explore-section__arrow">
            <img src="/icons/arrow-right.svg" alt="" />
          </Link>
        </div>

        {routesLoading && <p>Loading...</p>}
        {routesError && <p>{routesError}</p>}

        <div className="explore-horizontal-list">
          {filteredRoutes.slice(0, 2).map((route) => (
            <RouteCard key={route.id} {...route} compact />
          ))}
        </div>
      </section>

      <section className="explore-section">
        <div className="explore-section__header">
          <h2 className="explore-section__title">Волонтери в м. Львів</h2>
          <Link to="/explore/volunteers" className="explore-section__arrow">
            <img src="/icons/arrow-right.svg" alt="" />
          </Link>
        </div>

        {volunteersLoading && <p>Loading...</p>}
        {volunteersError && <p>{volunteersError}</p>}

        <div className="explore-horizontal-list">
          {filteredVolunteers.slice(0, 2).map((volunteer) => (
            <VolunteerCard key={volunteer.id} {...volunteer} compact />
          ))}
        </div>
      </section>

      {filterOpen && (
        <div className="filter-sheet-overlay" onClick={() => setFilterOpen(false)}>
          <div className="filter-sheet" onClick={(e) => e.stopPropagation()}>
            <h3 className="filter-sheet__title">Фільтр місць</h3>
            <div className="filter-sheet__options">
              {[
                { label: 'Всі місця', value: 'all' },
                { label: 'Рейтинг від 4.0', value: '4' },
                { label: 'Рейтинг від 4.5', value: '4.5' },
                { label: 'Рейтинг 5.0', value: '5' },
              ].map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className={`filter-sheet__option ${ratingFilter === f.value ? 'filter-sheet__option--active' : ''}`}
                  onClick={() => { setRatingFilter(f.value); setFilterOpen(false); }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}