import { useState } from 'react';

export default function AnnouncementCard({
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
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [localComments, setLocalComments] = useState([]);

  const handleSendComment = () => {
    const trimmedComment = commentInput.trim();

    if (!trimmedComment) return;

    setLocalComments((prev) => [...prev, trimmedComment]);
    setCommentInput('');
  };

  const handleShare = async () => {
    const shareData = {
      title: title || 'Оголошення',
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

  const handleMessage = () => {
    alert('Повідомлення автору поки працює як демо-функція.');
  };

  const totalComments = comments + localComments.length;
  const displayedLikes = isLiked ? likes + 1 : likes;

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

        <button
          className="announcement-card__more-btn"
          type="button"
          aria-label="Більше"
        >
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
          <button
            type="button"
            className={`announcement-card__action announcement-card__action--button ${
              isLiked ? 'announcement-card__action--active' : ''
            }`}
            onClick={() => setIsLiked((prev) => !prev)}
            aria-label="Лайкнути оголошення"
          >
            <img
              src="/icons/heart.svg"
              alt=""
              className="announcement-card__action-icon"
            />
            <span>{displayedLikes}</span>
          </button>

          <button
            type="button"
            className="announcement-card__action announcement-card__action--button"
            onClick={() => setShowComments((prev) => !prev)}
            aria-label="Коментарі"
          >
            <img
              src="/icons/comment.svg"
              alt=""
              className="announcement-card__action-icon"
            />
            <span>{totalComments}</span>
          </button>

          <button
            type="button"
            className="announcement-card__action announcement-card__action--button"
            onClick={handleShare}
            aria-label="Поділитись"
          >
            <img
              src="/icons/share.svg"
              alt=""
              className="announcement-card__action-icon"
            />
            <span>{shares}</span>
          </button>
        </div>

        <button
          className="announcement-card__message-btn"
          type="button"
          aria-label="Написати автору"
          onClick={handleMessage}
        >
          ✉
        </button>
      </div>

      {showComments && (
        <div className="comments-section">
          {localComments.length > 0 ? (
            localComments.map((comment, index) => (
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