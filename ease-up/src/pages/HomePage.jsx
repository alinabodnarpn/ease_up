import HomeHeader from '../components/layout/HomeHeader';
import HeroCard from '../components/cards/HeroCard';
import SectionHeader from '../components/sections/SectionHeader';
import EventCard from '../components/cards/EventCard';
import PublicationCard from '../components/cards/PublicationCard';
import ApplicationCard from '../components/cards/ApplicationCard';
import AnnouncementCard from '../components/cards/AnnouncementCard';

const previewEvent = {
  id: 1,
  title: 'Антоніо Вівальді. Пори року',
  date: '29.11.24',
  price: '400 грн',
  location: 'Національна Філармонія',
  image: '/images/event.svg',
};

const previewPublication = {
  id: 1,
  author: 'Karina',
  date: '20.11.24',
  title: 'Музей науки у Львові',
  text: 'Відвідала Музей Науки у Львові. Щира рекомендація кожному бувати в цьому класному доступному місці!',
  avatar: '/images/avatar.svg',
  image: '/images/post-image.svg',
  likes: 45,
  comments: 3,
  shares: 1,
};

const previewApplication = {
  id: 1,
  text: 'Прошу встановити пандус на вході будинку і підйомник на вході на вул. Джерельна, 21/12',
  image: '/images/application-1.png',
  status: 'Триває збір підписів',
  current: 120,
  goal: 500,
  progress: 24,
};

const previewAnnouncement = {
  id: 1,
  author: 'Maks',
  date: '12.10.24',
  text: 'Продаю крісло колісне. нове. в упаковці. Ціна договірна.',
  avatar: '/images/avatar-maks.png',
  image: '/images/announcement-1.png',
  likes: 31,
  comments: 10,
  shares: 3,
};

export default function HomePage() {
  return (
    <main className="main-content">
      <HomeHeader />
      <HeroCard />

      <section className="home-preview-section">
        <SectionHeader title="Афіша доступних подій" to="/events" />
        <EventCard {...previewEvent} />
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Публікації" to="/publications" />
        <PublicationCard {...previewPublication} />
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Звернення" to="/applications" />
        <ApplicationCard {...previewApplication} />
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Оголошення" to="/announcements" />
        <AnnouncementCard {...previewAnnouncement} />
      </section>
    </main>
  );
}