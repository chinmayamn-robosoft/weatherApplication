import React from 'react';
import { useWeather } from '../../../context/WeatherContext';
import Loader from '../../molecules/Loader/Loader';
import Error from '../../molecules/Error/Error';
import styles from './WeatherDisplay.module.css';

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <Loader></Loader>;
  if (error) return <Error></Error>;

  return (
    weatherData && (
      <div className={styles.weatherContainer}>
        <h2>Weather in {weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Condition: {weatherData.weather[0].description}</p>
      </div>
    )
  );
};

export default WeatherDisplay;