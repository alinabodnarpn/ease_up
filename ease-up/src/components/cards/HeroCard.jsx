export default function HeroCard() {
  return (
    <section className="hero-section">
      <a href="/" className="hero-card">
        <div className="hero-card__image-wrapper">
          <img
            src="/images/hero_photo.svg"
            alt="Головний матеріал"
            className="hero-card__image"
          />
        </div>

        <div className="hero-card__content">
          <h1 className="hero-card__title">
            Львів доступний: як місто роблять безбар’єрним
          </h1>

          <div className="hero-card__meta">
            <span className="hero-card__tag">Доступність</span>
            <span className="hero-card__time">2 хв</span>
          </div>
        </div>
      </a>
    </section>
  );
}