const path = require('path')
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const settings = require('./src/settings.js')

const entry = './src/pages/**?/*.js'

function setEntry(entry){
  let _template;
  glob.sync(entry).forEach(item =>{
    let _item = item;
    // _template = 
    // let reg = /^\./g
    item = item.split('/')
    console.log(item)
    // console.log(path.basename(item, '/main.js'))
  })
}

//https://www.jb51.net/article/175011.htm
//https://blog.csdn.net/wangxinxin1992816/article/details/81097550


setEntry(entry);


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
