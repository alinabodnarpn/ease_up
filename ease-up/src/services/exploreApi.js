import api from './api';

export const getPlaces = (params = {}) =>
  api.get('/places', { params });

export const getPlaceById = (id) =>
  api.get(`/places/${id}`);

export const getPlacesByCategory = (slug) =>
  api.get('/places', { params: { category: slug } });

export const getPopularPlaces = () =>
  api.get('/places', { params: { popular: true } });

export const getRoutes = () =>
  api.get('/routes');

export const getVolunteers = () =>
  api.get('/volunteers');

export const submitPlaceRating = (placeId, answers) =>
  api.post(`/places/${placeId}/ratings`, { answers });
