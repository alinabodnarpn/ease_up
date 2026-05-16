import { useState } from 'react';
import { useAppDispatch, useAppState } from '../../hooks/useAppContext';

export default function PublicationCard({
  id,
  author,
  date,
  title,
  text,
  avatar,
  image,
  likes = 0,
  comments = 0,
  shares = 0,
}) {
  const dispatch = useAppDispatch();

  const {
    likedPublicationIds,
    publicationComments,
  } = useAppState();

  const isLiked = likedPublicationIds.includes(id);
  const displayedLikes = isLiked ? likes + 1 : likes;

  const savedComments = publicationComments[id] || [];
  const totalComments = comments + savedComments.length;

  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  const handleLikeClick = () => {
    if (id === undefined || id === null) {
      console.warn('PublicationCard: this post has no id, like cannot work');
      return;
    }

    dispatch({
      type: 'toggle_like',
      id,
    });
  };

  const handleSendComment = () => {
    const trimmedComment = commentInput.trim();

    if (!trimmedComment) return;

    if (id === undefined || id === null) {
      console.warn('PublicationCard: this post has no id, comment cannot work');
      return;
    }

    dispatch({
      type: 'add_publication_comment',
      id,
      comment: trimmedComment,
    });

    setCommentInput('');
  };

  const handleShare = async () => {
    const shareData = {
      title: title || 'Публікація',
      text: text || '',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert('Посилання скопійовано!');
        return;
      }

      alert('Скопіюйте посилання з адресного рядка браузера.');
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

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

        <button
          className="publication-card__more-btn"
          type="button"
          aria-label="Більше"
        >
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
          className={`publication-card__action publication-card__action--button ${
            isLiked ? 'publication-card__action--active' : ''
          }`}
          onClick={handleLikeClick}
          aria-label="Лайкнути публікацію"
        >
          <img
            src="/icons/heart.svg"
            alt=""
            className="publication-card__action-icon"
          />
          <span>{displayedLikes}</span>
        </button>

        <button
          type="button"
          className="publication-card__action publication-card__action--button"
          onClick={() => setShowComments((prev) => !prev)}
          aria-label="Коментарі"
        >
          <img
            src="/icons/comment.svg"
            alt=""
            className="publication-card__action-icon"
          />
          <span>{totalComments}</span>
        </button>

        <button
          type="button"
          className="publication-card__action publication-card__action--button"
          onClick={handleShare}
          aria-label="Поділитись"
        >
          <img
            src="/icons/share.svg"
            alt=""
            className="publication-card__action-icon"
          />
          <span>{shares}</span>
        </button>
      </div>

      {showComments && (
        <div className="comments-section">
          {savedComments.length > 0 ? (
            savedComments.map((comment, index) => (
              <div key={`${comment}-${index}`} className="comment-item">
                {comment}
              </div>
            ))
          ) : (
            <p className="comments-empty">Коментарів поки немає.</p>
          )}

          <div className="comment-input-row">
            <input
              className="comment-input"
              placeholder="Напишіть коментар..."
              value={commentInput}
              onChange={(event) => setCommentInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSendComment();
                }
              }}
            />

            <button
              className="comment-send-btn"
              type="button"
              onClick={handleSendComment}
              aria-label="Надіслати коментар"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </article>
  );
}