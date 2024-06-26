import { useState, useEffect } from "react";
import { fetchWeather } from "../api/Weather";
import { fetchImageByCountry } from "../api/unsplash";
import "../CSS/Style.css"; // Create a CSS file for styling

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);

      // Fetch the background image based on the country
      const country = data.sys.country;
      const imageUrl = await fetchImageByCountry(country);
      setBackgroundImage(imageUrl);
    } catch (err) {
      setError("Could not fetch weather data");
    }
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, [backgroundImage]);

  return (
    <div className="weather-container">
      <h1>Weather App</h1>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <br />
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description} </p>
          <p>{weather.main.temp}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
