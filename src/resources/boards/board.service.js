const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const get = id => boardsRepo.get(id);
const post = post_data => boardsRepo.post(post_data);
const put = (id, put_data) => boardsRepo.put(id, put_data);
const board_delete = id => boardsRepo.board_delete(id);

module.exports = { getAll, get, post, put, board_delete };
