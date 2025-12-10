import type { FC } from 'react'

import $styles from './page.module.css'

const App: FC = () => (
  <main className={$styles.container}>
    <div className={$styles.block}>首页</div>
  </main>
)

export default App
