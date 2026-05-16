export default function HomeHeader() {
  return (
    <header className="home-header">
      <div className="home-header__left">
        <a href="/" className="home-logo" aria-label="Головна">
          <img src="/icons/icon.svg" alt="" className="home-logo__icon" />
        </a>

        <div className="home-location">
          <img src="/icons/location.svg" alt="" className="home-location__icon" />
          <span className="home-location__text">Львів</span>
        </div>
      </div>

    </header>
  );
}