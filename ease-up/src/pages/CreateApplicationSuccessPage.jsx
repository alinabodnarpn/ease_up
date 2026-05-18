import { Link } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreateApplicationSuccessPage() {
  return (
    <main className="main-content">
      <InnerPageHeader title="Створити звернення" showFilter={false} />

      <section className="success-page">
        <h2 className="success-page__title">
          Ваше звернення опубліковане і буде розглянуте місцевими органами влади найближчим часом.
        </h2>
        <p className="success-page__subtitle">
          Дякуємо за те, що робите місто доступнішим для всіх!
        </p>
        <small className="success-page__note">
          *Переглянути статус Ваших звернень можна в профілі користувача
        </small>
        <div className="success-page__button">
          <Link to="/applications" className="primary-wide-button">
            До списку всіх звернень
          </Link>
        </div>
      </section>
    </main>
  );
}