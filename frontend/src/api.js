import axios from 'axios';

// On Vercel both frontend and backend share the same domain (/api/* is
// handled by the serverless function). In local dev the CRA proxy in
// package.json forwards /api/* to localhost:5000.
const api = axios.create({ baseURL: '' });

export default api;
