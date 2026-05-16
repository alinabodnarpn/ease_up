import { useAppDispatch, useAppState } from '../../hooks/useAppContext';

export default function PublicationCard({
  id,
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
  const dispatch = useAppDispatch();
  const { likedPublicationIds } = useAppState();

  const isLiked = likedPublicationIds.includes(id);
  const displayedLikes = isLiked ? likes + 1 : likes;

  return (
    <article className="publication-card">
      <div className="publication-card__header">
        <div className="publication-card__author">
          <img
            src={avatar}
            alt={author}
            className="publication-card__avatar"
          />

          <div className="publication-card__author-info">
            <h3 className="publication-card__author-name">{author}</h3>
            <span className="publication-card__date">{date}</span>
          </div>
        </div>

        <button className="publication-card__more-btn" type="button" aria-label="Більше">
          ⋮
        </button>
      </div>

      <div className="publication-card__body">
        <div className="publication-card__text-block">
          {title && <h4 className="publication-card__title">{title}</h4>}
          <p className="publication-card__text">{text}</p>
        </div>

        {image && (
          <div className="publication-card__image-wrapper">
            <img
              src={image}
              alt="Публікація"
              className="publication-card__image"
            />
          </div>
        )}
      </div>

      <div className="publication-card__footer">
        <button
          type="button"
          className="publication-card__action publication-card__action--button"
          onClick={() => dispatch({ type: 'toggle_like', id })}
          aria-label="Лайкнути публікацію"
        >
          <img
            src="/icons/heart.svg"
            alt=""
            className="publication-card__action-icon"
          />
          <span>{displayedLikes}</span>
        </button>

        <div className="publication-card__action">
          <img
            src="/icons/comment.svg"
            alt=""
            className="publication-card__action-icon"
          />
          <span>{comments}</span>
        </div>

        <div className="publication-card__action">
          <img
            src="/icons/share.svg"
            alt=""
            className="publication-card__action-icon"
          />
          <span>{shares}</span>
        </div>
      </div>
    </article>
  );
}