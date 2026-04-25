export default function PublicationCard() {
  return (
    <article className="publication-card">
      <div className="publication-card__header">
        <div className="publication-card__author">
          <img
            src="/images/avatar.svg"
            alt="Karina"
            className="publication-card__avatar"
          />

          <div className="publication-card__author-info">
            <h3 className="publication-card__author-name">Karina</h3>
            <span className="publication-card__date">20.11.24</span>
          </div>
        </div>

        <button className="publication-card__more-btn" type="button" aria-label="Більше">
          ⋮
        </button>
      </div>

      <div className="publication-card__body">
        <div className="publication-card__text-block">
          <p className="publication-card__text">
            Відвідала Музей Науки у Львові. Щира рекомендація кожному бувати в цьому класному доступному місці!
          </p>
        </div>

        <div className="publication-card__image-wrapper">
          <img
            src="/images/post-image.svg"
            alt="Публікація"
            className="publication-card__image"
          />
        </div>
      </div>

      <div className="publication-card__footer">
        <div className="publication-card__action">
          <img src="/icons/heart.svg" alt="" className="publication-card__action-icon" />
          <span>45</span>
        </div>

        <div className="publication-card__action">
          <img src="/icons/comment.svg" alt="" className="publication-card__action-icon" />
          <span>3</span>
        </div>

        <div className="publication-card__action">
          <img src="/icons/share.svg" alt="" className="publication-card__action-icon" />
          <span>1</span>
        </div>
      </div>
    </article>
  );
}