const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();
const get = id => boardsRepo.get(id);
const post = post_data => boardsRepo.post(post_data);
const put = (id, put_data) => boardsRepo.put(id, put_data);

const board_delete = async id => {
  const deleted_board = await boardsRepo.board_delete(id);
  if (deleted_board) {
    await tasksRepo.delete_tasks_by_board(deleted_board._id);
  }
  return deleted_board._id;
};

module.exports = { getAll, get, post, put, board_delete };
