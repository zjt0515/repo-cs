import type { LayoutComponent, LayoutMode } from './constants'

/**
 * 主题色
 */
export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * Layout Config { LayoutMode, LayoutTheme}
 */
export interface LayoutOptions {
  // 布局模式
  mode: `${LayoutMode}`
  // 布局组件主题色
  theme: Partial<LayoutTheme>
}

/**
 * LayoutActions
 */
export interface LayoutActions {
  /** 更改布局模式 */
  changeMode: (value: `${LayoutMode}`) => void
  /** 更改主题 */
  changeTheme: (value: Partial<LayoutTheme>) => void
}

/**
 * layout theme
 */
export type LayoutTheme = {
  [key in `${LayoutComponent}`]: `${ThemeMode}`
}
