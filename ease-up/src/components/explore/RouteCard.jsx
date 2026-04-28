import { useNavigate } from 'react-router-dom';

export default function RouteCard({ route }) {
  const navigate = useNavigate();

  return (
    <article
      className="route-card"
      onClick={() => navigate(`/explore/place/${route.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={route.image} alt={route.name} className="route-card__img" />
    </article>
  );
}
