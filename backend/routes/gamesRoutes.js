const express = require('express');
import { getAllGames, getGameById, createGame, updateGame } from '../controllers/gamesController';

const router = express.Router()

router.get('/', getAllGames)
router.get('/:id', getGameById)
router.post('/', createGame)
router.put('/:id', updateGame)

export default router