import React, { useEffect, useState } from "react";

export const WeatherDescription = ({searchWeather}) => {
  
      const [dataWeather, setDataWeather] = useState("");
  
      console.log(searchWeather)
     
  return (
  <>
  <h3>País: <span>{searchWeather?.location.country}</span></h3>
  <h4>Ciudad: <span>{searchWeather?.location.name}</span></h4>
  </>
  );
};
