import React, { useState, useCallback, useRef } from 'react';
import WeatherInfo from '../components/WeatherInfo';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [debouncedLocation, setDebouncedLocation] = useState('');
  const timeoutRef = useRef(null);

  const handleSearch = useCallback((value) => {
    setLocation(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDebouncedLocation(value);
    }, 500);
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {debouncedLocation && <WeatherInfo location={debouncedLocation} />}
    </div>
  );
};

export default Weather;