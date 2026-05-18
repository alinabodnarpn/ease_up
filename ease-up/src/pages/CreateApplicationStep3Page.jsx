import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';
import { createApplication } from '../services/applicationsApi';
import { useAppDispatch, useAppState } from '../hooks/useAppContext';

const categoryLabels = {
  ramps: 'Пандуси',
  lifts: 'Ліфти та підйомники',
  parking: 'Парковка',
  sidewalks: 'Тротуари',
  lights: 'Світлофори та переходи',
  transport: 'Зупинки громадського транспорту',
  toilets: 'Санітарні кімнати',
};

function getTodayDate() {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  return `${day}.${month}.${year}`;
}

export default function CreateApplicationStep3Page() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { applicationDraft } = useAppState();

  const [photos, setPhotos] = useState(
    applicationDraft.step3?.photos || [null, null, null, null]
  );

  const [address, setAddress] = useState(applicationDraft.step3?.address || '');
  const [submitting, setSubmitting] = useState(false);

  const handlePhotoChange = (index) => (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setPhotos((prev) =>
      prev.map((photo, i) => (i === index ? url : photo))
    );
  };

  const isValid = address.trim().length > 0;

  const handleSubmit = async () => {
    if (!isValid || submitting) return;

    const step1 = applicationDraft.step1 || {};
    const step2 = applicationDraft.step2 || {};

    if (!step1.surname || !step1.name || !step1.middleName) {
      alert('Спочатку заповніть особисту інформацію');
      navigate('/create/application/step-1');
      return;
    }

    if (!step2.description) {
      alert('Спочатку опишіть проблему');
      navigate('/create/application/step-2');
      return;
    }

    setSubmitting(true);

    const firstPhoto = photos.find(Boolean);

    const author = `${step1.surname} ${step1.name} ${step1.middleName}`;
    const category = categoryLabels[step2.category] || 'Звернення';

    const newApplication = {
      category,
      author,
      text: step2.description,
      description: step2.description,
      address,
      image: firstPhoto || null,
      status: 'Триває збір підписів',
      current: 0,
      goal: 500,
      progress: 0,
      startDate: getTodayDate(),
      daysLeft: 60,
      isPrivate: step2.isPrivate,
    };

    try {
      await createApplication(newApplication);

      dispatch({
        type: 'save_application_step',
        step: 'step3',
        payload: {
          address,
          photos,
        },
      });

      dispatch({
        type: 'clear_application_draft',
      });

      navigate('/create/application/success');
    } catch (error) {
      console.error(error);
      alert('Не вдалося створити звернення');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Створити звернення" showFilter={false} />

      <div className="appeal-progress-label">Додайте фото та адресу місця</div>
      <div className="appeal-progress-bar">
        <div className="appeal-progress-bar__fill" style={{ width: '100%' }} />
      </div>

      <section className="form-page">
        <div className="appeal-photo-grid">
          {photos.map((photo, index) => (
            <label key={index} className="appeal-photo-slot">
              {photo ? (
                <img src={photo} alt="" className="appeal-photo-preview" />
              ) : (
                <div className="appeal-photo-placeholder" />
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

        <label className="form-field">
          <span className="form-label">
            Адреса <span className="form-required">*</span>
          </span>
          <input
            className="form-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Назва вулиці, номер будинку"
          />
        </label>

        <button
          className={`primary-wide-button${!isValid ? ' primary-wide-button--disabled' : ''}`}
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? 'Публікуємо...' : 'Опублікувати'}
        </button>
      </section>
    </main>
  );
}