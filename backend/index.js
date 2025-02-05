const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const gamesRoutes = require('./routes/gamesRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')
const authRoutes = require('./routes/authRoutes')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ["https://game-store-api-peach.vercel.app"], // Reemplaza con el dominio de tu frontend en Vercel
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api/games', gamesRoutes);

app.use('/api', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
