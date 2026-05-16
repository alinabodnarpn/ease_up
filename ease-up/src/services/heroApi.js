import { api } from './api';

export function getHeroPosts() {
  return api.get('/heroPosts');
}