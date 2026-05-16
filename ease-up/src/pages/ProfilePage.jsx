import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/sections/SectionHeader';
import PublicationCard from '../components/cards/PublicationCard';
import { useAppState } from '../hooks/useAppContext';

const myPublication = {
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

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useAppState();

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
            src={user.avatar}
            alt={user.name}
            className="profile-page__avatar"
          />

          <h2 className="profile-page__name">{user.name}</h2>

          <p className="profile-page__bio">{user.bio}</p>
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
          <PublicationCard {...myPublication} />
        </section>
      </section>
    </main>
  );
}