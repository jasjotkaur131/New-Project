import React from "react";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnow,
  WiFog,
  WiThunderstorm,
} from "react-icons/wi";

const getWeatherIcon = (condition) => {
  if (condition.includes("Clear")) return <WiDaySunny className="text-yellow-400 text-6xl" />;
  if (condition.includes("Rain")) return <WiRain className="text-blue-500 text-6xl" />;
  if (condition.includes("Cloud")) return <WiCloudy className="text-gray-300 text-6xl" />;
  if (condition.includes("Snow")) return <WiSnow className="text-white text-6xl" />;
  if (condition.includes("Fog") || condition.includes("Mist")) return <WiFog className="text-gray-100 text-6xl" />;
  if (condition.includes("Thunderstorm")) return <WiThunderstorm className="text-indigo-500 text-6xl" />;
  return <WiDaySunny className="text-yellow-300 text-6xl" />;
};

const WeatherCard = ({ weather }) => {
  const icon = getWeatherIcon(weather.weather[0].main);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg text-white text-center space-y-3 transition hover:scale-105 duration-300 w-72">
      <h2 className="text-3xl font-semibold">{weather.name}</h2>
      {icon}
      <p className="capitalize">{weather.weather[0].description}</p>
      <p className="text-4xl">{Math.round(weather.main.temp)}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
