import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Toast from './components/common/Toast/index'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.prototype.$video = Video

Vue.config.productionTip = false

// 弹窗插件
Vue.use(Toast)
// 事件总线
Vue.prototype.$bus = new Vue()
// 移动端300ms延迟
FastClick.attach(document.body)
// 图片懒加载
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.jpg')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

