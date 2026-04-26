import { api } from './api';

export function getPublications() {
  return api.get('/publications');
}

export function createPublication(publication) {
  return api.post('/publications', publication);
}