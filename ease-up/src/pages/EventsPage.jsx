import InnerPageHeader from '../components/layout/InnerPageHeader';
import EventCard from '../components/cards/EventCard';
import useFetch from '../hooks/useFetch';
import { getEvents } from '../services/eventsApi';

export default function EventsPage() {
  const { data: events, loading, error } = useFetch(getEvents, []);

  return (
    <main className="main-content">
      <InnerPageHeader title="Афіша доступних подій" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {events?.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </section>
    </main>
  );
}