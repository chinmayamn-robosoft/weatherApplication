import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Weather context
const WeatherContext = createContext();

// custom hook to use the context
export const useWeather = () => {
  return useContext(WeatherContext);
};

// WeatherProvider component to wrap around the app
export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4998125fd66a1e50e358491463b4d949&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found or an error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  // Provide the state and actions to children
  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        loading,
        error,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};