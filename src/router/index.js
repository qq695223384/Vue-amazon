import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',
      redirect: '/login'
    },
    // 重定向，用于直接跳转
    {
      path: '/login',
      component: Login
    }
  ]
})
