import { Link, useParams } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function ApplicationDetailsPage() {
  const { id } = useParams();

  return (
    <main className="main-content">
      <InnerPageHeader title="Деталі звернення" showFilter={false} />

      <section className="application-details-page">
        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Категорія</h3>
          <span className="application-details-page__tag">Ліфти та підйомники</span>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Автор/ка</h3>
          <p className="application-details-page__muted">Короленко Катерина Сергіївна</p>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Опис звернення</h3>
          <div className="application-details-page__description">
            Шановні представники органу влади! Мене звати Катерина, я є мешканкою
            будинку за адресою вул. Джерельна, 21/12. Звертаюся до вас із проханням
            розглянути питання встановлення підйомника на вході до цієї будівлі.
          </div>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Початок збору підписів</h3>
          <p className="application-details-page__muted">20.11.24</p>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Адреса</h3>
          <p className="application-details-page__muted">Вул. Джерельна, 21</p>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Фото</h3>

          <div className="application-details-page__photos">
            <img src="/images/application-1.png" alt="Фото звернення" className="application-details-page__photo" />
            <img src="/images/application-1.png" alt="Фото звернення" className="application-details-page__photo" />
            <img src="/images/application-1.png" alt="Фото звернення" className="application-details-page__photo" />
            <img src="/images/application-1.png" alt="Фото звернення" className="application-details-page__photo" />
          </div>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">Триває збір підписів</h3>
          <div className="application-details-page__count">350 з 500</div>

          <div className="application-details-page__bar">
            <div className="application-details-page__bar-fill"></div>
          </div>
        </div>

        <div className="application-details-page__block">
          <h3 className="application-details-page__label">До кінця збору підписів залишилось:</h3>
          <p className="application-details-page__muted">60 днів</p>
        </div>

        <Link to={`/applications/${id}/signed`} className="primary-wide-button">
          Підписати
        </Link>
      </section>
    </main>
  );
}