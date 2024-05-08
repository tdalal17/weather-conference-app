import express from 'express';
import cors from 'cors';
import path from 'path';
import { initializeDatabase } from './database';
import conferenceRoutes from './conferenceRoutes';
import weatherRoutes from './weatherRoutes';
import authRoutes from './authRoutes';
import indexRoutes from './indexRoutes';
import 'reflect-metadata';


const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'conference-app', 'build')));

app.use('/', indexRoutes);
app.use('/conferences', conferenceRoutes);
app.use('/weather', weatherRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'conference-app', 'build', 'index.html'));
});

app.listen(port, async () => {
  await initializeDatabase();
  console.log('Database connected successfully');
  console.log(`Server is running on port ${port}`);
});