// src/app/demo/page.tsx
import type { FC } from 'react'

import { Button } from 'antd'

import StateDemo from './_components/state'
import $styles from './page.module.css'

const DemoPage: FC = () => (
  <div className={$styles.demo}>
    <div className={$styles.container}>
      <h2 className="text-center">First React App</h2>
      <div className="flex flex-col items-center">
        <div className="my-5 flex-auto">
          <Button variant="solid" href="https://3rcd.com" target="_blank">
            3R教室
          </Button>
        </div>
      </div>
    </div>
    <StateDemo></StateDemo>
  </div>
)

export default DemoPage
