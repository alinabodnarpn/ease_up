import useFetch from '../../hooks/useFetch';
import { getRoutes } from '../../services/exploreApi';
import RouteCard from '../../components/explore/RouteCard';
import InnerPageHeader from '../../components/layout/InnerPageHeader';

export default function ExploreRoutesPage() {
  const { data: routes, loading, error } = useFetch(getRoutes, []);

  return (
    <main className="main-content">
      <InnerPageHeader title="Топ доступних маршрутів" showFilter={false} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="explore-routes-grid">
        {routes?.map((route) => (
          <RouteCard key={route.id} {...route} />
        ))}
      </div>
    </main>
  );
}