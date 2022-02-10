const Board = require('../../models/board');
const Item = require('../../models/item');

module.exports = {
  addToBoard,
  findItemInBoard,
  deleteItemFromBoard,
  indexItems
}

async function addToBoard(req, res) {
  // Find the board for this user. If it doesn't exist, create one
  const board = await Board.getBoard(req.user._id);
  await board.addItemToBoard(req.body);
  console.log(board);
  res.json(board);
}


async function findItemInBoard(req, res) {
  const board = await Board.getBoard(req.user._id);
  const itemDb = await board.findItemFromBoard(req.params.id)

  res.json(itemDb)
}


async function deleteItemFromBoard(req, res) {
  const board = await Board.getBoard(req.user._id);
  board.items.remove( {_id: req.params.id } )
  board.save();
  res.json(board);
}


async function indexItems(req, res) {
  const board = await Board.getBoard(req.user._id);
  const items = await board.getItemDetails()
  res.json(items)
}
