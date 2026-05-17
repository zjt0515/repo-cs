import React from 'react'
import useSWR from 'swr'

export default function Advice() {
  const adviceURL = 'https://api.adviceslip.com/advice'
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading, mutate: getAdvice } = useSWR(adviceURL, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <p>{isLoading ? 'Loading...' : data.slip?.advice}</p>
    <button disabled={isLoading} onClick={getAdvice}>Get Advice</button>
    </div>
  )
}
