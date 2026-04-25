import { useState } from 'react';
import { Link } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreateApplicationStep1Page() {
  const [form, setForm] = useState({
    surname: '',
    name: '',
    middleName: '',
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Створення звернення" showFilter={false} />

      <section className="form-page">
        <div className="step-indicator">Крок 1 із 3</div>

        <label className="form-field">
          <span className="form-label">Прізвище</span>
          <input
            className="form-input"
            value={form.surname}
            onChange={handleChange('surname')}
            placeholder="Введіть прізвище"
          />
        </label>

        <label className="form-field">
          <span className="form-label">Ім’я</span>
          <input
            className="form-input"
            value={form.name}
            onChange={handleChange('name')}
            placeholder="Введіть ім’я"
          />
        </label>

        <label className="form-field">
          <span className="form-label">По батькові</span>
          <input
            className="form-input"
            value={form.middleName}
            onChange={handleChange('middleName')}
            placeholder="Введіть по батькові"
          />
        </label>

        <Link to="/create/application/step-2" className="primary-wide-button">
          Далі
        </Link>
      </section>
    </main>
  );
}