import { useNavigate } from 'react-router-dom';

export default function PlaceCard({ place }) {
  const navigate = useNavigate();

  return (
    <article
      className="place-card"
      onClick={() => navigate(`/explore/place/${place.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="place-card__image">
        <img src={place.image} alt={place.name} className="place-card__img" />
      </div>
      <div className="place-card__content">
        <h3 className="place-card__name">{place.name}</h3>
        <div className="place-card__rating">
          <img src="/icons/star.svg" alt="" aria-hidden="true" className="place-card__star" />
          <span className="place-card__rating-value">{place.rating}</span>
        </div>
        {place.type && <p className="place-card__type">{place.type}</p>}
        {place.address && (
          <p className="place-card__address">
            <img src="/icons/location.svg" alt="" aria-hidden="true" className="place-card__addr-icon" />
            {place.address}
          </p>
        )}
      </div>
    </article>
  );
}
