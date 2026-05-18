import { useEffect, useState } from 'react';
import InnerPageHeader from '../components/layout/InnerPageHeader';
import AnnouncementCard from '../components/cards/AnnouncementCard';
import useFetch from '../hooks/useFetch';
import {
  getAnnouncements,
  deleteAnnouncement,
} from '../services/announcementsApi';

export default function AnnouncementsPage() {
  const {
    data: fetchedAnnouncements,
    loading,
    error,
  } = useFetch(getAnnouncements, []);

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if (fetchedAnnouncements) {
      setAnnouncements(fetchedAnnouncements);
    }
  }, [fetchedAnnouncements]);

  const handleDeleteAnnouncement = async (id) => {
    try {
      await deleteAnnouncement(id);

      setAnnouncements((prev) =>
        prev.filter((announcement) => announcement.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert('Не вдалося видалити оголошення');
    }
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Оголошення" />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <section className="page-list">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            {...announcement}
            onDelete={handleDeleteAnnouncement}
          />
        ))}
      </section>
    </main>
  );
}