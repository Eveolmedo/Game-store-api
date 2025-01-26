const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../data/usersData.json');

const getUsers = () => {
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
}

const saveUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

const addUser = (newUser) => {
    const users = getUsers();
    users.push(newUser);
    saveUsers(users);
}

const userByUsername = (username) => {
    const users = getUsers();
    return users.find((u) => u.username === username);
}

module.exports = { getUsers, saveUsers, addUser, userByUsername }