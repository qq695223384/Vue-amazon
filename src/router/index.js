/*eslint spaced-comment:0*/
import Vue from 'vue'
import Router from 'vue-router'
/*eslint no-unused-vars:0*/
import Index from '@/components/index/Index'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    // 重定向，用于直接跳转
    {
      path: '/index',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('导航守卫', to)
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
