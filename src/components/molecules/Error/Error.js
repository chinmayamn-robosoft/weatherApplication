import React from 'react';
import { useWeather } from '../../../context/WeatherContext';
import styles from './Error.module.css';

function Error() {
  const { error } = useWeather();
  return (
    <div className={styles.error}>{error}</div>
  )
}

export default Error