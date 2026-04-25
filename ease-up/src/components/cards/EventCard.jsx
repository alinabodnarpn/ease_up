export default function EventCard() {
  return (
    <article className="event-card">
      <div className="event-card__image-wrapper">
        <img
          src="/images/event.svg"
          alt="Афіша події"
          className="event-card__image"
        />
      </div>

      <div className="event-card__content">
        <h3 className="event-card__title">Антоніо Вівальді. Пори року</h3>

        <div className="event-card__meta">
          <div className="event-card__meta-item">
            <img src="/icons/calendar.svg" alt="" className="event-card__meta-icon" />
            <span className="event-card__meta-text">29.11.24</span>
          </div>

          <div className="event-card__meta-item">
            <img src="/icons/price.svg" alt="" className="event-card__meta-icon" />
            <span className="event-card__meta-text">400 грн</span>
          </div>

          <div className="event-card__meta-item">
            <img src="/icons/location.svg" alt="" className="event-card__meta-icon" />
            <span className="event-card__meta-text">Національна Філармонія</span>
          </div>
        </div>
      </div>
    </article>
  );
}