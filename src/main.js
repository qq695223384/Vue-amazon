// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/index.css'
import '../static/css/normalize.css'
import '../static/css/common.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

axios.interceptors.request.use(function (config) {
  // 在请求发送之前做一些事情
  // endsWith 字符串的方法,用来判断是不是以参数为结尾,如果是返回值为true

  // 判断如果是登录接口,就不需要添加 Authorization 请求头
  if (!config.url.endsWith('/login')) {
    config.headers['Authorization'] = localStorage.getItem('token')
  }
  // console.log('请求拦截器', config)
  return config
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 在获取到响应数据的时候做一些事情
  // console.log('响应拦截器', response)
  if (response.data.meta.status === 401) {
    // 因为现在不是在组件中,因此无法通过 this.$router 来访问到路由实例
    // 但是，可以直接通过上面导入的路由模块中的 router （路由实例）来访问到路由对象
    router.push('/login')
    localStorage.removeItem('token')
  }

  return response
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
