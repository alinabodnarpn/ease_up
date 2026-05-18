import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import InnerPageHeader from '../components/layout/InnerPageHeader';
import { useAppDispatch } from '../hooks/useAppContext';

export default function ApplicationSignSuccessPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: 'sign_application',
      id: Number(id),
    });
  }, [dispatch, id]);

  return (
    <main className="main-content">
      <InnerPageHeader title="Підпис звернення" showFilter={false} />

      <section className="success-page">
        <h2 className="success-page__title">
          Звернення було успішно підписано.
        </h2>

        <p className="success-page__subtitle">
          Дякуємо за те, що робите місто доступнішим для всіх!
        </p>

        <p className="success-page__note">
          *Переглянути статус підписаних звернень можна в профілі користувача
        </p>

        <Link to="/applications" className="primary-wide-button success-page__button">
          До списку всіх звернень
        </Link>
      </section>
    </main>
  );
}