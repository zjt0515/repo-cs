import Day from './Day'
import styles from './CurrentWeather.module.css'
import { Button } from '../ui/button'
import type { Dispatch, SetStateAction } from 'react'

type CurrentWeatherProps = {
  weather: any,
  status: string,
  setIsHome: Dispatch<SetStateAction<boolean>>
}

export default function CurrentWeather({ weather, status, setIsHome }: CurrentWeatherProps) {
  // const [weather, setWeather] = useState<any>(null)

  // const { trigger, data:weather, isMutating, error} = useSWRMutation(API_URL, updateWeather)

  // async function getCurrentWeather() {
  //   const { latitude: lat, longitude: lon } = await getPosition()

  //     // const data = await getCurrentWeatherAPI(lat, lon)
  //   // setWeather(data)

  //   await trigger({
  //     path: 'weather',
  //     lon,
  //     lat,
  //     apiKey: API_KEY
  //   })
  // }
  return (
    <section className={styles.section}>
        <div className={styles.weatherInfo}>
          <Day
            name={weather.name}
            temperature={{
              min: weather.main?.temp_min,
              max: weather.main?.temp_max
            }}
            iconCode={weather.weather[0].icon}
        />
        <Button size={'lg'} onClick={() => {setIsHome(false)}} >
          {status}
        </Button>
        </div>
    </section>
  )
}
