const gamesModel = require("../models/gamesModel")

export const getAllGames = (req, res) => {
    const games = gamesModel.getGames() // Obtener todos los juegos
    res.json(games)
}

export const getGameById = (req, res) => {
    const {id} = req.params // Obtiene el id deseado
    const game = gamesModel.getGameById(id)
    if (!game) {
        res.status(404).json({error: 'Juego no encontrado'})
        return
    }
    res.json(game)
}

export const createGame = (req, res) => {
    const newGame = gamesModel.addGame(req.body)
    res.status(201).json(newGame)
}