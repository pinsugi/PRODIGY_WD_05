import axios from "axios";

const API_KEY = "46f240694048e2f52169b5193dc6dd9d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching the weather data", error);
    throw error;
  }
};
