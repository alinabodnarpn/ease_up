export default function EventCard({
  title,
  date,
  price,
  location,
  image,
}) {
  return (
    <article className="event-card">
      <div className="event-card__image-wrapper">
        <img
          src={image}
          alt={title}
          className="event-card__image"
        />
      </div>

      <div className="event-card__content">
        <h3 className="event-card__title">{title}</h3>

        <div className="event-card__meta">
          <div className="event-card__meta-item">
            <img src="/icons/calendar.svg" alt="" className="event-card__meta-icon" />
            <span className="event-card__meta-text">{date}</span>
          </div>

          <div className="event-card__meta-item">
            <img src="/icons/price.svg" alt="" className="event-card__meta-icon" />
            <span className="event-card__meta-text">{price}</span>
          </div>

          <div className="event-card__meta-item">
            <img src="/icons/location.svg" alt="" className="event-card__meta-icon" />
            <span className="event-card__meta-text">{location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}