import "./WeatherForecast.jsx";
import WeatherForecast from "./WeatherForecast.jsx";
import WeatherIcon from "./WeatherIcon.jsx";
import "./app.css";

function App() {
  const weatherForecasts = [
    {
      day: "Mon",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
    },
    {
      day: "Tue",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
    },
    {
      day: "Wed",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
    },
    {
      day: "Thu",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
    },
    {
      day: "Fri",
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
    },
  ];

  return (
    <div className="WeatherBox">
      {weatherForecasts.map((weatherForecast, index) => (
        <WeatherForecast
          key={index}
          day={weatherForecast.day}
          img={weatherForecast.img}
          imgAlt={weatherForecast.imgAlt}
          conditions={weatherForecast.conditions}
          time={weatherForecast.time}
        />
      ))}
    </div>
  );
}

export default App;
