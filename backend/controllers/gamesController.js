const gamesModel = require("../models/gamesModel")

export const getGames = (req, res) => {
    const games = gamesModel.getAllGames() // Obtener todos los juegos
    res.json(games)
}

