import { Link, useParams } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';
import useFetch from '../hooks/useFetch';
import { getApplicationById } from '../services/applicationsApi';

export default function ApplicationDetailsPage() {
  const { id } = useParams();
  const { data: application, loading, error } = useFetch(() => getApplicationById(id), [id]);

  if (loading) {
    return (
      <main className="main-content">
        <InnerPageHeader title="Деталі звернення" showFilter={false} />
        <p>Loading...</p>
      </main>
    );
  }

  if (error || !application) {
    return (
      <main className="main-content">
        <InnerPageHeader title="Деталі звернення" showFilter={false} />
        <p>{error || 'Application not found'}</p>
      </main>
    );
  }

  return (
    <main className="main-content">
      <InnerPageHeader title="Деталі звернення" showFilter={false} />

      <section className="application-details-page">
        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Категорія</h3>
          <span className="application-details-page__tag">{application.category}</span>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Автор/ка</h3>
          <p className="application-details-page__muted">{application.author}</p>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Опис звернення</h3>
          <div className="application-details-page__description">{application.text}</div>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Адреса</h3>
          <p className="application-details-page__muted">{application.address}</p>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Фото</h3>
          <div className="application-details-page__photos">
            <img src={application.image} alt="Фото звернення" className="application-details-page__photo" />
            <img src={application.image} alt="Фото звернення" className="application-details-page__photo" />
          </div>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">{application.status}</h3>
          <div className="application-details-page__count">
            {application.current} з {application.goal}
          </div>

          <div className="application-details-page__bar">
            <div
              className="application-details-page__bar-fill"
              style={{ width: `${application.progress}%` }}
            ></div>
          </div>
        </div>

        <Link to={`/applications/${id}/signed`} className="primary-wide-button">
          Підписати
        </Link>
      </section>
    </main>
  );
}