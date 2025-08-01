import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "9cb4d596173a142541933b64c7fd1366"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setWeather(null);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-sky-300 to-yellow-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Weather App</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-lg shadow outline-none"
        />
        <button
          onClick={fetchWeather}
          className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 hover:scale-105 transition duration-300"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent mb-4"></div>
      )}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
