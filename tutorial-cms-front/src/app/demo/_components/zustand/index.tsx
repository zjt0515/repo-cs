// src/app/demo/_components/zustand/index.tsx
// ...

import type { FC } from 'react'

import { Menu, theme } from 'antd'
import { default as AntdSider } from 'antd/es/layout/sider'
import { useShallow } from 'zustand/shallow'

import { useLayoutStore } from './store'

const Sider: FC = () => {
  const {
    mode,
    theme: { sidebar },
  } = useLayoutStore(useShallow((state) => ({ mode: state.mode, theme: state.theme })))
  const {
    // colorBgContainer 就是白色
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <AntdSider style={{ background: sidebar === 'dark' ? '' : colorBgContainer }}>
      {mode === 'side' && <div className="bg-slate-500 w-3/4 h-10 mx-auto my-7" />}
      <Menu />
    </AntdSider>
  )
}
