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
  // console.log('board: ', board) // It is finding the board
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


// async function findItemInBoard(req, res) {
//   const itemDb = await Item.find({ apiID: req.params.id })
//   console.log('item: ', itemDb) // It is finding the item
//   const board = await Board.getBoard(req.user._id);
//   console.log('board: ', board) // It is finding the board
//   const boardItem = await board.items.find(item => item.equals(itemDb._id));
//   console.log('boardItem ', boardItem) // This is returning undefined
//   res.json(boardItem)
// }
