// middlewares/organizationContext.js
// Middleware to extract organization context from request headers and enforce multitenancy

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Middleware to extract organization context and validate membership.
 * - Reads X-Organization-Id from headers
 * - If user is super admin, allows all
 * - If not, checks that user is a member of the organization
 * - Attaches organizationId to req.organizationId
 */
module.exports = async function organizationContext(req, res, next) {
  console.log('[orgContext] req.user:', req.user);
  console.log('[orgContext] headers:', req.headers);
  try {
    // Permitir rutas públicas de auth sin requerir autenticación
    if (req.path.startsWith('/auth') || req.path.startsWith('/api/auth')) {
      return next();
    }
    // Extract org ID from header
    const orgId = req.header('X-Organization-Id');
    req.organizationId = orgId || null;

    // Assume req.user is set by auth middleware
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    // Super admin can access any org
    if (user.isSuperAdmin) {
      return next();
    }

    // If no org context, allow only if endpoint is public or user-specific (handled elsewhere)
    if (!orgId) {
      return next();
    }

    // Check membership
    const membership = await prisma.membership.findUnique({
      where: {
        userId_organizationId: {
          userId: user.uid,
          organizationId: orgId
        }
      }
    });
    if (!membership) {
      return res.status(403).json({ error: 'You are not a member of this organization' });
    }

    // Attach org context to request
    req.organizationId = orgId;
    next();
  } catch (err) {
    console.error('Organization context middleware error:', err);
    res.status(500).json({ error: 'Internal server error (organization context)' });
  }
}; 