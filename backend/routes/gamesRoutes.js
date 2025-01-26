const express = require('express');
const { getAllGames, getGameById, createGame, updateGame, deleteGame } = require('../controllers/gamesController')
const { verifyToken } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', getAllGames)
router.get('/:id', getGameById)
router.post('/', verifyToken, createGame)
router.put('/:id', verifyToken, updateGame)
router.delete('/:id', verifyToken, deleteGame)

module.exports = router