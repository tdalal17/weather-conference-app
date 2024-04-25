import express from 'express';
import { getWeatherByLocation } from './weatherService';

const router = express.Router();

router.get('/:location', async (req, res) => {
  try {
    const { location } = req.params;
    const weatherData = await getWeatherByLocation(location);
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default router;