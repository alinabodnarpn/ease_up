import InnerPageHeader from '../components/layout/InnerPageHeader';
import PublicationCard from '../components/cards/PublicationCard';
import useFetch from '../hooks/useFetch';
import { getPublications } from '../services/publicationsApi';

export default function PublicationsPage() {
  const { data: publications, loading, error } = useFetch(getPublications, []);

  return (
    <main className="main-content">
      <InnerPageHeader title="Публікації" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {publications?.map((publication) => (
          <PublicationCard key={publication.id} {...publication} />
        ))}
      </section>
    </main>
  );
}