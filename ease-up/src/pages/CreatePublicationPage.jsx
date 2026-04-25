import { useState } from 'react';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreatePublicationPage() {
  const [form, setForm] = useState({ title: '', text: '' });
  const [photos, setPhotos] = useState([null, null, null, null]);

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handlePhotoChange = (index) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotos(prev => prev.map((p, i) => i === index ? url : p));
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Створити публікацію" showFilter={false} />

      <section className="form-page">
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
            placeholder="Напишіть текст публікації"
          />
        </label>

        <div className="form-field">
          <span className="form-label">Фото</span>
          <div className="appeal-photo-grid">
            {photos.map((photo, index) => (
              <label key={index} className="appeal-photo-slot">
                {photo
                  ? <img src={photo} alt="" className="appeal-photo-preview" />
                  : <div className="appeal-photo-placeholder" />
                }
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

        <button className="primary-wide-button" type="button">
          Опублікувати
        </button>
      </section>
    </main>
  );
}