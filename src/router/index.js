import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/auth/Register'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: Register
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router