import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db'; 

dotenv.config();

connectDB();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Example route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is running!' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
