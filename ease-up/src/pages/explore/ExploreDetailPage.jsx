import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import InnerPageHeader from '../../components/layout/InnerPageHeader';
import useFetch from '../../hooks/useFetch';
import { getPlaceById } from '../../services/exploreApi';

const defaultComments = [
  {
    id: 1,
    author: 'Maks',
    date: '12.10.24',
    avatar: '/images/avatar-maks.png',
    text: 'Чудове місце, рекомендую',
    likes: 31,
    comments: 10,
    shares: 3,
  },
  {
    id: 2,
    author: 'Karina',
    date: '12.10.24',
    avatar: '/images/avatar.svg',
    text: 'Вхід в споруду не вимагає всім умовам доступності, проте всередині все зручно',
    likes: 31,
    comments: 10,
    shares: 3,
  },
];

function normalizeAccessibility(place) {
  if (Array.isArray(place.accessibility) && place.accessibility.length > 0) {
    return place.accessibility.map((item, index) => ({
      id: item.id || index + 1,
      label: item.label,
      available: Boolean(item.available),
    }));
  }

  if (Array.isArray(place.features) && place.features.length > 0) {
    return place.features.map((feature, index) => ({
      id: index + 1,
      label: typeof feature === 'string' ? feature : feature.label,
      available: true,
    }));
  }

  return [
    {
      id: 1,
      label: 'Безбар’єрний шлях до будівлі',
      available: true,
    },
    {
      id: 2,
      label: 'Доступний вхід у будівлю',
      available: true,
    },
    {
      id: 3,
      label: 'Інклюзивна рецепція',
      available: true,
    },
    {
      id: 4,
      label: 'Безбар’єрність у приміщенні',
      available: true,
    },
    {
      id: 5,
      label: 'Інклюзивна експозиція',
      available: true,
    },
    {
      id: 6,
      label: 'Інклюзивна парковка',
      available: false,
    },
    {
      id: 7,
      label: 'Інклюзивна вбиральня',
      available: false,
    },
  ];
}

export default function ExploreDetailPage() {
  const { id } = useParams();

  const { data: place, loading, error } = useFetch(
    () => getPlaceById(id),
    [id]
  );

  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(defaultComments);

  const handleSendComment = () => {
    const trimmedText = commentText.trim();

    if (!trimmedText) return;

    const newComment = {
      id: Date.now(),
      author: 'Karina',
      date: '18.05.26',
      avatar: '/images/avatar.svg',
      text: trimmedText,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setComments((prev) => [...prev, newComment]);
    setCommentText('');
  };

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

  const accessibilityItems = normalizeAccessibility(place);

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

        <p className="explore-detail__description">
          {place.description}
        </p>

        <div className="explore-detail__meta">
          <span className="explore-detail__meta-item">
            ⭐ {place.rating}
          </span>

          <span className="explore-detail__meta-item">
            📍 {place.distance || '1 км від вас'}
          </span>

          <span className="explore-detail__meta-item">
            ♡ {place.likes || 45}
          </span>
        </div>

        <div className="explore-detail__features">
          {accessibilityItems.map((item) => (
            <div key={item.id} className="explore-detail__feature">
              <span
                className={`explore-detail__feature-icon ${
                  item.available
                    ? 'explore-detail__feature-icon--ok'
                    : 'explore-detail__feature-icon--bad'
                }`}
              >
                {item.available ? '✓' : '×'}
              </span>

              <span className="explore-detail__feature-text">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <Link
          to={`/explore/places/${id}/rate`}
          className="explore-detail__rate-button"
        >
          Оцінити місце
        </Link>

        <section className="explore-detail__comments-section">
          <h3 className="explore-detail__section-title">Коментарі</h3>

          {comments.map((comment) => (
            <article key={comment.id} className="place-comment-card">
              <div className="place-comment-card__header">
                <div className="place-comment-card__author">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="place-comment-card__avatar"
                  />

                  <div>
                    <h4 className="place-comment-card__name">
                      {comment.author}
                    </h4>

                    <span className="place-comment-card__date">
                      {comment.date}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="place-comment-card__more"
                  aria-label="Більше"
                >
                  ⋮
                </button>
              </div>

              <p className="place-comment-card__text">
                {comment.text}
              </p>

              <div className="place-comment-card__footer">
                <span>♡ {comment.likes}</span>
                <span>○ {comment.comments}</span>
                <span>↗ {comment.shares}</span>

                <button
                  type="button"
                  className="place-comment-card__reply"
                >
                  Відписати
                </button>
              </div>
            </article>
          ))}

          <div className="place-comment-form">
            <textarea
              className="place-comment-form__input"
              placeholder="Написати коментар"
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
            />

            <button
              type="button"
              className="place-comment-form__button"
              onClick={handleSendComment}
            >
              Відправити
            </button>
          </div>
        </section>

        <section className="explore-detail__info">
          <div className="explore-detail__info-block">
            <h3 className="explore-detail__info-title">Години роботи</h3>
            <p className="explore-detail__info-text">
              {place.workingHours || '10:00–18:00 (неділя — 12:00–17:00)'}
            </p>
          </div>

          <div className="explore-detail__info-block">
            <h3 className="explore-detail__info-title">Адреса</h3>
            <p className="explore-detail__info-text">
              {place.fullAddress || place.address}
            </p>
          </div>

          <div className="explore-detail__info-block">
            <h3 className="explore-detail__info-title">Телефон</h3>
            <p className="explore-detail__info-text">
              {place.phone || '+380 98 723 9143'}
            </p>
          </div>

          <div className="explore-detail__info-block">
            <h3 className="explore-detail__info-title">Електронна пошта</h3>
            <p className="explore-detail__info-text">
              {place.email || 'lv.artgallery.info@gmail.com'}
            </p>
          </div>

          <div className="explore-detail__info-block">
            <h3 className="explore-detail__info-title">Офіційний сайт</h3>
            <p className="explore-detail__info-text">
              {place.website || 'museum.lviv.ua'}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}