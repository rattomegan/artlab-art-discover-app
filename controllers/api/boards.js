const Board = require('../../models/board');
const Item = require('../../models/item');

module.exports = {
  addToBoard,
}

async function addToBoard(req, res) {
  const board = await Board.getBoard(req.user._id);
  await board.addItemToBoard(req.body);
  console.log(board);
  res.json(board);
}
