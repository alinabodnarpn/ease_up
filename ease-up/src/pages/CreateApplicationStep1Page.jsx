import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreateApplicationStep1Page() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    surname: '',
    name: '',
    middleName: '',
    city: 'lviv',
    street: '',
    building: '',
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const isValid = form.surname.trim() && form.name.trim() && form.middleName.trim();

  return (
    <main className="main-content">
      <InnerPageHeader title="Створити звернення" showFilter={false} />

      <div className="appeal-progress-label">Заповніть особисту інформацію</div>
      <div className="appeal-progress-bar">
        <div className="appeal-progress-bar__fill" style={{ width: '33%' }} />
      </div>

      <section className="form-page">
        <label className="form-field">
          <span className="form-label">Прізвище <span className="form-required">*</span></span>
          <input
            className="form-input"
            value={form.surname}
            onChange={handleChange('surname')}
            placeholder="Введіть прізвище"
          />
        </label>

        <label className="form-field">
          <span className="form-label">Ім'я <span className="form-required">*</span></span>
          <input
            className="form-input"
            value={form.name}
            onChange={handleChange('name')}
            placeholder="Введіть ім'я"
          />
        </label>

        <label className="form-field">
          <span className="form-label">По батькові <span className="form-required">*</span></span>
          <input
            className="form-input"
            value={form.middleName}
            onChange={handleChange('middleName')}
            placeholder="Введіть по батькові"
          />
        </label>

        <label className="form-field">
          <span className="form-label">Місто <span className="form-required">*</span></span>
          <select
            className="form-input form-select"
            value={form.city}
            onChange={handleChange('city')}
          >
            <option value="lviv">Львів</option>
            <option value="kyiv">Київ</option>
            <option value="kharkiv">Харків</option>
          </select>
        </label>

        <div className="form-row">
          <label className="form-field">
            <span className="form-label">Вулиця</span>
            <input
              className="form-input"
              value={form.street}
              onChange={handleChange('street')}
              placeholder="Вулиця"
            />
          </label>
          <label className="form-field form-field--narrow">
            <span className="form-label">Будинок</span>
            <input
              className="form-input"
              value={form.building}
              onChange={handleChange('building')}
              placeholder="№"
            />
          </label>
        </div>

        <button
          className={`primary-wide-button${!isValid ? ' primary-wide-button--disabled' : ''}`}
          type="button"
          onClick={() => isValid && navigate('/create/application/step-2')}
        >
          Продовжити
        </button>
      </section>
    </main>
  );
}