/*
 * @Author: Lvhz
 * @Date: 2021-10-21 10:09:37
 * @Description: Description
 */
// vue.config.js
const path = require('path')

module.exports = {
  devServer: {
    port: 2222
  },
  chainWebpack: (config) => {
    config
      // app entry
      .entry('app')
      .clear()
      .add(path.resolve(__dirname, './src/main.js'))
      .end()

    // 添加解析 md 的 loader
    config.module
      .rule('md2vue')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('md-loader')
      .loader(path.resolve(__dirname, '../md-loader/src/index.js'))
      .end()
  }
}
