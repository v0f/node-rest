const Task = require('./task.model');

const getAll = async () => {
  return await Task.find({}).exec();
};

const get = async id => {
  return await Task.findById(id).exec();
};

const put = async (id, put_data) => {
  return await Task.findByIdAndUpdate(id, put_data).exec();
};

const post = async post_data => {
  return await Task.create(post_data);
};

const task_delete = async id => {
  return await Task.findByIdAndDelete(id).exec();
};

const unassign_user_tasks = async user_id => {
  return await Task.updateMany({ user: { _id: user_id } }, { user: null });
};

const delete_tasks_by_board = async board_id => {
  return await Task.deleteMany({ board: { _id: board_id } });
};

module.exports = {
  getAll,
  get,
  post,
  put,
  task_delete,
  unassign_user_tasks,
  delete_tasks_by_board
};
