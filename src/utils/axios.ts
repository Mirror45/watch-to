import axios from 'axios';

const API_URL = 'https://13.design.htmlacademy.pro/wtw';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token && config.headers) {
    config.headers['X-Token'] = token;
  }
  return config;
});
