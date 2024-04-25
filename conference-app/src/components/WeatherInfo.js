import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../services/api';

const WeatherInfo = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
        setError('Failed to fetch weather data');
      }
    };

    if (location) {
      fetchData();
    }
  }, [location]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Weather Information for {location}</h3>
      {weatherData.main && <p>Temperature: {weatherData.main.temp}°F</p>}
      {weatherData.weather && weatherData.weather.length > 0 && (
        <p>Description: {weatherData.weather[0].description}</p>
      )}
    </div>
  );
};

export default WeatherInfo;