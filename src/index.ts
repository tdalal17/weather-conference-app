import express from 'express';
import cors from 'cors';
import { initializeDatabase } from './database';
import conferenceRoutes from './conferenceRoutes';
import weatherRoutes from './weatherRoutes';
import authRoutes from './authRoutes';
import indexRoutes from './indexRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/conferences', conferenceRoutes);
app.use('/weather', weatherRoutes);
app.use('/auth', authRoutes);
app.use('/indexRoutes', indexRoutes);
app.use('/conferences', conferenceRoutes);
app.use('/weather', weatherRoutes);


app.listen(port, async () => {
  await initializeDatabase();
  console.log('Database connected successfully');
  console.log(`Server is running on port ${port}`);
});