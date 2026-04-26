import { Link } from 'react-router-dom';

export default function ApplicationCard({
  id,
  text,
  image,
  status,
  current,
  goal,
  progress,
}) {
  return (
    <Link to={`/applications/${id}`} className="application-card-link">
      <article className="application-card">
        <div className="application-card__top">
          <div className="application-card__text-block">
            <p className="application-card__text">{text}</p>
          </div>

          <div className="application-card__image-wrapper">
            <img
              src={image}
              alt="Фото звернення"
              className="application-card__image"
            />
          </div>
        </div>

        <div className="application-card__progress-box">
          <div className="application-card__progress-header">
            <span className="application-card__status">{status}</span>
            <span className="application-card__button">Підписати</span>
          </div>

          <div className="application-card__count">
            {current} з {goal}
          </div>

          <div className="application-card__bar">
            <div
              className="application-card__bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </article>
    </Link>
  );
}