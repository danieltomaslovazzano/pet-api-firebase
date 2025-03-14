// index.js
require('dotenv').config();
const express = require('express');
const app = express();

// Import your admin routes
const adminRoutes = require('./routes/adminRoutes');

const petRoutes = require('./routes/petRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes

// Middleware for parsing JSON
app.use(express.json());

// Mount the admin routes here:
app.use('/admin', adminRoutes);

// Mount routes
app.use('/pets', petRoutes);
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);
app.use('/conversations', conversationRoutes);
app.use('/auth', authRoutes); // Mount the auth endpoints

// Global error handler (optional)
//app.use((err, req, res, next) => {
//  console.error(err);
//  res.status(500).json({ error: 'Internal Server Error' });
//});

app.use((err, req, res, next) => {
  console.error('Full error details:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

