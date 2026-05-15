import { Link, useParams } from 'react-router-dom';
import InnerPageHeader from '../../components/layout/InnerPageHeader';
import useFetch from '../../hooks/useFetch';
import { getPlaceById } from '../../services/exploreApi';

export default function ExploreDetailPage() {
  const { id } = useParams();

  const { data: place, loading, error } = useFetch(
    () => getPlaceById(id),
    [id]
  );

  if (loading) {
    return (
      <main className="main-content">
        <InnerPageHeader title="Обране місце" showFilter={false} />
        <p>Loading...</p>
      </main>
    );
  }

  if (error || !place) {
    return (
      <main className="main-content">
        <InnerPageHeader title="Обране місце" showFilter={false} />
        <p>{error || 'Place not found'}</p>
      </main>
    );
  }

  const features = place.features || [
    { id: 1, label: 'Безбар’єрний шлях до будівлі', ok: true },
    { id: 2, label: 'Доступний вхід у будівлю', ok: true },
    { id: 3, label: 'Інклюзивна рецепція', ok: true },
    { id: 4, label: 'Безбар’єрність у приміщенні', ok: true },
    { id: 5, label: 'Інклюзивна експозиція', ok: true },
    { id: 6, label: 'Інклюзивне паркування', ok: false },
  ];

  return (
    <main className="main-content">
      <InnerPageHeader title="Обране місце" showFilter={false} />

      <section className="explore-detail">
        <img
          src={place.image}
          alt={place.title}
          className="explore-detail__image"
        />

        <h2 className="explore-detail__title">{place.title}</h2>
        <p className="explore-detail__description">{place.description}</p>

        <div className="explore-detail__meta">
          <span className="explore-detail__meta-item">⭐ {place.rating}</span>
          <span className="explore-detail__meta-item">📍 1 км від вас</span>
          <span className="explore-detail__meta-item">♡ 45</span>
        </div>

        <div className="explore-detail__features">
          {features.map((feature) => (
            <div key={feature.id} className="explore-detail__feature">
              <span
                className={`explore-detail__feature-icon ${
                  feature.ok
                    ? 'explore-detail__feature-icon--ok'
                    : 'explore-detail__feature-icon--bad'
                }`}
              >
                {feature.ok ? '✓' : '✕'}
              </span>
              <span className="explore-detail__feature-text">{feature.label}</span>
            </div>
          ))}
        </div>

        <Link to={`/explore/places/${id}/rate`} className="primary-wide-button">
          Оцінити місце
        </Link>
      </section>
    </main>
  );
}