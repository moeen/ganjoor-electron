import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { connection } from './database'

import 'bulma-rtl/css/bulma-rtl.css'
import './assets/font-style.css'

connection.sync()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
