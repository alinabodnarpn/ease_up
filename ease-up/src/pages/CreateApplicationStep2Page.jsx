import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreateApplicationStep2Page() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    category: 'ramps',
    description: '',
    isPrivate: false,
  });

  const isValid = form.description.trim().length > 0;

  return (
    <main className="main-content">
      <InnerPageHeader title="Створити звернення" showFilter={false} />

      <div className="appeal-progress-label">Опишіть проблему</div>
      <div className="appeal-progress-bar">
        <div className="appeal-progress-bar__fill" style={{ width: '67%' }} />
      </div>

      <section className="form-page">
        <label className="form-field">
          <span className="form-label">
            Оберіть категорію звернення <span className="form-required">*</span>
          </span>
          <select
            className="form-input form-select"
            value={form.category}
            onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="ramps">Пандуси</option>
            <option value="lifts">Ліфти та підйомники</option>
            <option value="parking">Парковка</option>
            <option value="sidewalks">Тротуари</option>
            <option value="lights">Світлофори та переходи</option>
            <option value="transport">Зупинки громадського транспорту</option>
            <option value="toilets">Санітарні кімнати</option>
          </select>
        </label>

        <label className="form-field">
          <span className="form-label">Опис звернення</span>
          <textarea
            className="form-input form-textarea"
            value={form.description}
            onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Опис звернення"
          />
        </label>

        <label className={`appeal-checkbox-row${form.isPrivate ? ' appeal-checkbox-row--checked' : ''}`}>
          Зробити звернення приватним
          <input
            type="checkbox"
            className="appeal-checkbox"
            checked={form.isPrivate}
            onChange={(e) => setForm(prev => ({ ...prev, isPrivate: e.target.checked }))}
          />
        </label>

        <button
          className={`primary-wide-button${!isValid ? ' primary-wide-button--disabled' : ''}`}
          type="button"
          onClick={() => isValid && navigate('/create/application/step-3')}
        >
          Продовжити
        </button>
      </section>
    </main>
  );
}