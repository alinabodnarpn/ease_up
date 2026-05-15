import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import InnerPageHeader from '../../components/layout/InnerPageHeader';
import PlaceCard from '../../components/explore/PlaceCard';
import useFetch from '../../hooks/useFetch';
import { getPlacesByCategory, getPopularPlaces } from '../../services/exploreApi';

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

export default function ExploreCategoryPage() {
  const { slug } = useParams();
  const [query, setQuery] = useState('');

  const fetcher =
    slug === 'popular'
      ? getPopularPlaces
      : () => getPlacesByCategory(slug);

  const { data: places, loading, error } = useFetch(fetcher, [slug]);

  const filteredPlaces = useMemo(() => {
    if (!places) return [];
    if (!query.trim()) return places;

    return places.filter((place) =>
      `${place.title} ${place.description} ${place.address}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [places, query]);

  return (
    <main className="main-content">
      <InnerPageHeader title={titles[slug] || 'Категорія'} />

      <div className="explore-search-row explore-search-row--inner">
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

        <button type="button" className="explore-filter-btn" aria-label="Фільтр">
          <img src="/icons/filter.svg" alt="" />
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="explore-vertical-list">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.id} {...place} compact />
        ))}
      </section>

      <button type="button" className="explore-map-button">
        Показати на мапі
      </button>
    </main>
  );
}