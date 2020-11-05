const router = require('express').Router();
const loginService = require('./login.service');
const asyncHandler = require('express-async-handler');

router.route('/').post(
  asyncHandler(async (req, res) => {
    const { login, password } = req.body;
    const token = await loginService.auth({ login, password });
    if (token) {
      res.json({ token });
    } else {
      res.status(401).send('auth err');
    }
  })
);

module.exports = router;
