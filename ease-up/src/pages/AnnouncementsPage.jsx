import InnerPageHeader from '../components/layout/InnerPageHeader';
import AnnouncementCard from '../components/cards/AnnouncementCard';

export default function AnnouncementsPage() {
  return (
    <main className="main-content">
      <InnerPageHeader title="Оголошення" />

      <section className="page-list">
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </section>
    </main>
  );
}