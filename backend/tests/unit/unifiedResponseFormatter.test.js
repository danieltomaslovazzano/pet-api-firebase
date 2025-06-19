const { unifiedResponseFormatter } = require('../../middlewares/unifiedResponseFormatter');

describe('Unified Response Formatter Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      t: jest.fn((key, params) => {
        if (params && Object.keys(params).length > 0) {
          return `translated_${key}_${JSON.stringify(params)}`;
        }
        return `translated_${key}`;
      }),
      language: 'en',
      requestId: 'test-request-123'
    };
    
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    
    next = jest.fn();
    
    // Mock environment
    process.env.NODE_ENV = 'test';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Middleware Setup', () => {
    test('should add all API response methods to res object', () => {
      unifiedResponseFormatter(req, res, next);
      
      expect(typeof res.apiResponse).toBe('function');
      expect(typeof res.apiSuccess).toBe('function');
      expect(typeof res.apiCreated).toBe('function');
      expect(typeof res.apiUpdated).toBe('function');
      expect(typeof res.apiDeleted).toBe('function');
      expect(typeof res.apiList).toBe('function');
      expect(typeof res.apiError).toBe('function');
      expect(typeof res.apiValidationError).toBe('function');
      expect(typeof res.apiNotFound).toBe('function');
      expect(typeof res.apiUnauthorized).toBe('function');
      expect(typeof res.apiForbidden).toBe('function');
      expect(typeof res.apiConflict).toBe('function');
      expect(typeof res.apiServerError).toBe('function');
      
      expect(next).toHaveBeenCalledTimes(1);
    });
  });

  describe('res.apiResponse - Core Method', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('should format basic successful response', () => {
      const testData = { id: 1, name: 'Test' };
      
      res.apiResponse(testData);
      
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: testData,
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should include message when provided', () => {
      const testData = { id: 1 };
      
      res.apiResponse(testData, { 
        message: 'common.success',
        messageParams: { entity: 'user' }
      });
      
      expect(req.t).toHaveBeenCalledWith('common.success', { entity: 'user' });
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'translated_common.success_{"entity":"user"}',
        data: testData,
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should include custom meta data', () => {
      const testData = { id: 1 };
      const customMeta = { customField: 'value' };
      
      res.apiResponse(testData, { 
        meta: customMeta,
        statusCode: 201
      });
      
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: testData,
        meta: {
          language: 'en',
          timestamp: expect.any(String),
          customField: 'value'
        }
      });
    });

    test('should handle null data', () => {
      res.apiResponse(null);
      
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: null,
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should default language to en when not provided', () => {
      req.language = undefined;
      
      res.apiResponse({ test: true });
      
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: { test: true },
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });
  });

  describe('res.apiSuccess', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('should format success response without message', () => {
      const testData = { result: 'success' };
      
      res.apiSuccess(testData);
      
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: testData,
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should format success response with message', () => {
      const testData = { result: 'success' };
      
      res.apiSuccess(testData, 'common.operation_successful');
      
      expect(req.t).toHaveBeenCalledWith('common.operation_successful', {});
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'translated_common.operation_successful',
        data: testData,
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });
  });

  describe('res.apiCreated', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('should format created response with default message', () => {
      const newResource = { id: 5, name: 'New Item' };
      
      res.apiCreated(newResource);
      
      expect(res.status).toHaveBeenCalledWith(201);
      expect(req.t).toHaveBeenCalledWith('common.created', {});
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'translated_common.created',
        data: newResource,
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should format created response with custom message', () => {
      const newResource = { id: 5, name: 'New Item' };
      
      res.apiCreated(newResource, 'pets.created', {}, { name: 'Fluffy' });
      
      expect(res.status).toHaveBeenCalledWith(201);
      expect(req.t).toHaveBeenCalledWith('pets.created', { name: 'Fluffy' });
    });
  });

  describe('res.apiList', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('should format list response without pagination', () => {
      const items = [{ id: 1 }, { id: 2 }];
      
      res.apiList(items);
      
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: items,
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should format list response with pagination', () => {
      const items = [{ id: 1 }, { id: 2 }];
      const pagination = {
        page: 1,
        limit: 10,
        total: 25,
        totalPages: 3
      };
      
      res.apiList(items, pagination);
      
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: items,
        meta: {
          language: 'en',
          timestamp: expect.any(String),
          pagination
        }
      });
    });

    test('should handle non-array input by converting to empty array', () => {
      res.apiList("not an array");
      
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: [],
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });
  });

  describe('res.apiError', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('should format basic error response', () => {
      res.apiError('common.error');
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(req.t).toHaveBeenCalledWith('common.error', {});
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'translated_common.error',
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should format error response with specific errors', () => {
      const errors = [
        { field: 'email', code: 'INVALID_FORMAT', messageKey: 'validation.email.invalid' },
        { field: 'name', code: 'REQUIRED', messageKey: 'validation.required' }
      ];
      
      res.apiError('validation.failed', errors, 422);
      
      expect(res.status).toHaveBeenCalledWith(422);
      expect(req.t).toHaveBeenCalledWith('validation.failed', {});
      expect(req.t).toHaveBeenCalledWith('validation.email.invalid', {});
      expect(req.t).toHaveBeenCalledWith('validation.required', {});
      
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'translated_validation.failed',
        errors: [
          {
            field: 'email',
            code: 'INVALID_FORMAT',
            message: 'translated_validation.email.invalid'
          },
          {
            field: 'name',
            code: 'REQUIRED',
            message: 'translated_validation.required'
          }
        ],
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should format error response with custom status code and meta', () => {
      const customMeta = { errorId: 'ERR_001' };
      
      res.apiError('common.server_error', [], 500, customMeta);
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'translated_common.server_error',
        meta: {
          language: 'en',
          timestamp: expect.any(String),
          errorId: 'ERR_001'
        }
      });
    });
  });

  describe('Convenience Error Methods', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('res.apiNotFound should return 404', () => {
      res.apiNotFound();
      
      expect(res.status).toHaveBeenCalledWith(404);
      expect(req.t).toHaveBeenCalledWith('common.not_found', {});
    });

    test('res.apiUnauthorized should return 401', () => {
      res.apiUnauthorized();
      
      expect(res.status).toHaveBeenCalledWith(401);
      expect(req.t).toHaveBeenCalledWith('common.unauthorized', {});
    });

    test('res.apiForbidden should return 403', () => {
      res.apiForbidden();
      
      expect(res.status).toHaveBeenCalledWith(403);
      expect(req.t).toHaveBeenCalledWith('common.forbidden', {});
    });

    test('res.apiConflict should return 409', () => {
      const errors = [{ field: 'email', code: 'ALREADY_EXISTS' }];
      res.apiConflict('common.conflict', errors);
      
      expect(res.status).toHaveBeenCalledWith(409);
      expect(req.t).toHaveBeenCalledWith('common.conflict', {});
    });

    test('res.apiServerError should return 500', () => {
      res.apiServerError();
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(req.t).toHaveBeenCalledWith('common.server_error', {});
    });
  });

  describe('res.apiValidationError', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('should format validation error response', () => {
      const validationErrors = [
        { field: 'email', code: 'INVALID_FORMAT', messageKey: 'validation.email.invalid' },
        { field: 'password', messageKey: 'validation.password.too_short', params: { min: 8 } }
      ];
      
      res.apiValidationError(validationErrors);
      
      expect(res.status).toHaveBeenCalledWith(400);
      expect(req.t).toHaveBeenCalledWith('validation.failed', {});
      expect(req.t).toHaveBeenCalledWith('validation.email.invalid', {});
      expect(req.t).toHaveBeenCalledWith('validation.password.too_short', { min: 8 });
      
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'translated_validation.failed',
        errors: [
          {
            field: 'email',
            code: 'INVALID_FORMAT',
            message: 'translated_validation.email.invalid'
          },
          {
            field: 'password',
            code: 'VALIDATION_ERROR',
            message: 'translated_validation.password.too_short_{"min":8}'
          }
        ],
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });
  });

  describe('Development Mode Features', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development';
      unifiedResponseFormatter(req, res, next);
    });

    test('should include debug info in development mode - success response', () => {
      res.apiSuccess({ test: true }, 'common.success');
      
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'translated_common.success',
        data: { test: true },
        meta: {
          language: 'en',
          timestamp: expect.any(String),
          messageKey: 'common.success',
          requestId: 'test-request-123'
        }
      });
    });

    test('should include debug info in development mode - error response', () => {
      res.apiError('common.error');
      
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'translated_common.error',
        meta: {
          language: 'en',
          timestamp: expect.any(String),
          messageKey: 'common.error',
          requestId: 'test-request-123'
        }
      });
    });
  });

  describe('Edge Cases', () => {
    beforeEach(() => {
      unifiedResponseFormatter(req, res, next);
    });

    test('should handle missing req.t function gracefully', () => {
      req.t = undefined;
      
      expect(() => {
        res.apiSuccess({ test: true }, 'common.success');
      }).toThrow();
    });

    test('should handle empty pagination object', () => {
      res.apiList([{ id: 1 }], {});
      
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: [{ id: 1 }],
        meta: {
          language: 'en',
          timestamp: expect.any(String)
        }
      });
    });

    test('should handle undefined message params', () => {
      res.apiResponse({ test: true }, { message: 'common.test' });
      
      expect(req.t).toHaveBeenCalledWith('common.test', {});
    });
  });
}); 