import HomeHeader from '../components/layout/HomeHeader';
import HeroCard from '../components/cards/HeroCard';
import SectionHeader from '../components/sections/SectionHeader';
import EventCard from '../components/cards/EventCard';
import PublicationCard from '../components/cards/PublicationCard';
import ApplicationCard from '../components/cards/ApplicationCard';
import AnnouncementCard from '../components/cards/AnnouncementCard';

import useFetch from '../hooks/useFetch';

import { getHeroPosts } from '../services/heroApi';
import { getEvents } from '../services/eventsApi';
import { getPublications } from '../services/publicationsApi';
import { getApplications } from '../services/applicationsApi';
import { getAnnouncements } from '../services/announcementsApi';

export default function HomePage() {
  const {
    data: heroPosts,
    loading: heroLoading,
    error: heroError,
  } = useFetch(getHeroPosts, []);

  const {
    data: events,
    loading: eventsLoading,
    error: eventsError,
  } = useFetch(getEvents, []);

  const {
    data: publications,
    loading: publicationsLoading,
    error: publicationsError,
  } = useFetch(getPublications, []);

  const {
    data: applications,
    loading: applicationsLoading,
    error: applicationsError,
  } = useFetch(getApplications, []);

  const {
    data: announcements,
    loading: announcementsLoading,
    error: announcementsError,
  } = useFetch(getAnnouncements, []);

  const heroPost = heroPosts?.[0];
  const previewEvent = events?.[0];
  const previewPublication = publications?.[0];
  const previewApplication = applications?.[0];
  const previewAnnouncement = announcements?.[0];

  return (
    <main className="main-content">
      <HomeHeader />

      {heroLoading && <p>Loading...</p>}
      {heroError && <p>{heroError}</p>}
      {heroPost && <HeroCard {...heroPost} />}

      <section className="home-preview-section">
        <SectionHeader title="Афіша доступних подій" to="/events" />

        {eventsLoading && <p>Loading...</p>}
        {eventsError && <p>{eventsError}</p>}
        {previewEvent && <EventCard {...previewEvent} />}
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Публікації" to="/publications" />

        {publicationsLoading && <p>Loading...</p>}
        {publicationsError && <p>{publicationsError}</p>}
        {previewPublication && <PublicationCard {...previewPublication} />}
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Звернення" to="/applications" />

        {applicationsLoading && <p>Loading...</p>}
        {applicationsError && <p>{applicationsError}</p>}
        {previewApplication && <ApplicationCard {...previewApplication} />}
      </section>

      <section className="home-preview-section">
        <SectionHeader title="Оголошення" to="/announcements" />

        {announcementsLoading && <p>Loading...</p>}
        {announcementsError && <p>{announcementsError}</p>}
        {previewAnnouncement && <AnnouncementCard {...previewAnnouncement} />}
      </section>
    </main>
  );
}