const express = require('express');
const { getAllGames, getGameById, createGame, updateGame, deleteGame } = require('../controllers/gamesController')
const { verifyToken, isAdmin } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', getAllGames)
router.get('/:id', getGameById)
router.post('/', verifyToken, isAdmin, createGame)
router.put('/:id', verifyToken, isAdmin, updateGame)
router.delete('/:id', verifyToken, isAdmin, deleteGame)

module.exports = router