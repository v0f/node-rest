const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();
const get = id => usersRepo.get(id);
const post = post_data => usersRepo.post(post_data);
const put = (id, put_data) => usersRepo.put(id, put_data);

const user_delete = async id => {
  await usersRepo.user_delete(id);
  await tasksRepo.unassign_user_tasks(id);
};

module.exports = { getAll, get, post, put, user_delete };
