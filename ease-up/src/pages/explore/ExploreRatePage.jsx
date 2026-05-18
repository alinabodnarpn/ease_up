import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InnerPageHeader from '../../components/layout/InnerPageHeader';
import { submitPlaceRating } from '../../services/exploreApi';

const questions = [
  'Чи є зручний тротуар або доріжка для підходу до будівлі?',
  'Чи є пандус на вході?',
  'Чи є автоматичні або легкі для відкривання двері?',
  'Чи є доступ до всіх важливих зон/поверхів у будівлі?',
  'Чи вільні проходи від зайвих перешкод?',
  'Чи вдалося без сторонньої допомоги дістатися до потрібних зон?',
];

export default function ExploreRatePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const filledCount = useMemo(() => {
    return Object.keys(answers).length;
  }, [answers]);

  const handleAnswer = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!id) {
      alert('Не знайдено місце для оцінки');
      return;
    }

    if (filledCount === 0) {
      alert('Оберіть хоча б одну відповідь');
      return;
    }

    setSubmitting(true);

    try {
      await submitPlaceRating(id, answers);
      navigate(`/explore/places/${id}`);
    } catch (error) {
      console.error('Submit place rating failed:', error);
      alert('Не вдалося надіслати оцінку');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="main-content">
      <InnerPageHeader title="Оцінити місце" showFilter={false} />

      <form className="explore-rate" onSubmit={handleSubmit}>
        <div className="explore-rate__stars">
          {'★'.repeat(Math.min(filledCount, 5))}
          {'☆'.repeat(5 - Math.min(filledCount, 5))}
        </div>

        <div className="explore-rate__questions">
          {questions.map((question, index) => {
            const answer = answers[index];

            return (
              <div key={index} className="explore-rate__question-block">
                <p className="explore-rate__question">
                  {index + 1}. {question}
                </p>

                <div className="explore-rate__buttons">
                  <button
                    type="button"
                    className={`explore-rate__answer ${
                      answer === 'yes' ? 'explore-rate__answer--yes-active' : ''
                    }`}
                    onClick={() => handleAnswer(index, 'yes')}
                  >
                    Так
                  </button>

                  <button
                    type="button"
                    className={`explore-rate__answer ${
                      answer === 'no' ? 'explore-rate__answer--no-active' : ''
                    }`}
                    onClick={() => handleAnswer(index, 'no')}
                  >
                    Ні
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="primary-wide-button"
          type="submit"
          disabled={submitting}
        >
          {submitting ? 'Надсилання...' : 'Надіслати'}
        </button>
      </form>
    </main>
  );
}