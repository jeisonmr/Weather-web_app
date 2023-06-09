import React from 'react'
import { DayWeather } from '../../components/dayWeather/DayWeather'
import { WeekWeather } from '../../components/weekWeather/WeekWeather'
export const Calendario = () => {
  return (
    <main>
    <DayWeather/>
    <div>
      <WeekWeather/>
    </div>
    </main>
  )
}
