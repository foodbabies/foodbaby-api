import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import foodRoutes from './api/v1/routes/foodRoutes.js';
import { logger, morganMiddleware } from './logger.js';
import cors from 'cors';

dotenv.config();

const app = express();
const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;
const corsOptions = {
  origin: "*",
};

app.use(morganMiddleware); // todo add auth here later
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to foodbaby.' });
});

app.use('/api/v1/food', foodRoutes);

app.listen(PORT, () => {
  console.log(`> Ready on http://localhost:${PORT}`);
});
