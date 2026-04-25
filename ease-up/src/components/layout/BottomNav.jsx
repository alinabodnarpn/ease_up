import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <footer className="bottom-nav">
      <NavLink to="/" className="bottom-nav__item" aria-label="Головна">
        <img src="/icons/home.svg" alt="" className="bottom-nav__icon" />
      </NavLink>

      <NavLink to="/explore" className="bottom-nav__item" aria-label="Пошук">
        <img src="/icons/search.svg" alt="" className="bottom-nav__icon" />
      </NavLink>

      <NavLink to="/create" className="bottom-nav__item create-btn" aria-label="Створити">
        <img src="/icons/plus.svg" alt="" className="bottom-nav__icon plus-icon" />
      </NavLink>

      <NavLink to="/explore" className="bottom-nav__item" aria-label="Карта">
        <img src="/icons/map.svg" alt="" className="bottom-nav__icon" />
      </NavLink>

      <NavLink to="/profile" className="bottom-nav__item" aria-label="Профіль">
        <img src="/icons/profile.svg" alt="" className="bottom-nav__icon" />
      </NavLink>
    </footer>
  );
}