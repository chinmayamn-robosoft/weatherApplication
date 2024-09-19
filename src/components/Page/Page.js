import React from "react";
import CityInput from "../molecules/CityInput/CityInput";
import WeatherDisplay from "../organisms/WeatherDisplay/WeatherDisplay";

function Page() {
  return (
    <div>
      <h1>Weather App</h1>
      <CityInput />
      <WeatherDisplay />
    </div>
  );
}

export default Page;
