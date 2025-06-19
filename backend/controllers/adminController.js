console.log('=== ADMIN CONTROLLER CARGADO ===');
const admin = require('../config/firebase');
const { userModel, petModel } = require('../models/adapter');

// Acción masiva para gestionar múltiples usuarios
exports.bulkAction = async (req, res) => {
  try {
    const { userIds, action } = req.body;
    
    if (!userIds || !Array.isArray(userIds) || userIds.length === 0) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "admin.validation.failed"}], "admin.validation.error", { error: 'Se requiere una lista válida de IDs de usuario' });
    }
    
    if (!action) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "admin.validation.failed"}], "admin.validation.error", { error: 'Se requiere especificar una acción' });
    }
    
    let results = [];
    let errors = [];
    
    // Diferentes acciones posibles
    switch (action) {
      case 'delete':
        // Eliminar usuarios en lote
        for (const userId of userIds) {
          try {
            // Eliminar de Firebase Auth
            await admin.auth().deleteUser(userId);
            
            results.push({ userId, status: 'success' });
          } catch (error) {
            errors.push({ userId, error: error.message });
          }
        }
        break;
        
      case 'disable':
        // Deshabilitar usuarios en lote
        for (const userId of userIds) {
          try {
            await admin.auth().updateUser(userId, { disabled: true });
            results.push({ userId, status: 'success' });
          } catch (error) {
            errors.push({ userId, error: error.message });
          }
        }
        break;
        
      case 'enable':
        // Habilitar usuarios en lote
        for (const userId of userIds) {
          try {
            await admin.auth().updateUser(userId, { disabled: false });
            results.push({ userId, status: 'success' });
          } catch (error) {
            errors.push({ userId, error: error.message });
          }
        }
        break;
        
      case 'changeRole':
        // Cambiar rol de usuarios en lote
        const { role } = req.body;
        if (!role) {
          return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "admin.validation.failed"}], "admin.validation.error", { error: 'Se requiere especificar un rol' });
        }
        
        for (const userId of userIds) {
          try {
            // Establecer custom claim para el rol
            await admin.auth().setCustomUserClaims(userId, { role });
            
            results.push({ userId, status: 'success' });
          } catch (error) {
            errors.push({ userId, error: error.message });
          }
        }
        break;
        
      case 'forceLogout':
        // Forzar cierre de sesión para usuarios en lote
        for (const userId of userIds) {
          try {
            await admin.auth().revokeRefreshTokens(userId);
            results.push({ userId, status: 'success' });
          } catch (error) {
            errors.push({ userId, error: error.message });
          }
        }
        break;
        
      default:
        return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "admin.validation.failed"}], "admin.validation.error", { error: 'Acción no soportada' });
    }
    
    res.apiSuccess({
      message: `Acción "${action}" completada para ${results.length} usuarios con ${errors.length} errores`,
      results,
      errors
    });
  } catch (err) {
    console.error('Error en acción masiva:', err);
    res.apiServerError({ 
      error: 'Error en acción masiva', 
      details: err.message 
    });
  }
};

// Invitar a un nuevo usuario (generar link de invitación)
exports.inviteUser = async (req, res) => {
  try {
    const { email, role } = req.body;
    
    if (!email) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "admin.validation.failed"}], "admin.validation.error", { error: 'Se requiere un correo electrónico' });
    }
    
    // Generar un link de invitación con Firebase Auth
    const actionCodeSettings = {
      url: `${process.env.FRONTEND_URL}/complete-signup?email=${email}&role=${role || 'user'}`,
      handleCodeInApp: true
    };
    
    const link = await admin.auth().generateSignInWithEmailLink(email, actionCodeSettings);
    
    // Aquí podrías implementar lógica para enviar el correo electrónico con el link
    // O devolver el link para que el frontend lo maneje
    
    res.apiSuccess({ 
      message: 'Invitación generada correctamente',
      invitationLink: link
    });
  } catch (err) {
    console.error('Error al generar invitación:', err);
    res.apiServerError({ 
      error: 'Error al generar invitación', 
      details: err.message 
    });
  }
};

// Modificar la función getAllUsers existente para mejorar el filtrado
exports.getAllUsers = async (req, res) => {
  console.log('[DEBUG] Entró a adminController.getAllUsers');
  try {
    const filters = {
      name: req.query.name ? req.query.name.toString() : undefined,
      email: req.query.email ? req.query.email.toString() : undefined,
      role: req.query.role ? req.query.role.toString() : undefined,
      status: req.query.status ? req.query.status.toString() : undefined,
      startDate: req.query.startDate ? req.query.startDate.toString() : undefined,
      endDate: req.query.endDate ? req.query.endDate.toString() : undefined,
      lastLoginStart: req.query.lastLoginStart ? req.query.lastLoginStart.toString() : undefined,
      lastLoginEnd: req.query.lastLoginEnd ? req.query.lastLoginEnd.toString() : undefined,
      origin: req.query.origin ? req.query.origin.toString() : undefined
    };
    Object.keys(filters).forEach(key => filters[key] === undefined && delete filters[key]);
    // Multitenancy: filter by organizationId unless super admin
    if (!req.user.isSuperAdmin && req.organizationId) {
      filters.organizationId = req.organizationId;
    }
    console.log('[DEBUG] Antes de llamar a userModel.getUsers', filters);
    let users;
    try {
      users = await userModel.getUsers(filters);
      console.log('[DEBUG] userModel.getUsers respondió', { usersCount: users ? users.length : null });
    } catch (err) {
        console.error('Error al recuperar usuarios:', err);
        return res.apiServerError({ 
          error: 'Error al recuperar usuarios', 
          details: err.message 
        });
      }

      // Si hay usuarios, obtener información adicional desde Firebase Auth
    /*
      if (users.length > 0) {
        try {
          const userIds = users.map(user => user.id).filter(id => id); // Filtrar IDs nulos o indefinidos
        console.log('[DEBUG] UIDs a consultar en Firebase Auth:', userIds);
          if (userIds.length > 0) {
          // Timeout de 2 segundos para la llamada a getUsers
          const getUsersPromise = admin.auth().getUsers(userIds.map(uid => ({ uid })));
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout Firebase Auth getUsers')), 2000));
          let authUsers;
          try {
            authUsers = await Promise.race([getUsersPromise, timeoutPromise]);
            console.log('[DEBUG] Respuesta de Firebase Auth:', authUsers);
          } catch (firebaseError) {
            console.warn('[WARN] Error o timeout en getUsers de Firebase Auth:', firebaseError);
            // Devolver usuarios sin enriquecer
            return res.apiSuccess(users);
          }
            // Crear un mapa para búsqueda rápida
            const authUserMap = new Map();
            authUsers.users.forEach(user => {
              authUserMap.set(user.uid, user);
            });
            // Enriquecer datos de usuarios con información de auth
            users = users.map(user => {
              const authUser = user.id ? authUserMap.get(user.id) : null;
              return {
                ...user,
                status: authUser ? (authUser.disabled ? 'disabled' : 'active') : user.status || 'active',
                emailVerified: authUser ? authUser.emailVerified : false,
                lastLoginAt: authUser ? authUser.metadata.lastSignInTime : null,
                creationTime: authUser ? authUser.metadata.creationTime : user.createdAt,
                providerData: authUser ? authUser.providerData : [],
                origin: authUser && authUser.providerData.length > 0 ? 
                  authUser.providerData[0].providerId : 'email'
              };
            });
          }
        } catch (authError) {
          console.error('Error al obtener información de autenticación:', authError);
        // No fallamos la solicitud completa, simplemente continuamos con los datos de base
      }
    }
    */

      // Aplicar filtros adicionales que no se pueden hacer en la consulta de Firestore
      
      // Filtrar por fecha de creación
      if (filters.startDate && filters.endDate) {
        const startDate = new Date(filters.startDate);
        const endDate = new Date(filters.endDate);
        users = users.filter(user => {
          const createdAt = user.createdAt && user.createdAt.toDate ? 
            user.createdAt.toDate() : new Date(user.creationTime || user.createdAt);
          return createdAt >= startDate && createdAt <= endDate;
        });
      }
      
      // Filtrar por último inicio de sesión
      if (filters.lastLoginStart && filters.lastLoginEnd) {
        const startDate = new Date(filters.lastLoginStart);
        const endDate = new Date(filters.lastLoginEnd);
        users = users.filter(user => {
          const lastLogin = user.lastLoginAt ? new Date(user.lastLoginAt) : null;
          // Si no hay fecha de último inicio, se omite en el filtro
          return lastLogin ? (lastLogin >= startDate && lastLogin <= endDate) : false;
        });
      }
      
      // Filtrar por origen de registro (providerId)
      if (filters.origin) {
        users = users.filter(user => {
          if (!user.providerData || user.providerData.length === 0) {
            return filters.origin === 'email';
          }
          return user.providerData.some(provider => 
            provider.providerId.includes(filters.origin)
          );
        });
      }

      // Sanitizar datos de usuario y enviar respuesta
      const sanitizedUsers = users.map(user => ({
        id: user.id || user.email, // Fallback a email si no hay id
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        status: user.status || 'active',
        emailVerified: user.emailVerified || false,
        lastLoginAt: user.lastLoginAt || null,
        createdAt: user.createdAt || user.creationTime,
        updatedAt: user.updatedAt,
        origin: user.origin || 'email',
        isBlocked: user.blockedUsers ? false : user.isBlocked || false,
        // No enviar datos sensibles como tokens, hashes, etc.
      }));

      res.apiSuccess(sanitizedUsers);
  } catch (err) {
    console.error('Error inesperado en getAllUsers:', err);
    res.apiServerError({ 
      error: 'Error inesperado', 
      details: err.message 
    });
  }
};

// Obtener todos los pets para administración
exports.getAllPets = async (req, res) => {
  try {
    // Extraer filtros de los parámetros de la consulta
    const filters = {
      name: req.query.name ? req.query.name.toString() : undefined,
      type: req.query.type ? req.query.type.toString() : undefined,
      status: req.query.status ? req.query.status.toString() : undefined,
      startDate: req.query.startDate ? req.query.startDate.toString() : undefined,
      endDate: req.query.endDate ? req.query.endDate.toString() : undefined,
    };
    Object.keys(filters).forEach(key => filters[key] === undefined && delete filters[key]);
    // Refactor: usar async/await en vez de callback
    let pets;
    try {
      pets = await new Promise((resolve, reject) => {
        petModel.getPets((err, pets) => {
          if (err) reject(err);
          else resolve(pets);
        });
      });
    } catch (err) {
        console.error('Error al recuperar mascotas:', err);
        return res.apiServerError({ 
          error: 'Error al recuperar mascotas', 
          details: err.message 
        });
      }
      // Sanitizar datos y enviar respuesta
      const sanitizedPets = pets.map(pet => ({
        id: pet.id,
        name: pet.name,
        type: pet.type,
        breed: pet.breed,
        age: pet.age,
        ownerId: pet.ownerId,
        status: pet.status || 'active',
        createdAt: pet.createdAt,
        updatedAt: pet.updatedAt,
      }));
      res.apiSuccess(sanitizedPets);
  } catch (err) {
    console.error('Error inesperado en getAllPets:', err);
    res.apiServerError({ 
      error: 'Error inesperado', 
      details: err.message 
    });
  }
};

// Actualizar pet (para moderadores y administradores)
exports.updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const petData = req.body;
    // Verificar que el usuario tiene permisos
    if (req.user.role !== 'admin' && req.user.role !== 'moderator') {
      return res.apiForbidden({ error: 'No tienes permiso para realizar esta acción' });
    }
    // Refactor: usar async/await en vez de callback
    let updatedPet;
    try {
      updatedPet = await new Promise((resolve, reject) => {
        petModel.updatePet(id, petData, (err, pet) => {
          if (err) reject(err);
          else resolve(pet);
        });
      });
    } catch (err) {
        console.error('Error al actualizar mascota:', err);
        return res.apiServerError({ 
          error: 'Error al actualizar mascota', 
          details: err.message 
        });
      }
      res.apiSuccess(updatedPet);
  } catch (err) {
    console.error('Error inesperado en updatePet:', err);
    res.apiServerError({ 
      error: 'Error inesperado', 
      details: err.message 
    });
  }
};

// Actualizar usuario (versión admin, con capacidades extendidas)
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    // Multitenancy: ensure user belongs to org unless super admin
    if (!req.user.isSuperAdmin && req.organizationId) {
      const user = await userModel.getUserById(id);
      if (!user || user.organizationId !== req.organizationId) {
        return res.apiForbidden({ error: 'No permission to update user in this organization' });
    }
    }
    // Si se está cambiando el rol, verificar que sea admin
    if (updates.role && req.user.role !== 'admin') {
      return res.apiForbidden({ error: 'Solo los administradores pueden cambiar roles' });
    }
    // Actualizar en Firebase Auth si es necesario
    if (updates.disabled !== undefined) {
      try {
        await admin.auth().updateUser(id, { disabled: updates.disabled });
      } catch (authError) {
        console.error('Error al actualizar estado en Firebase Auth:', authError);
        // No fallamos la solicitud completa, continuamos con la actualización en Firestore
      }
    }
    // Refactor: usar async/await en vez de callback
    let updatedUser;
    try {
      updatedUser = await userModel.updateUser(id, updates);
    } catch (err) {
        console.error('Error al actualizar usuario:', err);
        return res.apiServerError({ 
          error: 'Error al actualizar usuario', 
          details: err.message 
        });
      }
      res.apiSuccess(updatedUser);
  } catch (err) {
    console.error('Error inesperado en updateUser:', err);
    res.apiServerError({ 
      error: 'Error inesperado', 
      details: err.message 
    });
  }
};

// Eliminar usuario (versión admin)
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Multitenancy: ensure user belongs to org unless super admin
    if (!req.user.isSuperAdmin && req.organizationId) {
      const user = await userModel.getUserById(id);
      if (!user || user.organizationId !== req.organizationId) {
        return res.apiForbidden({ error: 'No permission to delete user in this organization' });
    }
    }
    // Eliminar de Firebase Auth
    try {
      await admin.auth().deleteUser(id);
    } catch (authError) {
      console.error('Error al eliminar usuario de Firebase Auth:', authError);
      // No fallamos la solicitud completa, continuamos con la eliminación en Firestore
    }
    // Refactor: usar async/await en vez de callback
    let result;
    try {
      result = await userModel.deleteUser(id);
    } catch (err) {
        console.error('Error al eliminar usuario:', err);
        return res.apiServerError({ 
          error: 'Error al eliminar usuario', 
          details: err.message 
        });
      }
      res.apiSuccess(result);
  } catch (err) {
    console.error('Error inesperado en deleteUser:', err);
    res.apiServerError({ 
      error: 'Error inesperado', 
      details: err.message 
    });
  }
};

// Actualizar rol de usuario (solo para admin)
exports.updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    // Multitenancy: ensure user belongs to org unless super admin
    if (!req.user.isSuperAdmin && req.organizationId) {
      const user = await userModel.getUserById(id);
      if (!user || user.organizationId !== req.organizationId) {
        return res.apiForbidden({ error: 'No permission to update user role in this organization' });
      }
    }
    if (!role) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "admin.validation.failed"}], "admin.validation.error", { error: 'Se requiere especificar un rol' });
    }
    // Actualizar custom claims en Firebase Auth
    try {
      await admin.auth().setCustomUserClaims(id, { role });
    } catch (authError) {
      console.error('Error al actualizar claims en Firebase Auth:', authError);
      return res.apiServerError({ 
        error: 'Error al actualizar rol en autenticación', 
        details: authError.message 
      });
    }
    // Refactor: usar async/await en vez de callback
    let updatedUser;
    try {
      updatedUser = await userModel.updateUser(id, { role });
    } catch (err) {
        console.error('Error al actualizar rol en base de datos:', err);
        return res.apiServerError({ 
          error: 'Error al actualizar rol en base de datos', 
          details: err.message 
        });
      }
      res.apiSuccess({
        message: `Rol actualizado correctamente a "${role}" para el usuario ${id}`,
        user: updatedUser
    });
  } catch (err) {
    console.error('Error inesperado en updateUserRole:', err);
    res.apiServerError({ 
      error: 'Error inesperado', 
      details: err.message 
    });
  }
};

// Create user (admin only)
exports.createUser = async (req, res) => {
  try {
    const { email, password, role, name } = req.body;
    if (!email || !password) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "admin.validation.failed"}], "admin.validation.error", { error: 'Email and password are required' });
    }
    // Create user in Firebase Auth
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name
    });
    // Set custom claims for role
    await admin.auth().setCustomUserClaims(userRecord.uid, { role: role || 'user' });
    // Create user in Firestore
    const userData = {
      id: userRecord.uid,
      email,
      name,
      role: role || 'user',
      createdAt: new Date().toISOString()
    };
    // Multitenancy: set organizationId if present
    if (req.organizationId) {
      userData.organizationId = req.organizationId;
    }
    // Refactor: usar async/await en vez de callback
    try {
      await userModel.createUser(userData);
    } catch (err) {
      console.error('Error al crear usuario en base de datos:', err);
      return res.apiServerError({
        error: 'Error al crear usuario en base de datos',
        details: err.message
      });
    }
    res.apiCreated({
      message: 'User created successfully',
      user: userData
    });
  } catch (err) {
    console.error('Error creating user:', err);
    res.apiServerError({
      error: 'Error creating user',
      details: err.message
    });
  }
};