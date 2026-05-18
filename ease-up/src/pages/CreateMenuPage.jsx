import { Link } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreateMenuPage() {
  return (
    <main className="main-content">
      <InnerPageHeader title="Створити публікацію" showFilter={false} />

      <section className="create-type-page">
        <p className="create-type-page__subtitle">Оберіть тип публікації</p>

        <div className="create-type-page__buttons">
          <Link to="/create/publication" className="create-type-page__button">
            Нова публікація
          </Link>

          <Link to="/create/announcement" className="create-type-page__button">
            Нове оголошення
          </Link>

          <Link to="/explore" className="create-type-page__button">
            Створити маршрут
          </Link>

          <Link to="/create/application/step-1" className="create-type-page__button">
            Створити звернення
          </Link>
        </div>
      </section>
    </main>
  );
}