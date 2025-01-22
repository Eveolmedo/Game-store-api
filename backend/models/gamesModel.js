const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '../data/gamesData.json')

export const getAllGames = () => {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
}

