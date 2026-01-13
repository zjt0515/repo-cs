import type { FC } from 'react'

import $styles from './tools.module.css'
export const HeaderTools: FC = () => {
  return (
    <div className={$styles.tools}>
      <PostCreateButton />
      <ShadcnThemeSetting />
    </div>
  )
}
