import React, { useState } from 'react'
import Container from './Container/Container'
import Home from './Home'
import Forecast from './Forecast'
import usePosition from '@/hooks/usePosition'

export default function WeatherApp() {

  // 共享position
  const { position, getPosition, status } = usePosition()

  const [isHome, setIsHome] = useState(true)
  
  return (
    <div>
      <Container>
        {
          isHome && <Home getPosition={getPosition} setIsHome={setIsHome} status={status} />
        }
        {
          !isHome && <Forecast />
        }
      </Container>
    </div>
  )
}
