import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import wordRoutes from './routes/wordRoutes';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/words', wordRoutes);

export default app;
