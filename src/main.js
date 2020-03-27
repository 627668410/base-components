import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './router/permission'
import PMonitor from './utils/performace'
import './plugins/element.js'
import '@/styles/index.scss'
import './icons'
const pMonitor = new PMonitor()
pMonitor.init()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
