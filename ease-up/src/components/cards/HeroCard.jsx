export default function HeroCard({
  title,
  tag,
  time,
  image,
}) {
  return (
    <section className="hero-section">
      <article className="hero-card">
        <div className="hero-card__image-wrapper">
          <img
            src={image}
            alt={title}
            className="hero-card__image"
          />
        </div>

        <div className="hero-card__content">
          <h1 className="hero-card__title">{title}</h1>

          <div className="hero-card__meta">
            <span className="hero-card__tag">{tag}</span>
            <span className="hero-card__time">{time}</span>
          </div>
        </div>
      </article>
    </section>
  );
}