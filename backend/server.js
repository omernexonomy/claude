const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const todoRoutes = require('./routes/todos');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-todo';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    if (!process.env.VERCEL) {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }
  })
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = app;
