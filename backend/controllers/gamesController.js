const gamesModel = require("../models/gamesModel")

const getAllGames = (req, res) => {
    const games = gamesModel.getGames() // Obtener todos los juegos
    res.json(games)
}

const getGameById = (req, res) => {
    const {id} = req.params // Obtiene el id deseado
    const game = gamesModel.getGameById(id)
    if (!game) {
        res.status(404).json({error: 'Juego no encontrado'})
        return
    }
    res.json(game)
}

const createGame = (req, res) => {
    const newGame = gamesModel.addGame(req.body)
    res.status(201).json(newGame)
}

const updateGame = (req, res) => {
    const {id} = req.params
    const updateGame = gamesModel.updateGame(id, req.body)
    if (!updateGame) {
        res.status(404).json({error: 'Juego no encontrado'})
        return
    }
    res.json(updateGame)
}

const deleteGame = (req,res) => {
    const {id} = req.params
    const isDeleted = gamesModel.deleteGame(id)
    if (!isDeleted) {
        res.status(404).json({error: "Juego no encontrado"})
        return
    }
    res.status(204).send()
}

module.exports = { getAllGames, getGameById, createGame, updateGame, deleteGame } 