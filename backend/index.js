import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import generalRouter from './routes/general.js';
import salesRouter from './routes/sales.js';
import managementRouter from './routes/management.js';
import clientRouter from './routes/client.js';
import { connectToDB } from './config/db.config.js';
dotenv.config();
connectToDB();
const app = express();

// Middlewares 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());

app.use('/api/v1/general', generalRouter);
app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/management', managementRouter);
app.use('/api/v1/client', clientRouter);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => console.log(`Server is running on the port: ${process.env.port}`));