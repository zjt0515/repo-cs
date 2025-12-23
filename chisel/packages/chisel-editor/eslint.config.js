// import { globalIgnores } from 'eslint/config'
// import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
// import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
// // To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
import { configureVueProject } from '@vue/eslint-config-typescript'
import vue from 'eslint-plugin-vue'
import { fileURLToPath } from 'url'
import path from 'node:path'
configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// export default defineConfigWithVueTs(
//   {
//     name: 'app/files-to-lint',
//     files: ['**/*.{ts,mts,tsx,vue}'],
//   },

//   globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

//   pluginVue.configs['flat/essential'],
//   vueTsConfigs.recommended,
//   skipFormatting,
// )

/* eslint-env node */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    files: ['**/*.{ts,tsx,vue}'],
    rules: {
      semi: 'off',
      'no-console': 'error',
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        extraFileExtension: ['.vue'],
        parser: tsParser,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      vue: pluginVue,
      '@vue/eslint-config-prettier': skipFormatting,
    },
  },
]
// {
//   root: true,
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-typescript',
//     '@vue/eslint-config -prettier/skip-formatting',
//   ],
//   parserOptions: {
//     ecmaVersion: 12,
//   },
//   rules: {
//     'vue/multi-word-component-names': 'off',
//   },
// }
