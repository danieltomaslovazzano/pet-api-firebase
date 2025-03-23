// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Import your admin routes
const adminRoutes = require('./routes/adminRoutes');

const petRoutes = require('./routes/petRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const organizationRoutes = require('./routes/organizationRoutes');


// Configurar CORS
app.use(cors({
  origin: [
    'http://localhost:5000',
    'http://localhost:5001',
    'http://localhost:5002'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware for parsing JSON
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/organizations', organizationRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes);

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

