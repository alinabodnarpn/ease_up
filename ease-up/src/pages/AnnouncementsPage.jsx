import InnerPageHeader from '../components/layout/InnerPageHeader';
import AnnouncementCard from '../components/cards/AnnouncementCard';
import useFetch from '../hooks/useFetch';
import { getAnnouncements } from '../services/announcementsApi';

export default function AnnouncementsPage() {
  const { data: announcements, loading, error } = useFetch(getAnnouncements, []);

  return (
    <main className="main-content">
      <InnerPageHeader title="Оголошення" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {announcements?.map((announcement) => (
          <AnnouncementCard key={announcement.id} {...announcement} />
        ))}
      </section>
    </main>
  );
}