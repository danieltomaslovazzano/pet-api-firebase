// app.js
require('./config/loadEnv');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { verifyToken } = require('./middlewares/auth');
const organizationContext = require('./middlewares/organizationContext');
const { unifiedResponseFormatter } = require('./middlewares/unifiedResponseFormatter');

// Import routes
const adminRoutes = require('./routes/adminRoutes');
const petRoutes = require('./routes/petRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const authRoutes = require('./routes/authRoutes');
const organizationRoutes = require('./routes/organizationRoutes');
const publicOrganizationRoutes = require('./routes/publicOrganizationRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const languagePreferencesRoutes = require('./routes/languagePreferencesRoutes');
const publicLanguageRoutes = require('./routes/publicLanguageRoutes');

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

// Unified API Response Formatter - Available in all routes
app.use(unifiedResponseFormatter);

// Rutas públicas
app.use('/api/auth', authRoutes);
// Endpoints públicos de idiomas (sin autenticación)
app.use('/api/language-preferences', publicLanguageRoutes);
// Organization types endpoints (public)
app.use('/api/organizations/types', publicOrganizationRoutes);

// Rutas públicas específicas de organizaciones  
const publicOrgRouter = express.Router();
const organizationController = require('./controllers/organizationController');
const { validateOrganizationType } = require('./middlewares/validation/organizationValidation');

publicOrgRouter.get('/', organizationController.getOrganizationTypes);
publicOrgRouter.get('/:type', validateOrganizationType, organizationController.getOrganizationTypeInfo);

app.use('/api/organizations/types', publicOrgRouter);

// Middlewares de autenticación y organización para rutas protegidas
app.use(verifyToken);
app.use(organizationContext);

// Rutas protegidas
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/organizations', organizationRoutes); // Todas las demás rutas de organizaciones
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/memberships', membershipRoutes);
app.use('/api/language-preferences', languagePreferencesRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Full error details:', err);
  res.apiServerError('common.internal_server_error', {
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

module.exports = app; 