import { Link } from 'react-router-dom';

export default function InnerPageHeader({ title, showFilter = true }) {
  return (
    <header className="inner-page-header">
      <Link to="/" className="inner-page-header__back" aria-label="Назад">
        <img src="/icons/arrow-left.svg" alt="" className="inner-page-header__icon" />
      </Link>

      <h1 className="inner-page-header__title">{title}</h1>

      {showFilter ? (
        <button className="inner-page-header__action" type="button" aria-label="Фільтр">
          <img src="/icons/filter.svg" alt="" className="inner-page-header__icon" />
        </button>
      ) : (
        <div className="inner-page-header__action-placeholder"></div>
      )}
    </header>
  );
}