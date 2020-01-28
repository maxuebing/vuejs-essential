import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

const state = {
  user: ls.getItem('user'),
  auth: ls.getItem('auth')
}

const mutations = {
  UPDATE_USER(state, user) {
    state.user = user
    ls.setItem('user', user)
  },
  UPDATE_AUTH(state, auth) {
    state.auth = auth
    ls.setItem('auth', auth)
  }
}

const actions = {
  login({ commit }, user) {
    if (user) commit('UPDATE_USER', user)
    commit('UPDATE_AUTH', true)
    router.push('/')
  },
  logout({ commit }) {
    commit('UPDATE_AUTH', false)
    router.push({ name: 'Home', params: { logout: true } })
  },
  // 更新个人信息
  updateUser({ state, commit }, user) {
    // 获取仓库的个人信息
    const stateUser = state.user
    // 简单的数据类型判断
    if (stateUser && typeof stateUser === 'object') {
      // 合并新旧个人信息，等价于 user = Object.assign({}, stateUser, user)
      user = { ...stateUser, ...user }
    }
    // 更新个人信息
    commit('UPDATE_USER', user)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store