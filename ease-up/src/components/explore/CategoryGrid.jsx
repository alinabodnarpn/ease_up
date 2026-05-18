import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  { slug: 'supermarkets', label: 'Супермаркети', icon: '/icons/category-supermarket.svg' },
  { slug: 'clothing',     label: 'Одяг',         icon: '/icons/category-clothes.svg' },
  { slug: 'pharmacies',   label: 'Аптеки',       icon: '/icons/category-pharmacy.svg' },
  { slug: 'restaurants',  label: 'Ресторани',    icon: '/icons/category-restaurant.svg' },
  { slug: 'cafes',        label: "Кав'ярні",     icon: '/icons/category-cafe.svg' },
  { slug: 'parks',        label: 'Парки',        icon: '/icons/category-park.svg' },
];

export default function CategoryGrid() {
  const navigate = useNavigate();

  return (
    <div className="categories-grid">
      {CATEGORIES.map(cat => (
        <a
          key={cat.slug}
          href="#"
          className="category-chip"
          onClick={(e) => { e.preventDefault(); navigate(`/explore/category/${cat.slug}`); }}
        >
          <img src={cat.icon} alt="" aria-hidden="true" className="category-chip__icon" />
          <span>{cat.label}</span>
        </a>
      ))}
    </div>
  );
}
