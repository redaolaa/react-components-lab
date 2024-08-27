import "./WeatherForecast.jsx";
import "./WeatherData.css"

import React from "react";

function WeatherData({ day, time, conditions }) {
  return (
    <div className='WeatherDataContainer'>
      <h2>{day}</h2>

      <span>{conditions}</span>
      <span>{time} </span>
    </div>
  );
}

export default WeatherData;
