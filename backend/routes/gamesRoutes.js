const express = require('express');

const router = express.Router()

router.get('/', getAllGames)
router.get('/:id', getGameById)
