import { useEffect, useState } from "react";

export default function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString())
    },1000)

    return () => {
      clearInterval(interval)
    }
  })

  return currentTime;
}