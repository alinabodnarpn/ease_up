import { useEffect, useState } from 'react';
import InnerPageHeader from '../components/layout/InnerPageHeader';
import PublicationCard from '../components/cards/PublicationCard';
import useFetch from '../hooks/useFetch';
import {
  getPublications,
  deletePublication,
} from '../services/publicationsApi';

export default function PublicationsPage() {
  const {
    data: fetchedPublications,
    loading,
    error,
  } = useFetch(getPublications, []);

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    if (fetchedPublications) {
      setPublications(fetchedPublications);
    }
  }, [fetchedPublications]);

  const handleDeletePublication = async (id) => {
    try {
      await deletePublication(id);

      setPublications((prev) =>
        prev.filter((publication) => publication.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert('Не вдалося видалити публікацію');
    }
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Публікації" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {publications.map((publication) => (
          <PublicationCard
            key={publication.id}
            {...publication}
            onDelete={handleDeletePublication}
          />
        ))}
      </section>
    </main>
  );
}