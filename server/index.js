require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models.js');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const app = express();
const router = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'WORKING!!' });
});

const start = async () => {
    try {
        sequelize.authenticate();
        sequelize.sync();
        app.listen(PORT, () => console.log('server', PORT));
    } catch (e) {
        console.log('e');
    }
};
start();

