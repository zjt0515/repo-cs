import { updateWeather } from "@/utils/fetcher";
import useSWRMutation from "swr/mutation";


const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL

export default function useWeather(getPosition: any) {
  const { trigger, data: weather, isMutating, error } = useSWRMutation(API_URL, updateWeather)

  async function getCurrentWeather() {
    const { latitude: lat, longitude: lon } = await getPosition()

    await trigger({
      path: 'weather',
      lon,
      lat,
      apiKey: API_KEY
    })
  }

  return {weather, isMutating, error, getCurrentWeather}
}