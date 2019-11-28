import router, {
  asyncRoutes,
  constantRoutes
} from '@/router'
import Vue from 'vue'
/**
 * 返回一级权限相等的二级权限用于判断子路由的权限
 * @param roles
 * @param route
 */
function hasPermission(routes, role) {
  if (routes instanceof Array) {
    return routes.filter(route => route.name === role.value)
  } else {
    console.error('hasPermission获取的路由不是数组，请检查前端路由name是否和后端权限value所匹配')
    return []
  }
}
/**
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  roles.forEach(role => {
    const tmp = {
      ...role
    }
    const childrenRoute = hasPermission(routes, tmp)
    if (childrenRoute.length > 0) {
      if (tmp.children instanceof Array && childrenRoute[0].children) {
        // 将子路由，和一级权限的子权限递归
        childrenRoute[0].children = filterAsyncRoutes(childrenRoute[0].children, tmp.children)
      }
      res.push(childrenRoute[0])
    }
  })
  return res
}
// 添加重定向
export function redirectRoutes(routes) {
  if (routes instanceof Array) {
    routes.forEach(route => {
      if (route.children && route.children.length > 0) {
        route.redirect = route.children[0].path
      }
    })
  } else {
    console.error('重定向路由中获取的路由不是数组，请检查路由筛选是否出错')
  }
}
const state = {
  routes: [], // 全部路由
  addRoutes: [] // 异步挂载的路由
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  // 动态添加路由
  async_generate_routes({
    commit
  }, roles) {
    return new Promise((resolve, reject) => {
      if (roles instanceof Array) {
        let rolesFilter = roles.filter(role => role.children && role.children.length > 0)
        let accessedRoutes = filterAsyncRoutes(asyncRoutes, rolesFilter)
        // 添加404拦截
        accessedRoutes.push({
          path: '*',
          redirect: '/404'
        })
        redirectRoutes(accessedRoutes)
        commit('SET_ROUTES', accessedRoutes)
        router.addRoutes(accessedRoutes)
        console.log(router)
        console.log('动态挂载的路由：')
        console.log(accessedRoutes)
        resolve(accessedRoutes)
      } else {
        const info = '获取权限失败'
        Vue.prototype.$message.error(info)
        // 重置登录信息和路由
        commit('SET_ROUTES', constantRoutes)
        reject(info)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
