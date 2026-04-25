import HomeHeader from '../components/layout/HomeHeader';
import HeroCard from '../components/cards/HeroCard';
import SectionHeader from '../components/sections/SectionHeader';
import EventCard from '../components/cards/EventCard';
import PublicationCard from '../components/cards/PublicationCard';
import ApplicationCard from '../components/cards/ApplicationCard';
import AnnouncementCard from '../components/cards/AnnouncementCard';

export default function HomePage() {
  return (
    <main className="main-content">
      <HomeHeader />
      <HeroCard />

      <section className="home-preview-section">
        <SectionHeader title="Афіша доступних подій" to="/events" />
        <EventCard />
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Публікації" to="/publications" />
        <PublicationCard />
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Звернення" to="/applications" />
        <ApplicationCard />
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Оголошення" to="/announcements" />
        <AnnouncementCard />
      </section>
    </main>
  );
}