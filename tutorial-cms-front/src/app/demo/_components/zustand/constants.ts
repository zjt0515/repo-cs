// * =================== Section: 布局 ===================
/**
 * 模式
 */
export enum LayoutMode {
  TOP = 'top',
  SIDE = 'side',
  CONTENT = 'content',
}

/**
 * 组件
 */
export enum LayoutComponent {
  // 顶栏组件
  HEADER = 'header',
  // 侧边栏
  SIDEBAR = 'sidebar',
}

/**
 * 行为类型
 */
export enum LayoutActionType {
  /** 更改布局模式 */
  CHANGE_MODE = 'change_mode',
  /** 更改组件主题 */
  CHANGE_THEME = 'change_theme',
}
