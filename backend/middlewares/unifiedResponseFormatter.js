/**
 * Unified Response Formatter Middleware
 * 
 * Provee métodos estandarizados para todas las respuestas de la API.
 * Garantiza consistencia y predictibilidad en el formato de respuesta.
 * 
 * Formato estándar:
 * {
 *   "success": boolean,
 *   "message": string (opcional),
 *   "data": any,
 *   "meta": {
 *     "language": string,
 *     "timestamp": string,
 *     "pagination": object (opcional),
 *     "requestId": string (opcional)
 *   },
 *   "errors": array (solo en errores)
 * }
 */

// Función de fallback para traducción cuando req.t no está disponible
const fallbackTranslate = (key, params = {}) => {
  // En desarrollo, devolver la clave con parámetros para debug
  if (process.env.NODE_ENV === 'development') {
    return Object.keys(params).length > 0 
      ? `${key} (${JSON.stringify(params)})`
      : key;
  }
  
  // En producción, devolver mensaje genérico
  const messages = {
    // Auth Register
    'auth.register.success': 'User registered successfully',
    'auth.register.validation_failed': 'Registration validation failed',
    'auth.register.email_exists': 'Email already registered',
    'auth.register.firebase_error': 'Registration error',
    'auth.register.internal_error': 'Internal registration error',
    
    // Auth Login
    'auth.login.success': 'Login successful',
    'auth.login.validation_failed': 'Login validation failed',
    'auth.login.invalid_credentials': 'Invalid credentials',
    'auth.login.user_not_found': 'User not found',
    'auth.login.authentication_failed': 'Authentication failed',
    'auth.login.internal_error': 'Internal login error',
    
    // Auth Email Verification
    'auth.verify_email.success': 'Email verified successfully',
    'auth.verify_email.validation_failed': 'Verification validation failed',
    'auth.verify_email.invalid_token': 'Invalid verification token',
    'auth.verify_email.expired_token': 'Expired verification token',
    'auth.verify_email.firebase_error': 'Verification error',
    'auth.verify_email.internal_error': 'Internal verification error',
    
    // Auth Password Reset
    'auth.password_reset.success': 'Password reset email sent',
    'auth.password_reset.validation_failed': 'Password reset validation failed',
    'auth.password_reset.email_not_found': 'Email not found',
    'auth.password_reset.firebase_error': 'Password reset error',
    'auth.password_reset.internal_error': 'Internal password reset error',
    
    // Auth Admin Functions
    'auth.force_logout.success': 'User logged out successfully',
    'auth.force_logout.insufficient_permissions': 'Insufficient permissions',
    'auth.force_logout.internal_error': 'Internal logout error',
    'auth.get_user_info.success': 'User info retrieved',
    'auth.get_user_info.insufficient_permissions': 'Insufficient permissions',
    'auth.get_user_info.internal_error': 'Internal user info error',
    'auth.update_user_status.success': 'User status updated',
    'auth.update_user_status.insufficient_permissions': 'Insufficient permissions',
    'auth.update_user_status.internal_error': 'Internal status update error',
    
    // Auth Logout
    'auth.logout.success': 'Logged out successfully',
    'auth.logout.token_missing': 'Token not provided',
    'auth.logout.invalid_token': 'Invalid token',
    'auth.logout.internal_error': 'Internal logout error',
    
    // Auth Refresh Token
    'auth.refresh_token.success': 'Token refreshed successfully',
    'auth.refresh_token.validation_failed': 'Refresh token validation failed',
    'auth.refresh_token.required': 'Refresh token is required',
    'auth.refresh_token.invalid_or_expired': 'Invalid or expired refresh token',
    'auth.refresh_token.internal_error': 'Internal refresh token error',
    
    // Common Field Validations
    'auth.email.required': 'Email is required',
    'auth.password.required': 'Password is required',
    'auth.name.required': 'Name is required',
    'auth.token.required': 'Token is required',
    'auth.email.invalid_format': 'Invalid email format',
    'auth.password.too_short': 'Password too short',
    'auth.password.weak': 'Password too weak',
    
    // Send Password Reset (separate method)
    'auth.send_password_reset.success': 'Recovery email sent',
    'auth.send_password_reset.validation_failed': 'Send password reset validation failed',
    'auth.send_password_reset.firebase_error': 'Send password reset error',
    
    // Common Messages
    'common.not_found': 'Resource not found',
    'common.unauthorized': 'Unauthorized access',
    'common.forbidden': 'Access forbidden',
    'common.server_error': 'Internal server error',
    'validation.failed': 'Validation failed'
  };
  
  return messages[key] || key;
};

const unifiedResponseFormatter = (req, res, next) => {
  
  // Asegurar que req.t existe
  if (!req.t) {
    req.t = fallbackTranslate;
  }

  /**
   * Método principal unificado para todas las respuestas exitosas
   * @param {any} data - Los datos a devolver
   * @param {object} options - Opciones adicionales
   * @param {string} options.message - Clave de traducción para mensaje
   * @param {object} options.messageParams - Parámetros para interpolación
   * @param {number} options.statusCode - Código de estado HTTP (default: 200)
   * @param {object} options.meta - Metadatos adicionales
   * @param {boolean} options.success - Si la operación fue exitosa (default: true)
   */
  res.apiResponse = (data, options = {}) => {
    const response = {
      success: options.success !== false,
      data
    };

    // Agregar mensaje si está presente
    if (options.message) {
      response.message = req.t(options.message, options.messageParams || {});
    }

    // Agregar metadatos
    response.meta = {
      language: req.language || 'en',
      timestamp: new Date().toISOString(),
      ...(options.meta && options.meta)
    };

    // Agregar información de debugging en desarrollo
    if (process.env.NODE_ENV === 'development') {
      response.meta.messageKey = options.message;
      if (req.requestId) {
        response.meta.requestId = req.requestId;
      }
    }

    res.status(options.statusCode || 200).json(response);
  };

  /**
   * Respuesta exitosa con mensaje
   * @param {any} data - Los datos a devolver
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiSuccess = (data, message = null, meta = {}, messageParams = {}) => {
    res.apiResponse(data, {
      message,
      messageParams,
      meta,
      statusCode: 200
    });
  };

  /**
   * Respuesta de recurso creado exitosamente
   * @param {any} data - Los datos del recurso creado
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiCreated = (data, message = 'common.created', meta = {}, messageParams = {}) => {
    res.apiResponse(data, {
      message,
      messageParams,
      meta,
      statusCode: 201
    });
  };

  /**
   * Respuesta de recurso actualizado exitosamente
   * @param {any} data - Los datos del recurso actualizado
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiUpdated = (data, message = 'common.updated', meta = {}, messageParams = {}) => {
    res.apiResponse(data, {
      message,
      messageParams,
      meta,
      statusCode: 200
    });
  };

  /**
   * Respuesta de eliminación exitosa
   * @param {any} data - Los datos de confirmación (opcional)
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiDeleted = (data = null, message = 'common.deleted', meta = {}, messageParams = {}) => {
    res.apiResponse(data, {
      message,
      messageParams,
      meta,
      statusCode: 200
    });
  };

  /**
   * Respuesta para listas con paginación
   * @param {array} items - Los elementos de la lista
   * @param {object} pagination - Información de paginación
   * @param {string} message - Clave de traducción para mensaje (opcional)
   * @param {object} meta - Metadatos adicionales
   */
  res.apiList = (items, pagination = {}, message = null, meta = {}) => {
    const responseData = Array.isArray(items) ? items : [];
    const responseMeta = {
      ...meta,
      ...(Object.keys(pagination).length && { pagination })
    };

    res.apiResponse(responseData, {
      message,
      meta: responseMeta,
      statusCode: 200
    });
  };

  /**
   * Respuesta de error unificada
   * @param {string} message - Clave de traducción para mensaje de error
   * @param {array} errors - Array de errores específicos
   * @param {number} statusCode - Código de estado HTTP
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiError = (message, errors = [], statusCode = 400, meta = {}, messageParams = {}) => {
    const response = {
      success: false,
      message: req.t(message, messageParams),
      meta: {
        language: req.language || 'en',
        timestamp: new Date().toISOString(),
        ...meta
      }
    };

    // Agregar errores específicos si existen
    if (errors.length > 0) {
      response.errors = errors.map(error => ({
        field: error.field,
        code: error.code,
        message: req.t(error.messageKey || error.message, error.params || {})
      }));
    }

    // Agregar información de debugging en desarrollo
    if (process.env.NODE_ENV === 'development') {
      response.meta.messageKey = message;
      if (req.requestId) {
        response.meta.requestId = req.requestId;
      }
    }

    res.status(statusCode).json(response);
  };

  /**
   * Respuesta de error de validación
   * @param {array} validationErrors - Array de errores de validación
   * @param {string} message - Clave de traducción para mensaje general
   * @param {object} meta - Metadatos adicionales
   */
  res.apiValidationError = (validationErrors, message = 'validation.failed', meta = {}) => {
    const formattedErrors = validationErrors.map(error => ({
      field: error.field,
      code: error.code || 'VALIDATION_ERROR',
      messageKey: error.messageKey || error.message,
      params: error.params || {}
    }));

    res.apiError(message, formattedErrors, 400, meta);
  };

  /**
   * Respuesta de recurso no encontrado
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiNotFound = (message = 'common.not_found', meta = {}, messageParams = {}) => {
    res.apiError(message, [], 404, meta, messageParams);
  };

  /**
   * Respuesta de acceso no autorizado
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiUnauthorized = (message = 'common.unauthorized', meta = {}, messageParams = {}) => {
    res.apiError(message, [], 401, meta, messageParams);
  };

  /**
   * Respuesta de acceso prohibido
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiForbidden = (message = 'common.forbidden', meta = {}, messageParams = {}) => {
    res.apiError(message, [], 403, meta, messageParams);
  };

  /**
   * Respuesta de conflicto (recurso ya existe, etc.)
   * @param {string} message - Clave de traducción para mensaje
   * @param {array} errors - Errores específicos del conflicto
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiConflict = (message = 'common.conflict', errors = [], meta = {}, messageParams = {}) => {
    res.apiError(message, errors, 409, meta, messageParams);
  };

  /**
   * Respuesta de error interno del servidor
   * @param {string} message - Clave de traducción para mensaje
   * @param {object} meta - Metadatos adicionales
   * @param {object} messageParams - Parámetros para interpolación
   */
  res.apiServerError = (message = 'common.server_error', meta = {}, messageParams = {}) => {
    res.apiError(message, [], 500, meta, messageParams);
  };

  next();
};

module.exports = {
  unifiedResponseFormatter
}; 