const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/gamesData.json');

const getGames = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

const getGameById = (id) => {
    const data = getGames()
    return data.games.find((game) => game.id === id)
}

const addGame = (newGame) => {
    const data = getGames()
    const newId = (data.length + 1).toString()
    const game = { ...newGame, id: newId}

    data.push(game)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return game
}

const updateGame = (id, updateGame) => {
    const data = getGames()
    const index = data.games.findIndex((game) => game.id === id)
    if (index === -1) return null
    data[index] = {...data[index], ...updateGame}
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return data[index]
}

const deleteGame = (id) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const index = data.games.findIndex((game) => game.id === id)
    if (index === -1) return false
    data.splice(index, 1)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return true
}

module.exports = { getGames, getGameById, addGame, updateGame, deleteGame } 