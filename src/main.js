import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import router from './router/router'

require('./assets/app.css')
require('./assets/icofont/icofont.min.css')
require('./assets/slider.css')

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
