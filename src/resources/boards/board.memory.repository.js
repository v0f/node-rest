const db = require('../../common/db');
const _ = require('lodash');
const Board = require('./board.model');

const getAll = async () => {
  return db.Boards;
};

const get = async id => {
  const board = _.find(db.Boards, ['id', id]);
  return board;
};

const put = async (id, put_data) => {
  const board = _.find(db.Boards, ['id', id]);
  _.assign(board, put_data);
  return board;
};

const post = async post_data => {
  const board = new Board(post_data);
  db.Boards.push(board);
  return board;
};

const board_delete = async id => {
  const [deleted_board] = _.remove(db.Boards, e => e.id === id);
  return deleted_board ? deleted_board.id : '';
};

module.exports = { getAll, get, post, put, board_delete };
