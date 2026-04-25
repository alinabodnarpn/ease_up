import InnerPageHeader from '../components/layout/InnerPageHeader';
import ApplicationCard from '../components/cards/ApplicationCard';

export default function ApplicationsPage() {
  return (
    <main className="main-content">
      <InnerPageHeader title="Звернення" />

      <section className="page-list">
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </section>
    </main>
  );
}