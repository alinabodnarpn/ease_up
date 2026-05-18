import { Link } from 'react-router-dom';

export default function PlaceCard({
  id,
  title,
  description,
  address,
  image,
  rating,
  compact = false,
}) {
  return (
    <Link
      to={`/explore/places/${id}`}
      className={`place-card ${compact ? 'place-card--compact' : ''}`}
    >
      <div className="place-card__image-wrapper">
        <img src={image} alt={title} className="place-card__image" />
      </div>

      <div className="place-card__content">
        <h3 className="place-card__title">{title}</h3>

        <div className="place-card__meta">
          <span className="place-card__rating">☆ {rating}</span>
        </div>

        <p className="place-card__description">{description}</p>
        <p className="place-card__address">{address}</p>
      </div>
    </Link>
  );
}