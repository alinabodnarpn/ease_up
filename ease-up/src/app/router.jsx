import { createBrowserRouter } from 'react-router-dom';
import MobileLayout from '../components/layout/MobileLayout';
import HomePage from '../pages/HomePage';
import EventsPage from '../pages/EventsPage';
import PublicationsPage from '../pages/PublicationsPage';
import ApplicationsPage from '../pages/ApplicationsPage';
import AnnouncementsPage from '../pages/AnnouncementsPage';
import ProfilePage from '../pages/ProfilePage';
import CreateMenuPage from '../pages/CreateMenuPage';
import ApplicationDetailsPage from '../pages/ApplicationDetailsPage';
import ApplicationSignSuccessPage from '../pages/ApplicationSignSuccessPage';
import CreatePublicationPage from '../pages/CreatePublicationPage';
import CreateApplicationStep1Page from '../pages/CreateApplicationStep1Page';
import CreateApplicationStep2Page from '../pages/CreateApplicationStep2Page';
import CreateApplicationStep3Page from '../pages/CreateApplicationStep3Page';
import CreateApplicationSuccessPage from '../pages/CreateApplicationSuccessPage';
import CreateAnnouncementPage from '../pages/CreateAnnouncementPage';

import ExplorePage from '../pages/explore/ExplorePage';
import ExploreCategoryPage from '../pages/explore/ExploreCategoryPage';
import ExploreListPage from '../pages/explore/ExploreListPage';
import ExploreDetailPage from '../pages/explore/ExploreDetailPage';
import ExploreRatePage from '../pages/explore/ExploreRatePage';
import VolunteersPage from '../pages/explore/VolunteersPage';
import ExploreRoutesPage from '../pages/explore/ExploreRoutesPage';


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

      { path: 'profile', element: <ProfilePage /> },
      { path: 'create', element: <CreateMenuPage /> },
      { path: 'create/publication', element: <CreatePublicationPage /> },
      { path: 'create/application/step-1', element: <CreateApplicationStep1Page /> },
      { path: 'create/application/step-2', element: <CreateApplicationStep2Page /> },
      { path: 'create/application/step-3', element: <CreateApplicationStep3Page /> },
      { path: 'create/application/success', element: <CreateApplicationSuccessPage /> },
      { path: 'create/announcement', element: <CreateAnnouncementPage /> },

      { path: 'explore', element: <ExplorePage /> },
      { path: 'explore/list/all', element: <ExploreListPage /> },
      { path: 'explore/list/:slug', element: <ExploreCategoryPage /> },
      { path: 'explore/volunteers', element: <VolunteersPage /> },
      { path: 'explore/routes', element: <ExploreRoutesPage /> },
      { path: 'explore/places/:id', element: <ExploreDetailPage /> },
      { path: 'explore/places/:id/rate', element: <ExploreRatePage /> }
    ],
  },
]);

export default router;