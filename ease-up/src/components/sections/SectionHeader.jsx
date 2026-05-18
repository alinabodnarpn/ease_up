import { Link } from 'react-router-dom';

export default function SectionHeader({ title, to }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>

      <Link to={to} className="section-header__link" aria-label={`Перейти до розділу ${title}`}>
        <img src="/icons/arrow-right.svg" alt="" className="section-header__icon" />
      </Link>
    </div>
  );
}