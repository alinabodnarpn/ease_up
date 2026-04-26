export default function AnnouncementCard({
  author,
  date,
  title,
  text,
  avatar,
  image,
  likes,
  comments,
  shares,
}) {
  return (
    <article className="announcement-card">
      <div className="announcement-card__header">
        <div className="announcement-card__author">
          <img
            src={avatar}
            alt={author}
            className="announcement-card__avatar"
          />

          <div className="announcement-card__author-info">
            <h3 className="announcement-card__author-name">{author}</h3>
            <span className="announcement-card__date">{date}</span>
          </div>
        </div>

        <button className="announcement-card__more-btn" type="button" aria-label="Більше">
          ⋮
        </button>
      </div>

      <div className="announcement-card__body">
        <div className="announcement-card__text-block">
          {title && <h4 className="announcement-card__title">{title}</h4>}
          <p className="announcement-card__text">{text}</p>
        </div>

        {image && (
          <div className="announcement-card__image-wrapper">
            <img
              src={image}
              alt="Оголошення"
              className="announcement-card__image"
            />
          </div>
        )}
      </div>

      <div className="announcement-card__footer">
        <div className="announcement-card__actions">
          <div className="announcement-card__action">
            <img src="/icons/heart.svg" alt="" className="announcement-card__action-icon" />
            <span>{likes}</span>
          </div>

          <div className="announcement-card__action">
            <img src="/icons/comment.svg" alt="" className="announcement-card__action-icon" />
            <span>{comments}</span>
          </div>

          <div className="announcement-card__action">
            <img src="/icons/share.svg" alt="" className="announcement-card__action-icon" />
            <span>{shares}</span>
          </div>
        </div>

        <button className="announcement-card__message-btn" type="button" aria-label="Написати">
          ✉
        </button>
      </div>
    </article>
  );
}