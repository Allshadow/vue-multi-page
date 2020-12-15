import Vue from 'vue'
import App from './App.vue'
import router from './router'

//vant ui
import Vant from 'vant'
import 'vant/lib/index.css'

//使用 vant
Vue.use(Vant)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
