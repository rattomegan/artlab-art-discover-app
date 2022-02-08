const express = require('express');
const router = express.Router();
const boardsCtrl = require('../../controllers/api/boards');

// POST /api/items - we don't need the ID since we're sending the entire object
router.post('/board/items', boardsCtrl.addToBoard);


module.exports = router;