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

export const submitPlaceRating = (placeId, answers) =>
  api.post('/ratings', { placeId, ...answers });