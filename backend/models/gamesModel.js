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

    data.push(game)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return game
}

export const updateGame = (id, updateGame) => {
    const data = getGames()
    const index = data.findIndex((game) => game.id === id)
    if (index === -1) return null
    data[index] = {...data[index], ...updateGame}
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return data[index]
}

export const deleteGame = (id) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const index = data.findIndex((game) => game.id === id)
    if (index === -1) return false
    data.splice(index, 1)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return true
}