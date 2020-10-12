const db = require('../../common/db');
const _ = require('lodash');
const Task = require('./task.model');

const getAll = async () => {
  return db.Tasks;
};

const get = async id => {
  const task = _.find(db.Tasks, ['id', id]);
  return task;
};

const put = async (id, put_data) => {
  const task = _.find(db.Tasks, ['id', id]);
  _.assign(task, put_data);
  return task;
};

const post = async post_data => {
  const task = new Task(post_data);
  db.Tasks.push(task);
  return task;
};

const task_delete = async id => {
  const [deleted_task] = _.remove(db.Tasks, e => e.id === id);
  return deleted_task ? deleted_task.id : '';
};

const unassign_user_tasks = async user_id => {
  const user_tasks = _.filter(db.Tasks, ['userId', user_id]);
  user_tasks.map(t => _.assign(t, { userId: null }));
};

module.exports = { getAll, get, post, put, task_delete, unassign_user_tasks };
