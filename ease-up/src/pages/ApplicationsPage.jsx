import InnerPageHeader from '../components/layout/InnerPageHeader';
import ApplicationCard from '../components/cards/ApplicationCard';
import useFetch from '../hooks/useFetch';
import { getApplications } from '../services/applicationsApi';

export default function ApplicationsPage() {
  const { data: applications, loading, error } = useFetch(getApplications, []);

  return (
    <main className="main-content">
      <InnerPageHeader title="Звернення" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {applications?.map((application) => (
          <ApplicationCard key={application.id} {...application} />
        ))}
      </section>
    </main>
  );
}