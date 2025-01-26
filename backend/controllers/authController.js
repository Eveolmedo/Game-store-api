const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersModel = require("../models/usersModel")

require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY 

const register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password ) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    
    const users = usersModel.getUsers()

    const userExists = users.find((user) => user.username === username)
    if (userExists) {
        return res.status(400).json({ error: 'El usuario ya esta registrado' })
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: Date.now(),
        username,
        password: hashedPassword
    };

    usersModel.addUser(newUser);

    res.status(201).json({message: `Usuario registrado`});
}

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password ) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const user = usersModel.userByUsername(username)
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({
        message: 'Inicio de sesión exitoso',
        user: { id: user.id, username: user.username, role: user.role },
    });
}

module.exports = { register, login }