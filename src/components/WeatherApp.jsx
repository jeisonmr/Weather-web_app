import React, { useEffect, useState } from "react";
import { WeatherForm } from "./WeatherForm/navSearch";
import { WeatherDescription } from "./WeatherDescription/WeatherDescription";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo(city = "London") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${
          import.meta.env.VITE_REACT_APP_KEY
        }&q=${city}`
      );

      const data = await request.json();
      setWeather(data);
      console.table(weather);
      console.log(weather);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    // setWeather(null);
    loadInfo(city);
  }

  return (
    <>
      <h1>Weather App</h1>
      <WeatherForm onChangeCity={handleChangeCity} searchWeather={weather} />
      <WeatherDescription searchWeather={weather} />
      <p>Temperatura: {weather?.current.temp_c}</p>
    </>
  );
};
