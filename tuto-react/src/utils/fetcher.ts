const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL

export async function updateWeather(url: string, { arg }: { arg: any }) {
  const { path, lat, lon, apiKey} = arg

  const response = await fetch(`${API_URL}/${path}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

  return await response.json() 
}