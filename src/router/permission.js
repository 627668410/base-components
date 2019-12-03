import router from '@/router'
import store from '@/store'
router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = to.meta.title || '路停宝'
  // set sideDefaultActive
  // store.commit(types.SET_SIDE_DEFAULT_ACTIVE, to.fullPath)
  // if login
  let login = false
  if (store.getters.user) {
    login = store.getters.login || false
  }
  if (login) {
    // 防止页面刷新动态路由失效
    if (store.getters.addRoutes.length > 0) {
      if (to.path === '/login') {
        next(store.getters.addRoutes[0].children[0].path)
      } else {
        next()
      }
    } else {
      store.dispatch('permission/async_generate_routes', store.getters.user.menuRights).then(() => next(to.path))
    }
  } else {
    console.error('未获取到用户信息')
    // 未登录
    if (to.path === '/login') {
      next()
    } else {
      next(`/login`)
      // next(`/login?redirect=${to.path}`)
    }
  }
})
