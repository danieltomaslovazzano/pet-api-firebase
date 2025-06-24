// middlewares/role.js
function checkRoles(allowedRoles) {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      return res.apiForbidden('Forbidden: insufficient privileges');
    }
    next();
  };
}

module.exports = { checkRoles };
