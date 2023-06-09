import React from "react";
import { WeatherForm } from "../../components/WeatherForm/navSearch";
import { DayWeather } from "../../components/dayWeather/DayWeather";
import { GpsWeather } from "../../components/gps/GpsWeather";
import { CitysWeather } from "../../components/citysWeather/CitysWeather";
import { DateWeather } from "../../components/dateWeather/DateWeather";

export const Dashboard = () => {
  return (
    <section>
      <header className="container">
        <DateWeather/>
        <WeatherForm />
      </header>
      <main>
        <DayWeather/>
        <GpsWeather/>
      </main>
      <main>
        <CitysWeather/>
      </main>

    </section>
  );
};
