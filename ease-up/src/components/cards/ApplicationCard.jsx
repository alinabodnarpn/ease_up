import { Link } from 'react-router-dom';

export default function ApplicationCard({ id = 1 }) {
  return (
    <Link to={`/applications/${id}`} className="application-card-link">
      <article className="application-card">
        <div className="application-card__top">
          <div className="application-card__text-block">
            <p className="application-card__text">
              Прошу встановити пандус на вході будинку і підйомник на вході на вул. Джерельна, 21/12
            </p>
          </div>

          <div className="application-card__image-wrapper">
            <img
              src="/images/application-1.png"
              alt="Фото звернення"
              className="application-card__image"
            />
          </div>
        </div>

        <div className="application-card__progress-box">
          <div className="application-card__progress-header">
            <span className="application-card__status">Триває збір підписів</span>

            <span className="application-card__button">
              Підписати
            </span>
          </div>

          <div className="application-card__count">120 з 500</div>

          <div className="application-card__bar">
            <div className="application-card__bar-fill"></div>
          </div>
        </div>
      </article>
    </Link>
  );
}