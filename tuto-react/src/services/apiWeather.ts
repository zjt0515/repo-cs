const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL

export async function getCurrentWeather(lat: any, lon: any) {
  const response = await fetch(
    `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  return data;
}