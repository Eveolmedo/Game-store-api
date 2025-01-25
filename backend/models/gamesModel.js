const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/gamesData.json');

const getGames = () => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data.games
}

const getGameById = (id) => {
    const data = getGames()
    return data.find((game) => game.id === id)
}

const addGame = (newGame) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const newId = (data.games.length + 1).toString()
    const game = { ...newGame, id: newId}

    data.games.push(game)
    data.info.total += 1
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return game
}

const updateGame = (id, updateGame) => {
    const data = getGames()
    const index = data.games.findIndex((game) => game.id === id)
    if (index === -1) return null
    data.games[index] = {...data.games[index], ...updateGame}
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return data.games[index]
}

const deleteGame = (id) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const index = data.games.findIndex((game) => game.id === id)
    if (index === -1) return false
    data.games.splice(index, 1)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return true
}

module.exports = { getGames, getGameById, addGame, updateGame, deleteGame } 