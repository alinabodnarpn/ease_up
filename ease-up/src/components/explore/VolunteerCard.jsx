export default function VolunteerCard({
  name,
  role,
  rating,
  avatar,
  compact = false,
}) {
  return (
    <article className={`volunteer-card ${compact ? 'volunteer-card--compact' : ''}`}>
      <div className="volunteer-card__image-wrapper">
        <img src={avatar} alt={name} className="volunteer-card__avatar" />
      </div>

      <div className="volunteer-card__content">
        <h3 className="volunteer-card__name">{name}</h3>
        <p className="volunteer-card__role">{role}</p>

        <div className="volunteer-card__bottom">
          <span className="volunteer-card__rating">⭐ {rating}</span>
          <button type="button" className="volunteer-card__contact-btn" aria-label="Написати">
            ✉
          </button>
        </div>
      </div>
    </article>
  );
}