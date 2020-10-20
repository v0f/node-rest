const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const asyncHandler = require('express-async-handler');
const _ = require('lodash');

router.route('/').get(
  asyncHandler(async (req, res) => {
    const tasks = await tasksService.getAll();
    res.json(tasks);
  })
);

router.route('/').post(
  asyncHandler(async (req, res) => {
    const task = await tasksService.post(_.merge(req.body, req.params));
    res.json(task);
  })
);

router.route('/:tid').get(
  asyncHandler(async (req, res) => {
    const task = await tasksService.get(req.params.tid);
    if (task) {
      res.json(task);
    } else {
      res.sendStatus(404);
    }
  })
);

router.route('/:tid').put(
  asyncHandler(async (req, res) => {
    const task = await tasksService.put(
      req.params.tid,
      _.merge(req.body, req.params)
    );
    res.json(task);
  })
);

router.route('/:tid').delete(
  asyncHandler(async (req, res) => {
    const deleted_task_id = await tasksService.task_delete(req.params.tid);
    if (deleted_task_id) {
      res.json(req.params.tid);
    } else {
      res.sendStatus(404);
    }
  })
);

module.exports = router;
