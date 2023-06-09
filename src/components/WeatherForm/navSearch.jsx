import React, { useState } from "react";

export const WeatherForm = ({ onChangeCity, searchWeather }) => {
  const [searchCity, setSearchCity] = useState("");
  const [time, setTime] = useState(searchWeather);

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(searchCity);
  };

  return (
    <>
      <span>{searchWeather?.location.country}</span>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
    </>
  );
};
