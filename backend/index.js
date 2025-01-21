const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const gamesRoutes = require('./routes/gamesRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/games', gamesRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
