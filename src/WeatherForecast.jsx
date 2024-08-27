import "./WeatherForecast.css";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  // return <p> {`${day} - ${img}- ${imgAlt} - ${conditions} - ${time}`}</p>

  // Each instance of the WeatherForecast
  // component should have the JSX equivalent of the following HTML structure:

  return (
    <div className="weather">
      <WeatherData day={day} time={time} conditions={conditions} />
      <WeatherIcon imgProp={img} imgAltProp={imgAlt} />
    </div>
  );
}
export default WeatherForecast;
