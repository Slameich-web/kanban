import dotenv from 'dotenv/config';
import express from 'express';
import {sequelize} from './db';
import models from './models/models';
import cors from 'cors';
import router from './routes/index';
import errorHandler from './middleware/ErrorHandlingMiddleware';
import endpoint from './endpoints.config';

const app = express();
const PORT = endpoint.PORT || 5000;

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
        console.log(e);
    }
};
start();

