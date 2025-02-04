const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const gamesRoutes = require('./routes/gamesRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')
const authRoutes = require('./routes/authRoutes')

const app = express();

const FRONT_URL = process.env.FRONT_URL || "https://game-store-api-peach.vercel.app"
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: FRONT_URL
}
));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api/games', gamesRoutes);

app.use('/api/log', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
