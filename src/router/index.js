import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/auth/Register'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new Router({
  mode: 'history',
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const auth = router.app.$options.store.state.auth

  if (auth && to.path.indexOf('/auth/') !== -1) {
    next('/')
  } else {
    next()
  }
})

export default router