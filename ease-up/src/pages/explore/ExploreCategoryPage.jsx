import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import InnerPageHeader from '../../components/layout/InnerPageHeader';
import PlaceCard from '../../components/explore/PlaceCard';
import useFetch from '../../hooks/useFetch';
import {
  getPlacesByCategory,
  getPopularPlaces,
} from '../../services/exploreApi';

const titles = {
  supermarket: 'Супермаркети',
  clothes: 'Одяг',
  pharmacy: 'Аптеки',
  restaurant: 'Ресторани',
  cafe: 'Кав’ярні',
  park: 'Парки',
  museum: 'Музеї',
  popular: 'Популярні доступні місця',
};

const ratingFilters = [
  { label: 'Всі місця', value: 'all' },
  { label: 'Рейтинг від 4.0', value: '4' },
  { label: 'Рейтинг від 4.5', value: '4.5' },
  { label: 'Рейтинг 5.0', value: '5' },
];

export default function ExploreCategoryPage() {
  const { slug } = useParams();

  const [query, setQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [ratingFilter, setRatingFilter] = useState('all');

  const fetcher =
    slug === 'popular'
      ? getPopularPlaces
      : () => getPlacesByCategory(slug);

  const { data: places, loading, error } = useFetch(fetcher, [slug]);

  const filteredPlaces = useMemo(() => {
    if (!places) return [];

    let result = places;

    if (query.trim()) {
      const normalizedQuery = query.toLowerCase();

      result = result.filter((place) =>
        `${place.title} ${place.description} ${place.address}`
          .toLowerCase()
          .includes(normalizedQuery)
      );
    }

    if (ratingFilter !== 'all') {
      result = result.filter(
        (place) => Number(place.rating) >= Number(ratingFilter)
      );
    }

    return result;
  }, [places, query, ratingFilter]);

  return (
    <main className="main-content">
      <InnerPageHeader
        title={titles[slug] || 'Категорія'}
        showFilter
        onFilterClick={() => setFilterOpen(true)}
      />

      <div className="explore-search-row explore-search-row--inner">
        <div className="explore-search">
          <img
            src="/icons/search.svg"
            alt=""
            className="explore-search__icon"
          />

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

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="explore-vertical-list">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.id} {...place} compact />
        ))}

        {!loading && filteredPlaces.length === 0 && (
          <p className="empty-text">Місць за цим фільтром не знайдено.</p>
        )}
      </section>

      <button type="button" className="explore-map-button">
        Показати на мапі
      </button>

      {filterOpen && (
        <div
          className="filter-sheet-overlay"
          onClick={() => setFilterOpen(false)}
        >
          <div
            className="filter-sheet"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="filter-sheet__title">Фільтр місць</h3>

            <div className="filter-sheet__options">
              {ratingFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={`filter-sheet__option ${
                    ratingFilter === filter.value
                      ? 'filter-sheet__option--active'
                      : ''
                  }`}
                  onClick={() => {
                    setRatingFilter(filter.value);
                    setFilterOpen(false);
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}