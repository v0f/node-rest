const usersRepo = require('./../users/user.service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET_KEY } = require('./../../common/config');

const auth = async ({ login, password }) => {
  const user = await usersRepo.getByLogin(login);
  if (!user) {
    return null;
  }
  const passOk = bcrypt.compare(password, user.password);
  if (!passOk) {
    return null;
  }

  const token = jwt.sign({ id: user.id, login }, JWT_SECRET_KEY);
  return token;
};

module.exports = { auth };
