const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和mixin
        // 这样在各种文件中就可以直接使用其中的变量
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    // 启动express服务器
    before(app) {
      registerRouter(app)
    }
  }
}
