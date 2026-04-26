import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';
import { createAnnouncement } from '../services/announcementsApi';

export default function CreateAnnouncementPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    author: 'Maks',
    date: '26.04.26',
    title: '',
    text: '',
    avatar: '/images/avatar-maks.png',
    likes: 0,
    comments: 0,
    shares: 0,
  });

  const [photos, setPhotos] = useState([null, null, null, null]);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handlePhotoChange = (index) => (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setPhotos((prev) => prev.map((photo, i) => (i === index ? previewUrl : photo)));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const firstPhoto = photos.find(Boolean) || null;

    const newAnnouncement = {
      ...form,
      image: firstPhoto,
    };

    try {
      await createAnnouncement(newAnnouncement);
      navigate('/announcements');
    } catch (error) {
      console.error(error);
      alert('Не вдалося створити оголошення');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Створити оголошення" showFilter={false} />

      <form className="form-page" onSubmit={handleSubmit}>
        <label className="form-field">
          <span className="form-label">Заголовок</span>
          <input
            className="form-input"
            value={form.title}
            onChange={handleChange('title')}
            placeholder="Введіть заголовок"
          />
        </label>

        <label className="form-field">
          <span className="form-label">Опис</span>
          <textarea
            className="form-input form-textarea"
            value={form.text}
            onChange={handleChange('text')}
            placeholder="Напишіть текст оголошення"
          />
        </label>

        <div className="form-field">
          <span className="form-label">Фото</span>

          <div className="appeal-photo-grid">
            {photos.map((photo, index) => (
              <label key={index} className="appeal-photo-slot">
                {photo ? (
                  <img src={photo} alt="" className="appeal-photo-preview" />
                ) : (
                  <div className="appeal-photo-placeholder">
                    <img
                      src="/icons/image-placeholder.svg"
                      alt=""
                      className="appeal-photo-placeholder-icon"
                    />
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange(index)}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>

        <button className="primary-wide-button" type="submit" disabled={submitting}>
          {submitting ? 'Збереження...' : 'Опублікувати'}
        </button>
      </form>
    </main>
  );
}