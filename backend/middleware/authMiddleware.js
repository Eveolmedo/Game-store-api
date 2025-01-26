const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY || 'clavesecreta123'

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalido o expirado' })
        }
        //guardar los datos del uSuario extraidos del token de la soli
        req.user = user
        next()
    })
}

module.exports = { verifyToken }