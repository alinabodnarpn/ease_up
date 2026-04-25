import { useState } from 'react';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreatePublicationPage() {
  const [form, setForm] = useState({
    title: '',
    text: '',
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
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
            className="form-textarea"
            value={form.text}
            onChange={handleChange('text')}
            placeholder="Напишіть текст публікації"
          />
        </label>

        <button className="primary-wide-button" type="button">
          Опублікувати
        </button>
      </section>
    </main>
  );
}