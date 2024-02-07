import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';
const API_TIMEOUT = 5000;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
});

export default api;