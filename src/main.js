import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'

axios.defaults.baseURL = 'https://udemy-course-43204.firebaseio.com/vuejs/'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
