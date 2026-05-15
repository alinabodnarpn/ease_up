import InnerPageHeader from '../../components/layout/InnerPageHeader';
import VolunteerCard from '../../components/explore/VolunteerCard';
import useFetch from '../../hooks/useFetch';
import { getVolunteers } from '../../services/exploreApi';

export default function VolunteersPage() {
  const { data: volunteers, loading, error } = useFetch(getVolunteers, []);

  return (
    <main className="main-content">
      <InnerPageHeader title="Волонтери" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {volunteers?.map((volunteer) => (
          <VolunteerCard key={volunteer.id} {...volunteer} />
        ))}
      </section>
    </main>
  );
}