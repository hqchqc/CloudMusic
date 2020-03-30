import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Toast from './components/common/Toast/index'

Vue.config.productionTip = false

// 弹窗插件
Vue.use(Toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
