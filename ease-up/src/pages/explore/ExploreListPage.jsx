import InnerPageHeader from '../../components/layout/InnerPageHeader';
import PlaceCard from '../../components/explore/PlaceCard';
import useFetch from '../../hooks/useFetch';
import { getPlaces } from '../../services/exploreApi';

export default function ExploreListPage() {
  const { data: places, loading, error } = useFetch(getPlaces, []);

  return (
    <main className="main-content">
      <InnerPageHeader title="Усі місця" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {places?.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </section>
    </main>
  );
}