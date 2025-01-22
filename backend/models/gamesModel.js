const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../data/gamesData.json')

export const getGames = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

export const getGameById = (id) => {
    const data = getGames()
    return data.find((game) => game.id === id)
}

export const addGame = (newGame) => {
    const data = getGames()
    const newId = (data.length + 1).toString()
    const game = { ...newGame, id: newId}
}
