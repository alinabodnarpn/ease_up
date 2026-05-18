export default function RouteCard({
  title,
  description,
  duration,
  image,
  rating,
  compact = false,
}) {
  return (
    <article className={`route-card ${compact ? 'route-card--compact' : ''}`}>
      <div className="route-card__image-wrapper">
        <img src={image} alt={title} className="route-card__image" />
      </div>

      <div className="route-card__content">
        <h3 className="route-card__title">{title}</h3>
        <p className="route-card__description">{description}</p>

        <div className="route-card__bottom">
          <span className="route-card__rating">⭐ {rating}</span>
          <span className="route-card__duration">{duration}</span>
        </div>
      </div>
    </article>
  );
}