import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Notify } from 'vant'

import './assets/styles/base.scss'
Vue.config.productionTip = false
// Vue.use(Notify)全局使用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
