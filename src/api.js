// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // URL do backend
});

export const registerFreight = (freightData) => api.post('/fretes', freightData);
export const fetchFreights = () => api.get('/fretes');

export const auth = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};

export default api;
