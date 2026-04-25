export default function AnnouncementCard() {
  return (
    <article className="announcement-card">
      <div className="announcement-card__header">
        <div className="announcement-card__author">
          <img
            src="/images/avatar-maks.png"
            alt="Maks"
            className="announcement-card__avatar"
          />

          <div className="announcement-card__author-info">
            <h3 className="announcement-card__author-name">Maks</h3>
            <span className="announcement-card__date">12.10.24</span>
          </div>
        </div>

        <button className="announcement-card__more-btn" type="button" aria-label="Більше">
          ⋮
        </button>
      </div>

      <div className="announcement-card__body">
        <div className="announcement-card__text-block">
          <p className="announcement-card__text">
            Продаю крісло колісне. нове. в упаковці. Ціна договірна.
          </p>
        </div>

        <div className="announcement-card__image-wrapper">
          <img
            src="/images/announcement-1.png"
            alt="Оголошення"
            className="announcement-card__image"
          />
        </div>
      </div>

      <div className="announcement-card__footer">
        <div className="announcement-card__actions">
          <div className="announcement-card__action">
            <img src="/icons/heart.svg" alt="" className="announcement-card__action-icon" />
            <span>31</span>
          </div>

          <div className="announcement-card__action">
            <img src="/icons/comment.svg" alt="" className="announcement-card__action-icon" />
            <span>10</span>
          </div>

          <div className="announcement-card__action">
            <img src="/icons/share.svg" alt="" className="announcement-card__action-icon" />
            <span>3</span>
          </div>
        </div>

        <button className="announcement-card__message-btn" type="button" aria-label="Написати">
          ✉
        </button>
      </div>
    </article>
  );
}