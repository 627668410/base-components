import { login } from '@/api/login'
const state = {
  user: '',
  login: false // 登录状态
}

const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_LOGIN: (state, login) => {
    state.login = login
  }
}

const actions = {
  async_login({
    commit
  }, {
    username,
    password
  }) {
    return new Promise(async (resolve, reject) => {
      let data = {
        username,
        password
      }
      const [err, res] = await login(data)
      if (err) {
        reject(err)
        return false
      }
      // 根据权限获取路由挂载
      this.dispatch('permission/async_generate_routes', res.data.menuRights)
        .then((routes) => {
          commit('SET_USER', res.data)
          commit('SET_LOGIN', true)
          resolve(routes)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
