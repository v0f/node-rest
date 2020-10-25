const Board = require('./board.model');

const getAll = async () => {
  return await Board.find({}).exec();
};

const get = async id => {
  return await Board.findById(id).exec();
};

const put = async (id, put_data) => {
  return await Board.findByIdAndUpdate(id, put_data).exec();
};

const post = async post_data => {
  return await Board.create(post_data);
};

const board_delete = async id => {
  return await Board.findByIdAndDelete(id).exec();
};

module.exports = { getAll, get, post, put, board_delete };
