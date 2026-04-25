import InnerPageHeader from '../components/layout/InnerPageHeader';
import EventCard from '../components/cards/EventCard';

export default function EventsPage() {
  return (
    <main className="main-content">
      <InnerPageHeader title="Афіша доступних подій" />

      <section className="page-list">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </section>
    </main>
  );
}