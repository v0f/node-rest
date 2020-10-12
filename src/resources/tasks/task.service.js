const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const get = id => tasksRepo.get(id);
const post = post_data => tasksRepo.post(post_data);
const put = (id, put_data) => tasksRepo.put(id, put_data);
const task_delete = id => tasksRepo.task_delete(id);

module.exports = { getAll, get, post, put, task_delete };
