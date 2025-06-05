const { userModel, organizationModel, membershipModel } = require('../models/adapter');
const { i18nManager } = require('../utils/i18n');

/**
 * Obtener las preferencias de idioma del usuario actual
 */
exports.getUserLanguagePreference = async (req, res) => {
  try {
    const userId = req.user.uid;
    
    const user = await userModel.getUserById(userId);
    
    if (!user) {
      return res.notFound('users.not_found');
    }
    
    res.data({
      userId: user.id,
      preferredLanguage: user.preferredLanguage || 'en',
      availableLanguages: i18nManager.getSupportedLanguages()
    });
    
  } catch (error) {
    console.error('Error getting user language preference:', error);
    res.serverError('users.error_retrieving', { error: error.message });
  }
};

/**
 * Actualizar las preferencias de idioma del usuario actual
 */
exports.updateUserLanguagePreference = async (req, res) => {
  try {
    const userId = req.user.uid;
    const { preferredLanguage } = req.body;
    
    // Validar que el idioma esté soportado
    if (!i18nManager.isLanguageSupported(preferredLanguage)) {
      return res.error('validation.invalid_language', 400, {
        availableLanguages: i18nManager.getSupportedLanguages()
      });
    }
    
    // Actualizar preferencia del usuario
    const updatedUser = await userModel.updateUser(userId, {
      preferredLanguage
    });
    
    res.updated('users.preference_updated', {
      userId: updatedUser.id,
      preferredLanguage: updatedUser.preferredLanguage
    });
    
  } catch (error) {
    console.error('Error updating user language preference:', error);
    res.serverError('users.error_updating', { error: error.message });
  }
};

/**
 * Obtener las preferencias de idioma de una organización
 */
exports.getOrganizationLanguagePreference = async (req, res) => {
  try {
    const { organizationId } = req.params;
    
    // Verificar permisos: Super admin, o admin de la organización
    if (!req.user.isSuperAdmin) {
      if (req.organizationId && organizationId !== req.organizationId) {
        return res.forbidden('organizations.forbidden_access_outside_context');
      }
      
      // Verificar si es admin de la organización
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
      if (!isAdmin) {
        return res.forbidden('organizations.forbidden_admin_only');
      }
    }
    
    const organization = await organizationModel.getOrganizationById(organizationId);
    
    if (!organization) {
      return res.notFound('organizations.not_found');
    }
    
    res.data({
      organizationId: organization.id,
      name: organization.name,
      defaultLanguage: organization.defaultLanguage || 'en',
      availableLanguages: i18nManager.getSupportedLanguages()
    });
    
  } catch (error) {
    console.error('Error getting organization language preference:', error);
    res.serverError('organizations.error_retrieving', { error: error.message });
  }
};

/**
 * Actualizar las preferencias de idioma de una organización
 */
exports.updateOrganizationLanguagePreference = async (req, res) => {
  try {
    const { organizationId } = req.params;
    const { defaultLanguage } = req.body;
    
    // Validar que el idioma esté soportado
    if (!i18nManager.isLanguageSupported(defaultLanguage)) {
      return res.error('validation.invalid_language', 400, {
        availableLanguages: i18nManager.getSupportedLanguages()
      });
    }
    
    // Verificar permisos: Super admin, o admin de la organización
    if (!req.user.isSuperAdmin) {
      if (req.organizationId && organizationId !== req.organizationId) {
        return res.forbidden('organizations.forbidden_access_outside_context');
      }
      
      // Verificar si es admin de la organización
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
      if (!isAdmin) {
        return res.forbidden('organizations.forbidden_admin_only');
      }
    }
    
    // Actualizar preferencia de la organización
    const updatedOrganization = await organizationModel.updateOrganization(organizationId, {
      defaultLanguage
    });
    
    res.updated('organizations.language_preference_updated', {
      organizationId: updatedOrganization.id,
      name: updatedOrganization.name,
      defaultLanguage: updatedOrganization.defaultLanguage
    });
    
  } catch (error) {
    console.error('Error updating organization language preference:', error);
    res.serverError('organizations.error_updating', { error: error.message });
  }
};

/**
 * Obtener información sobre idiomas soportados
 */
exports.getSupportedLanguages = async (req, res) => {
  try {
    const supportedLanguages = i18nManager.getSupportedLanguages();
    const languageInfo = {};
    
    // Obtener información detallada de cada idioma
    for (const lang of supportedLanguages) {
      languageInfo[lang] = {
        code: lang,
        name: req.t(`common.language_${lang}`),
        nativeName: req.translate(`common.language_${lang}`, lang)
      };
    }
    
    res.data({
      supportedLanguages,
      defaultLanguage: 'en',
      currentLanguage: req.language,
      languageSource: req.languageSource,
      languages: languageInfo
    });
    
  } catch (error) {
    console.error('Error getting supported languages:', error);
    res.serverError('common.error_retrieving_languages', { error: error.message });
  }
};

/**
 * Obtener estadísticas de uso de idiomas (solo para admins)
 */
exports.getLanguageStatistics = async (req, res) => {
  try {
    // Solo admins pueden ver estadísticas
    if (req.user.role !== 'admin' && !req.user.isSuperAdmin) {
      return res.forbidden('errors.permission_denied');
    }
    
    // Para esta implementación, creamos estadísticas básicas
    // En el futuro se puede expandir con consultas más complejas
    const stats = {
      totalUsers: 0,
      languageDistribution: {
        en: 0,
        es: 0
      },
      organizationLanguages: {
        en: 0,
        es: 0
      }
    };
    
    // Aquí se podrían agregar consultas reales a la base de datos
    // Por ahora devolvemos estadísticas placeholder
    
    res.data({
      statistics: stats,
      generatedAt: new Date().toISOString(),
      supportedLanguages: i18nManager.getSupportedLanguages()
    });
    
  } catch (error) {
    console.error('Error getting language statistics:', error);
    res.serverError('admin.error_retrieving_statistics', { error: error.message });
  }
}; 