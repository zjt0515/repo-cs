// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  // 每行字符数
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  // 分号
  semi: true,
  // 单引号
  singleQuote: true,
  // 尾随逗号
  trailingComma: "all",
  // 箭头函数参数括号
  arrowParens: "always",
  // 换行符
  endOfLine: "auto",
  // 每行单个属性
  singleAttributePerLine: true,
  // 全局空格敏感性
  htmlWhitespaceSensitivity: "ignore",
  /**
   * JSX
   */
  jsxSingleQuote: false,
  // vue脚本和样式标签缩进
  vueIndentScriptAndStyle: false
};

export default config;