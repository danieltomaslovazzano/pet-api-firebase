// app.js
require('./config/loadEnv');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { verifyToken } = require('./middlewares/auth');
const organizationContext = require('./middlewares/organizationContext');
const { languageDetection, addLanguageHeaders } = require('./middlewares/languageDetection');
const { responseFormatter } = require('./middlewares/responseFormatter');

// Import routes
const adminRoutes = require('./routes/adminRoutes');
const petRoutes = require('./routes/petRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const authRoutes = require('./routes/authRoutes');
const organizationRoutes = require('./routes/organizationRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const languagePreferencesRoutes = require('./routes/languagePreferencesRoutes');

// Configure CORS
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

// i18n middlewares - detectar idioma y formatear respuestas
app.use(languageDetection);
app.use(responseFormatter);
app.use(addLanguageHeaders);

// Rutas públicas
app.use('/api/auth', authRoutes);

// Middlewares de autenticación y organización para rutas protegidas
app.use(verifyToken);
app.use(organizationContext);

// Rutas protegidas
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/organizations', organizationRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/memberships', membershipRoutes);
app.use('/api/language-preferences', languagePreferencesRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Full error details:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

module.exports = app; 