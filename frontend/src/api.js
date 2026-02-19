import axios from 'axios';

// In production REACT_APP_API_HOST is set to the Render backend hostname.
// In development the CRA proxy handles /api/* requests to localhost:5000.
const baseURL = process.env.REACT_APP_API_HOST
  ? `https://${process.env.REACT_APP_API_HOST}`
  : '';

const api = axios.create({ baseURL });

export default api;
