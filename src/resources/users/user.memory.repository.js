const User = require('./user.model');

const getAll = async () => {
  return await User.find({}, '-password').exec();
};

const get = async id => {
  return await User.findById(id, '-password').exec();
};

const getByLogin = async login => {
  return await User.findOne({ login }).exec();
};

const put = async (id, put_data) => {
  return await User.findByIdAndUpdate(id, put_data).exec();
};

const post = async post_data => {
  return await User.create(post_data);
};

const user_delete = async id => {
  return await User.findByIdAndDelete(id).exec();
};

module.exports = { getAll, get, post, put, user_delete, getByLogin };
