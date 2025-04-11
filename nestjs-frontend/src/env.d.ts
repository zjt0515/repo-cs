/**
 * 声明vue为模块，防止ts报错(ts只支持导入导出模块)
 */
declare module '*.vue' {
   import type { DefineComponent } from 'vue'
   const component: DefineComponent<{}, {}, any>
   export default component
}

declare module '*.vue' {
   import type { DefineComponent } from 'vue'
   const component: ComponentOptions | ComponentOptions['setup']
   export default component
}
