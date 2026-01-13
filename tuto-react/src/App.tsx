import type { FC, ReactNode } from 'react'
import './App.css'
import { useState } from 'react'
import { Button } from 'antd'
import Page from './components/Page/Page'

const App: FC = (): ReactNode => {
  const [current, setCurrent] = useState(1)
  return (
    <>
      <Button type='primary'>我的按钮</Button>

      <Page onPageChange={(page:number) => { setCurrent(page)}} current={current} total={100} limit={20}></Page>
    </>
  )
}
export default App
