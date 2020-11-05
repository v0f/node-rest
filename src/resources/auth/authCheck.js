const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { JWT_SECRET_KEY } = require('../../common/config');

module.exports = asyncHandler(async (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (authHeader) {
    const [type, token] = authHeader.split(' ');
    if (type === 'Bearer' && jwt.verify(token, JWT_SECRET_KEY)) {
      return next();
    }
  }
  res.status(401).send('not authorized');
});
