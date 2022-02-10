const express = require('express');
const router = express.Router();
const boardsCtrl = require('../../controllers/api/boards');

// POST /api/boards/board/items - we don't need the ID since we're sending the entire object
router.post('/board/items', boardsCtrl.addToBoard);

// GET /api/boards/board/items/:id
router.get('/board/items/:id', boardsCtrl.findItemInBoard)

// DELETE /api/boards/board/:id
router.delete('/board/items/:id', boardsCtrl.deleteItemFromBoard)

// GET /api/boards/board/items
router.get('/board/items', boardsCtrl.indexItems)


module.exports = router;