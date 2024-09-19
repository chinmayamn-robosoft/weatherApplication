import React, { useState } from "react";
import { useWeather } from "../../../context/WeatherContext";
import Button from "../../atoms/Button/Button";
import styles from "./CityInput.module.css";

const CityInput = () => {
  const [inputCity, setInputCity] = useState("");
  const { setCity, fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      setCity(inputCity); // Update city in context
      fetchWeather(inputCity); // Fetch weather data
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className={styles.input}
        />
        <Button></Button>
      </form>
    </div>
  );
};

export default CityInput;
