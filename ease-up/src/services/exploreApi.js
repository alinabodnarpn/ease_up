import { api } from './api';

export const getPlaces = () =>
  api.get('/places');

export const getPlaceById = (id) =>
  api.get(`/places/${id}`);

export const getPlacesByCategory = (slug) =>
  api.get(`/places?category=${slug}`);

export const getPopularPlaces = () =>
  api.get('/places?popular=true');

export const getRoutes = () =>
  api.get('/routes');

export const getVolunteers = () =>
  api.get('/volunteers');

export const getRatingsByPlaceId = (placeId) =>
  api.get(`/placeRatings?placeId=${Number(placeId)}`);

function calculateRatingFromAnswers(answers) {
  const values = Object.values(answers);

  if (values.length === 0) {
    return 0;
  }

  const yesCount = values.filter((value) => value === 'yes').length;
  const rating = (yesCount / values.length) * 5;

  return Number(rating.toFixed(1));
}

export async function submitPlaceRating(placeId, answers) {
  const numericPlaceId = Number(placeId);

  const place = await getPlaceById(numericPlaceId);

  const newUserRating = calculateRatingFromAnswers(answers);

  const createdRating = await api.post('/placeRatings', {
    placeId: numericPlaceId,
    createdAt: new Date().toISOString(),
    rating: newUserRating,
    answers,
  });

  const previousRating = Number(place.rating) || 0;


  const previousRatingsCount = Number(place.ratingsCount ?? 1);

  const newRatingsCount = previousRatingsCount + 1;

  const updatedAverageRating =
    (previousRating * previousRatingsCount + newUserRating) / newRatingsCount;

  const updatedPlace = await api.patch(`/places/${numericPlaceId}`, {
    rating: updatedAverageRating.toFixed(1),
    ratingsCount: newRatingsCount,
  });

  return {
    createdRating,
    updatedPlace,
  };
}