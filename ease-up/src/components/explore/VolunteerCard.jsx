export default function VolunteerCard({ volunteer }) {
  return (
    <article className="place-card" style={{ alignItems: 'center' }}>
      <div className="place-card__image">
        <img
          src={volunteer.avatar}
          alt={volunteer.name}
          className="place-card__img"
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div className="place-card__content">
        <h3 className="place-card__name">{volunteer.name}</h3>
        <p className="place-card__type">{volunteer.role}</p>
        <div className="place-card__rating">
          <img src="/icons/star.svg" alt="" aria-hidden="true" className="place-card__star" />
          <span className="place-card__rating-value">{volunteer.rating}</span>
          <span className="place-card__type" style={{ marginLeft: 8 }}>{volunteer.hours} год</span>
        </div>
      </div>
    </article>
  );
}
