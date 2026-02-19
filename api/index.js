// Vercel serverless entry point — re-exports the Express app.
// Vercel auto-detects the api/ directory and runs each file as a function.
module.exports = require('../backend/server');
