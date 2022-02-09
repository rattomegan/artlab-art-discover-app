const express = require('express');
const router = express.Router();
const boardsCtrl = require('../../controllers/api/boards');

// POST /api/boards/board/items - we don't need the ID since we're sending the entire object
router.post('/board/items', boardsCtrl.addToBoard);

// GET /api/boards/boards/items
router.get('/board/items/:id', boardsCtrl.findItemInBoard)

module.exports = router;