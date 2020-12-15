const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const settings = require('./src/settings.js')


module.exports = {
  pages: settings.pages,
  
    lintOnSave: false,
  // 不需要生产环境的 source map
  productionSourceMap: false,
  devServer: {
    port: 8099,
    open: true
  },
  configureWebpack: {
    plugins: [
        new CleanWebpackPlugin()
    ],
  }
};
