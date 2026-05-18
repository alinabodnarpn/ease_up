import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/sections/SectionHeader';
import PublicationCard from '../components/cards/PublicationCard';
import useFetch from '../hooks/useFetch';
import { getPublications } from '../services/publicationsApi';
import { useAppState } from '../hooks/useAppContext';

export default function ProfilePage() {
  const navigate = useNavigate();

  const {
    user,
    likedPublicationIds,
    signedApplicationIds,
  } = useAppState();

  const {
    data: publications,
    loading,
    error,
  } = useFetch(getPublications, []);

  const myPublications = publications?.filter(
    (publication) => publication.author === user.name
  );

  return (
    <main className="main-content">
      <header className="profile-header">
        <button
          type="button"
          className="profile-header__icon-btn"
          onClick={() => navigate(-1)}
          aria-label="Назад"
        >
          <img
            src="/icons/arrow-left.svg"
            alt=""
            className="profile-header__icon"
          />
        </button>

        <h1 className="profile-header__title">Мій профіль</h1>

        <button
          type="button"
          className="profile-header__icon-btn"
          aria-label="Меню профілю"
        >
          <img
            src="/icons/menu.svg"
            alt=""
            className="profile-header__icon"
          />
        </button>
      </header>

      <section className="profile-page">
        <div className="profile-page__top">
          <img
            src={user.avatar}
            alt={user.name}
            className="profile-page__avatar"
          />

          <h2 className="profile-page__name">{user.name}</h2>

          <p className="profile-page__bio">{user.bio}</p>
        </div>

        <div className="profile-page__stats">
          <div className="profile-page__stat-card">
            <span className="profile-page__stat-number">
              {myPublications?.length || 0}
            </span>
            <span className="profile-page__stat-label">публікацій</span>
          </div>

          <div className="profile-page__stat-card">
            <span className="profile-page__stat-number">
              {likedPublicationIds.length}
            </span>
            <span className="profile-page__stat-label">лайків</span>
          </div>

          <div className="profile-page__stat-card">
            <span className="profile-page__stat-number">
              {signedApplicationIds.length}
            </span>
            <span className="profile-page__stat-label">підписів</span>
          </div>
        </div>

        <section className="profile-page__posts-section">
          <SectionHeader title="Мої публікації" to="/publications" />

          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}

          {myPublications?.length > 0 ? (
            myPublications.map((publication) => (
              <PublicationCard
                key={publication.id}
                {...publication}
              />
            ))
          ) : (
            !loading && <p className="empty-text">У вас ще немає публікацій.</p>
          )}
        </section>
      </section>
    </main>
  );
}