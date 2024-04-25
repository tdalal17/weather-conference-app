import axios from 'axios';

const API_KEY = '509cd8f85ac9e1549b363546b1551240';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByLocation = async (location: string): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'imperial',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};