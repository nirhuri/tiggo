import axios from 'axios';

export const baseServerUrl = axios.create({
  baseURL: 'http://localhost:3000',
});
