import InnerPageHeader from '../components/layout/InnerPageHeader';
import PublicationCard from '../components/cards/PublicationCard';

export default function PublicationsPage() {
  return (
    <main className="main-content">
      <InnerPageHeader title="Публікації" />

      <section className="page-list">
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </section>
    </main>
  );
}