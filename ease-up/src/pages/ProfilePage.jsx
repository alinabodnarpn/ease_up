import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/sections/SectionHeader';
import PublicationCard from '../components/cards/PublicationCard';

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <header className="profile-header">
        <button
          type="button"
          className="profile-header__icon-btn"
          onClick={() => navigate(-1)}
          aria-label="Назад"
        >
          <img src="/icons/arrow-left.svg" alt="" className="profile-header__icon" />
        </button>

        <h1 className="profile-header__title">Мій профіль</h1>

        <button
          type="button"
          className="profile-header__icon-btn"
          aria-label="Меню профілю"
        >
          <img src="/icons/menu.svg" alt="" className="profile-header__icon" />
        </button>
      </header>

      <section className="profile-page">
        <div className="profile-page__top">
          <img
            src="/images/avatar.svg"
            alt="Karina"
            className="profile-page__avatar"
          />

          <h2 className="profile-page__name">Karina</h2>

          <p className="profile-page__bio">
            20 y.o. Art/sport/active lifestyle. Here to make new friends and plan new trips!
          </p>
        </div>

        <div className="profile-page__stats">
          <div className="profile-page__stat-card">
            <span className="profile-page__stat-number">20</span>
            <span className="profile-page__stat-label">публікацій</span>
          </div>

          <div className="profile-page__stat-card">
            <span className="profile-page__stat-number">20</span>
            <span className="profile-page__stat-label">друзів</span>
          </div>

          <div className="profile-page__stat-card">
            <span className="profile-page__stat-number">20</span>
            <span className="profile-page__stat-label">підписок</span>
          </div>
        </div>

        <section className="profile-page__posts-section">
          <SectionHeader title="Мої публікації" to="/publications" />
          <PublicationCard />
        </section>
      </section>
    </main>
  );
}