import { api } from './api';

export function getApplications() {
  return api.get('/applications');
}

export function getApplicationById(id) {
  return api.get(`/applications/${id}`);
}

export function createApplication(application) {
  return api.post('/applications', application);
}