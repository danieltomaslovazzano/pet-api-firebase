const { translate } = require('../utils/i18n');

/**
 * Middleware para formatear respuestas con soporte de internacionalización
 * Agrega métodos helper al objeto response para facilitar el envío de mensajes traducidos
 */
const responseFormatter = (req, res, next) => {
  // Método para respuestas exitosas
  res.success = (messageKey, data = {}, statusCode = 200, params = {}) => {
    const response = {
      success: true,
      message: req.t(messageKey, params),
      data
    };

    // Agregar clave de mensaje para debugging en desarrollo
    if (process.env.NODE_ENV === 'development') {
      response.messageKey = messageKey;
      response.language = req.language;
    }

    res.status(statusCode).json(response);
  };

  // Método para respuestas de error
  res.error = (messageKey, statusCode = 400, details = {}, params = {}) => {
    const response = {
      success: false,
      error: req.t(messageKey, params),
      details
    };

    // Agregar clave de mensaje para debugging en desarrollo
    if (process.env.NODE_ENV === 'development') {
      response.messageKey = messageKey;
      response.language = req.language;
    }

    res.status(statusCode).json(response);
  };

  // Método para respuestas de validación con múltiples errores
  res.validationError = (errors, statusCode = 400) => {
    const translatedErrors = errors.map(error => ({
      field: error.field,
      message: req.t(error.messageKey, error.params || {}),
      messageKey: process.env.NODE_ENV === 'development' ? error.messageKey : undefined
    }));

    const response = {
      success: false,
      error: req.t('validation.failed'),
      details: translatedErrors
    };

    // Agregar información de debugging en desarrollo
    if (process.env.NODE_ENV === 'development') {
      response.language = req.language;
    }

    res.status(statusCode).json(response);
  };

  // Método para respuestas de datos sin mensaje específico
  res.data = (data, statusCode = 200) => {
    res.status(statusCode).json(data);
  };

  // Método para respuestas de lista con paginación
  res.list = (items, pagination = {}, statusCode = 200) => {
    const response = {
      success: true,
      data: items,
      pagination
    };

    res.status(statusCode).json(response);
  };

  // Método para respuestas de creación exitosa
  res.created = (messageKey, data = {}, params = {}) => {
    res.success(messageKey, data, 201, params);
  };

  // Método para respuestas de actualización exitosa
  res.updated = (messageKey, data = {}, params = {}) => {
    res.success(messageKey, data, 200, params);
  };

  // Método para respuestas de eliminación exitosa
  res.deleted = (messageKey, data = {}, params = {}) => {
    res.success(messageKey, data, 200, params);
  };

  // Método para respuestas de recurso no encontrado
  res.notFound = (messageKey = 'common.not_found', params = {}) => {
    res.error(messageKey, 404, {}, params);
  };

  // Método para respuestas de acceso denegado
  res.forbidden = (messageKey = 'common.forbidden', params = {}) => {
    res.error(messageKey, 403, {}, params);
  };

  // Método para respuestas de no autorizado
  res.unauthorized = (messageKey = 'common.unauthorized', params = {}) => {
    res.error(messageKey, 401, {}, params);
  };

  // Método para respuestas de conflicto
  res.conflict = (messageKey, details = {}, params = {}) => {
    res.error(messageKey, 409, details, params);
  };

  // Método para respuestas de error interno del servidor
  res.serverError = (messageKey = 'common.server_error', details = {}, params = {}) => {
    res.error(messageKey, 500, details, params);
  };

  next();
};

module.exports = {
  responseFormatter
}; 