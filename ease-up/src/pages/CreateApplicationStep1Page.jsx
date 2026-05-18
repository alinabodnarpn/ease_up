import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';
import { useAppDispatch, useAppState } from '../hooks/useAppContext';

export default function CreateApplicationStep1Page() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { applicationDraft } = useAppState();

  const [form, setForm] = useState({
    surname: applicationDraft.step1?.surname || '',
    name: applicationDraft.step1?.name || '',
    middleName: applicationDraft.step1?.middleName || '',
    city: applicationDraft.step1?.city || 'lviv',
    street: applicationDraft.step1?.street || '',
    building: applicationDraft.step1?.building || '',
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const isValid =
    form.surname.trim() &&
    form.name.trim() &&
    form.middleName.trim();

  const handleNext = () => {
    if (!isValid) return;

    dispatch({
      type: 'save_application_step',
      step: 'step1',
      payload: form,
    });

    navigate('/create/application/step-2');
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Створити звернення" showFilter={false} />

      <div className="appeal-progress-label">Заповніть особисту інформацію</div>
      <div className="appeal-progress-bar">
        <div className="appeal-progress-bar__fill" style={{ width: '33%' }} />
      </div>

      <section className="form-page">
        <label className="form-field">
          <span className="form-label">
            Прізвище <span className="form-required">*</span>
          </span>
          <input
            className="form-input"
            value={form.surname}
            onChange={handleChange('surname')}
            placeholder="Введіть прізвище"
          />
        </label>

        <label className="form-field">
          <span className="form-label">
            Ім'я <span className="form-required">*</span>
          </span>
          <input
            className="form-input"
            value={form.name}
            onChange={handleChange('name')}
            placeholder="Введіть ім'я"
          />
        </label>

        <label className="form-field">
          <span className="form-label">
            По батькові <span className="form-required">*</span>
          </span>
          <input
            className="form-input"
            value={form.middleName}
            onChange={handleChange('middleName')}
            placeholder="Введіть по батькові"
          />
        </label>

        <label className="form-field">
          <span className="form-label">
            Місто <span className="form-required">*</span>
          </span>
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
          onClick={handleNext}
        >
          Продовжити
        </button>
      </section>
    </main>
  );
}