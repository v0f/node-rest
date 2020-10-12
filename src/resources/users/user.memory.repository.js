const db = require('../../common/db');
const _ = require('lodash');
const User = require('./user.model');

const getAll = async () => {
  return db.Users;
};

const get = async id => {
  const user = _.find(db.Users, ['id', id]);
  return _.omit(user, 'password');
};

const put = async (id, put_data) => {
  const user = _.find(db.Users, ['id', id]);
  _.assign(user, put_data);
  return _.omit(user, 'password');
};

const post = async post_data => {
  const user = new User(post_data);
  db.Users.push(user);
  return _.omit(user, 'password');
};

const user_delete = async id => {
  _.remove(db.Users, e => e.id === id);
};

module.exports = { getAll, get, post, put, user_delete };
