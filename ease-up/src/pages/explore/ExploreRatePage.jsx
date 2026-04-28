import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RatingQuestion from '../../components/explore/RatingQuestion';

const QUESTIONS = [
  'Чи є зручний тротуар або доріжка для підходу до будівлі?',
  'Чи є пандус на вході?',
  'Чи є автоматичні або легкі для відкривання двері?',
  'Чи є доступ до всіх важливих зон/поверхів у будівлі?',
  'Чи вільні проходи від зайвих перешкод?',
  'Чи вдалося без сторонньої допомоги пересуватися по будівлі?',
];

export default function ExploreRatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [starRating, setStarRating] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (index, value) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const allAnswered = QUESTIONS.every((_, i) => answers[i]) && starRating > 0;

  const handleSubmit = () => {
    // TODO: submitPlaceRating(id, { starRating, answers })
    navigate(`/explore/place/${id}`);
  };

  return (
    <main className="main-content" style={{ padding: '20px 20px 0', paddingBottom: 120 }}>

      {/* Header */}
      <div className="page-header" style={{ marginBottom: 20 }}>
        <button className="page-header__back" onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src="/icons/arrow-left.svg" alt="Назад" className="page-header__icon" />
        </button>
        <h1 className="page-header__title">Оцінити місце</h1>
        <button className="page-header__action" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src="/icons/more.svg" alt="" className="page-header__icon" />
        </button>
      </div>

      {/* Star rating */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 28 }}>
        {[1,2,3,4,5].map(i => (
          <button
            key={i}
            onClick={() => setStarRating(i)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img
              src="/icons/star.svg"
              alt={`${i} зірка`}
              style={{ width: 36, height: 36, opacity: i <= starRating ? 1 : 0.25 }}
            />
          </button>
        ))}
      </div>

      {/* Questions */}
      {QUESTIONS.map((q, i) => (
        <RatingQuestion
          key={i}
          index={i}
          question={q}
          value={answers[i]}
          onChange={(val) => handleAnswer(i, val)}
        />
      ))}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!allAnswered}
        className="map-btn"
        style={{
          width: '100%', marginTop: 8, border: 'none', cursor: allAnswered ? 'pointer' : 'not-allowed',
          opacity: allAnswered ? 1 : 0.5, fontFamily: 'inherit',
        }}
      >
        Надіслати оцінку
      </button>

    </main>
  );
}
