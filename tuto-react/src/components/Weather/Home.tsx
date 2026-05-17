import useWeather from '@/hooks/useWeatherSWR'
import CurrentWeather from './CurrentWeather'
import Welcome from './Welcome'
import { Button } from '../ui/button'
import type { Dispatch, SetStateAction } from 'react'

interface Position {
  latitude?: number
  longitude?: number
}

interface HomeProps {
  getPosition: () => Promise<Position>
  setIsHome: Dispatch<SetStateAction<boolean>>
  status: string
}

export default function Home({ getPosition, status,setIsHome }: HomeProps) {
  const { weather, isMutating, getCurrentWeather } = useWeather(getPosition)

  if (weather) {
    return <CurrentWeather setIsHome={setIsHome} weather={weather} status={status} ></CurrentWeather>
  }

  return <>
    <Welcome />
    <Button disabled={isMutating} onClick={getCurrentWeather}>
      {status}
    </Button>
  </>
}
