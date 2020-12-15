module.exports = {
    //多页面配置入口
    pages: {
      "main": {
        entry: "src/main.js",
        template: "public/index.html",
        filename: "index.html",
        title: "整体页面"
      }, 
      "teachersLive": {
        //入口  
        entry: "src/pages/teacherLive/main.js",
        //模板来源
        template: "src/pages/teacherLive/index.html",
        //在 dist/index.html输出
        filename: "teacherlive/index.html",
        //title标签
        title: "师者",
        //提取出来的块
        // chunks: ['chunk-vendors', 'chunk-common', ]
        },
      "test": {
        entry: "src/pages/test/main.js",
        template: "src/pages/test/index.html",
        filename: "test/index.html",
        title: "测试",
      }
    },
}