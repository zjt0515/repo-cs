import { useEffect, useState } from "react";

interface Position {
  latitude?: any
  longitude?: any
}

export default function usePosition() {
  const [position, setPosition] = useState<Position>()

  const [status, setStatus] = useState('Get Current Weather')

  async function getPosition() {
    return new Promise<Position>((resolve, reject) => {
      const geolocation = navigator.geolocation;

      setStatus("Locating...")
      let newPosition 

      if (!geolocation) {
        // alert("Geolocation is not supported by your browser");
        reject("Geolocation is not supported by your browser")
      }
      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          newPosition = { latitude, longitude }
          setPosition(newPosition)
          setStatus("Get Forecast Weather")

          resolve(newPosition)
        },
        (error) => {
          // alert(error.message)
          setStatus(error.message)
          reject(error.message)
        })
    })
  
  } 

//   useEffect(() => {
//   getPosition()
// }, [])

  return { position, getPosition, status}
}