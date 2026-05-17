import type { FC, ReactNode } from 'react'
import './App.css'
import { useLocation } from 'react-router'

const App: FC = (): ReactNode => {

  const location = useLocation()
  console.log(location)

  return (
    <>

    </>
  )
}
export default App
