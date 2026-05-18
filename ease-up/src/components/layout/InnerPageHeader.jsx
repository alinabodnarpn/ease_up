import { useNavigate } from 'react-router-dom';

export default function InnerPageHeader({ title, showFilter = true, onFilterClick }) {
  const navigate = useNavigate();

  return (
    <header className="inner-page-header">
      <button
        type="button"
        className="inner-page-header__back"
        aria-label="Назад"
        onClick={() => navigate(-1)}
      >
        <img src="/icons/arrow-left.svg" alt="" />
      </button>

      <h1 className="inner-page-header__title">{title}</h1>

      {showFilter ? (
        <button
          type="button"
          className="inner-page-header__filter"
          aria-label="Фільтр"
          onClick={onFilterClick}
        >
          <img src="/icons/filter.svg" alt="" />
        </button>
      ) : (
        <div className="inner-page-header__spacer"></div>
      )}
    </header>
  );
}