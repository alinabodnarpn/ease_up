import { api } from './api';

export function getAnnouncements() {
  return api.get('/announcements');
}

export function createAnnouncement(announcement) {
  return api.post('/announcements', announcement);
}