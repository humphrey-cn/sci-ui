import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.less'

Vue.config.productionTip = false
import SciUi from '../package/index'
Vue.use(SciUi)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
