import { createBrowserRouter } from 'react-router-dom';
import MobileLayout from '../components/layout/MobileLayout';
import HomePage from '../pages/HomePage';
import EventsPage from '../pages/EventsPage';
import PublicationsPage from '../pages/PublicationsPage';
import ApplicationsPage from '../pages/ApplicationsPage';
import AnnouncementsPage from '../pages/AnnouncementsPage';
import ExplorePage from '../pages/ExplorePage';
import ProfilePage from '../pages/ProfilePage';
import CreateMenuPage from '../pages/CreateMenuPage';
import ApplicationDetailsPage from '../pages/ApplicationDetailsPage';
import ApplicationSignSuccessPage from '../pages/ApplicationSignSuccessPage';
import CreatePublicationPage from '../pages/CreatePublicationPage';
import CreateApplicationStep1Page from '../pages/CreateApplicationStep1Page';
import CreateAnnouncementPage from '../pages/CreateAnnouncementPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MobileLayout />,
    children: [
    { index: true, element: <HomePage /> },
    { path: 'events', element: <EventsPage /> },
    { path: 'publications', element: <PublicationsPage /> },
    { path: 'applications', element: <ApplicationsPage /> },
    { path: 'applications/:id', element: <ApplicationDetailsPage /> },
    { path: 'applications/:id/signed', element: <ApplicationSignSuccessPage /> },
    { path: 'announcements', element: <AnnouncementsPage /> },
    { path: 'explore', element: <ExplorePage /> },
    { path: 'profile', element: <ProfilePage /> },
    { path: 'create', element: <CreateMenuPage /> },
    { path: 'create/publication', element: <CreatePublicationPage /> },
    { path: 'create/application/step-1', element: <CreateApplicationStep1Page /> },
    { path: 'create/announcement', element: <CreateAnnouncementPage /> }
    ]
  },
]);

export default router;