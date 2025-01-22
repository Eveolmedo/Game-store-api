const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../data/gamesData.json')

export const getGames = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

export const getGameById = () => {
    return getGames().find((game) => game.id === id)
}
