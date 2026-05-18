import { Link } from 'react-router-dom';
import { useAppState } from '../../hooks/useAppContext';

export default function ApplicationCard({
  id,
  text,
  image,
  status,
  current = 0,
  goal = 500,
  progress = 0,
}) {
  const { signedApplicationIds } = useAppState();

  const isSigned = signedApplicationIds.includes(id);

  const displayedCurrent = isSigned ? current + 1 : current;

  const displayedProgress = Math.min(
    Math.round((displayedCurrent / goal) * 100),
    100
  );

  return (
    <article className="application-card">
      <Link to={`/applications/${id}`} className="application-card__main-link">
        <div className="application-card__top">
          <div className="application-card__text-block">
            <p className="application-card__text">{text}</p>
          </div>

          {image && (
            <div className="application-card__image-wrapper">
              <img
                src={image}
                alt="Фото звернення"
                className="application-card__image"
              />
            </div>
          )}
        </div>
      </Link>

      <div className="application-card__progress-box">
        <div className="application-card__progress-header">
          <span className="application-card__status">
            {status || 'Триває збір підписів'}
          </span>

          <Link
            to={isSigned ? `/applications/${id}` : `/applications/${id}/signed`}
            className={`application-card__button ${
              isSigned ? 'application-card__button--signed' : ''
            }`}
          >
            {isSigned ? 'Підписано' : 'Підписати'}
          </Link>
        </div>

        <div className="application-card__count">
          {displayedCurrent} з {goal}
        </div>

        <div className="application-card__bar">
          <div
            className="application-card__bar-fill"
            style={{ width: `${displayedProgress || progress}%` }}
          ></div>
        </div>
      </div>
    </article>
  );
}