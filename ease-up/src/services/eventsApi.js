import { api } from './api';

export function getEvents() {
  return api.get('/events');
}