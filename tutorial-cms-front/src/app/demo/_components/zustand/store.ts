import { isNil } from 'lodash'
import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { LayoutActions, LayoutOptions, ThemeMode } from './types'
const createLayoutStore = () =>
  create<LayoutOptions & LayoutActions>()(
    subscribeWithSelector(
      immer(
        devtools(
          persist(
            (set) => ({
              mode: 'side',
              theme: {
                header: 'light',
                siderbar: 'dark',
              },
              changeMode: (value) => set(() => ({ mode: value })),
              changeTheme: (value) =>
                set((state) => {
                  let { sidebar } = state.sidebar
                  // 当同时传入sidebar和header时，去除header，以sidebar为准
                  if (!isNil(value.sidebar)) sidebar = value.sidebar
                  // 当只传入header时，设置header
                  else if (!isNil(value.header))
                    sidebar = value.header === 'light' ? 'dark' : 'light'
                  // 使header和sidebar样式相反
                  const header: `${ThemeMode}` = sidebar === 'light' ? 'dark' : 'light'
                  return { theme: { sidebar, header } }
                }),
            }),
            {
              name: 'zustand-demo',
            },
          ),
        ),
      ),
    ),
  )
/**
 * 创建布局状态池
 */
const useLayoutStore = createLayoutStore()

useLayoutStore.subscribe(
  (state) => state.theme,
  (value) => {
    console.log(value)
  },
)

export { useLayoutStore }
