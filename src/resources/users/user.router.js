const router = require('express').Router();
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users);
});

router.route('/').post(async (req, res) => {
  const user = await usersService.post(req.body);
  res.json(user);
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  res.json(user);
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.put(req.params.id, req.body);
  res.json(user);
});

router.route('/:id').delete(async (req, res) => {
  await usersService.user_delete(req.params.id);
  res.json(req.params.id);
});

module.exports = router;
