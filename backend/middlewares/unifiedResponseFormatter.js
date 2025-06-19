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
const unifiedResponseFormatter = (req, res, next) => {
  
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