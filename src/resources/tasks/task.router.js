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

router.route('/:id').get(
  asyncHandler(async (req, res) => {
    const task = await tasksService.get(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.sendStatus(404);
    }
  })
);

router.route('/:id').put(
  asyncHandler(async (req, res) => {
    const task = await tasksService.put(
      req.params.id,
      _.merge(req.body, req.params)
    );
    res.json(task);
  })
);

router.route('/:id').delete(
  asyncHandler(async (req, res) => {
    const deleted_task_id = await tasksService.task_delete(req.params.id);
    if (deleted_task_id) {
      res.json(req.params.id);
    } else {
      res.sendStatus(404);
    }
  })
);

module.exports = router;
