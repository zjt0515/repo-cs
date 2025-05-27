import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    // 入口
    input: 'packages/vue/src/index.ts',
    // 打包出口
    output: [
      // 导出iife模式包
      {
        // 开启sourcemap
        sourcemap: true,
        file: './packages/vue/dist/vue.js',
        format: 'iife',
        // 变量名
        name: 'Vue'
      }
    ],
    // 插件
    plugins: [
      // ts
      typescript({ sourceMap: true }),
      // 模块导入路径补全
      resolve(),
      // 转cjs为esm
      commonjs()
    ]
  }
]