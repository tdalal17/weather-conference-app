import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchConferences = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/conferences`);
    return response.data;
  } catch (error) {
    console.error('Error fetching conferences:', error);
    throw error;
  }
};

export const fetchConferenceDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/conferences/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching conference details:', error);
    throw error;
  }
};

export const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/${location}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};