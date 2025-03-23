// middlewares/permissions.js
const membershipModel = require('../models/membershipModel');

// Middleware para verificar si un usuario tiene un permiso específico en una organización
exports.hasPermission = (permission) => {
  return (req, res, next) => {
    const organizationId = req.params.orgId || req.body.organizationId;
    
    if (!organizationId) {
      return res.status(400).json({ error: 'Organization ID is required' });
    }
    
    membershipModel.getMembershipByUserAndOrg(req.user.uid, organizationId, (err, membership) => {
      if (err || !membership) {
        return res.status(403).json({ error: 'Unauthorized: You are not a member of this organization' });
      }
      
      // Admin tiene todos los permisos
      if (membership.role === 'admin' || membership.permissions.includes('all')) {
        return next();
      }
      
      // Verificar permiso específico
      if (membership.permissions.includes(permission)) {
        return next();
      }
      
      return res.status(403).json({ error: `Unauthorized: You don't have ${permission} permission` });
    });
  };
};