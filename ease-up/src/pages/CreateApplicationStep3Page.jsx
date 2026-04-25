import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerPageHeader from '../components/layout/InnerPageHeader';

export default function CreateApplicationStep3Page() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([null, null, null, null]);
  const [address, setAddress] = useState('');

  const handlePhotoChange = (index) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotos(prev => prev.map((p, i) => i === index ? url : p));
  };

  const isValid = address.trim().length > 0;

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

        <label className="form-field">
          <span className="form-label">Адреса <span className="form-required">*</span></span>
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
          onClick={() => isValid && navigate('/create/application/success')}
        >
          Опублікувати
        </button>
      </section>
    </main>
  );
}