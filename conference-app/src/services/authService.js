import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};