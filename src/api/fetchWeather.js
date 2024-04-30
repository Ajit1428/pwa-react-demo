import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3e43e6ff32671b329e80e07a7e93b2a1";

export const fetchWeather = async (query) => {
  return axios.get(API_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
};
