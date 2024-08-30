import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import wordRoutes from './routes/wordRoutes';

dotenv.config();

const app: Application = express();

// Middleware'ler
app.use(cors());
app.use(express.json());

// Route'lar
app.use('/api/words', wordRoutes);

export default app;
