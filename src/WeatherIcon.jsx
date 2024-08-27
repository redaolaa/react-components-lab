import "./WeatherForecast.jsx";

import React from "react";

function WeatherIcon({ imgProp, imgAltProp }) {
  return <img src={imgProp} alt={imgAltProp} />;
}

export default WeatherIcon;
