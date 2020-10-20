const router = require('express').Router();
const boardsService = require('./board.service');
const asyncHandler = require('express-async-handler');

router.route('/').get(
  asyncHandler(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
);

router.route('/').post(
  asyncHandler(async (req, res) => {
    const board = await boardsService.post(req.body);
    res.json(board);
  })
);

router.route('/:id').get(
  asyncHandler(async (req, res) => {
    const board = await boardsService.get(req.params.id);
    if (board) {
      res.json(board);
    } else {
      res.sendStatus(404);
    }
  })
);

router.route('/:id').put(
  asyncHandler(async (req, res) => {
    const board = await boardsService.put(req.params.id, req.body);
    res.json(board);
  })
);

router.route('/:id').delete(
  asyncHandler(async (req, res) => {
    const deleted_board_id = await boardsService.board_delete(req.params.id);
    if (deleted_board_id) {
      res.json(req.params.id);
    } else {
      res.sendStatus(404);
    }
  })
);

module.exports = router;
