import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

let data = {
  appliedFor: [],
  applyingTitle: '',
  applyingValue: '',
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
