import Vue from 'vue'
import Router from 'vue-router'
import Components from './modules/components'
import Echarts from './modules/echarts'

Vue.use(Router)

const Layout = () => import(/* webpackChunkname: 'Layout' */ '@/layout')
const Login = () => import(/* webpackChunkname: 'Login' */ '@/views/login')
const Page404 = () => import(/* webpackChunkname: 'Page404' */ '@/views/error-page/404')

export const constantRoutes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  component: Login
},
{
  path: '/404',
  component: Page404
}]

export const asyncRoutes = [{
  path: '/components',
  name: 'components',
  component: Layout,
  meta: {
    title: '组件',
    icon: 'parking'
  },
  children: [
    ...Components
  ]
}, {
  path: '/echarts',
  name: 'echarts',
  component: Layout,
  meta: {
    title: '图表',
    icon: 'record'
  },
  children: [
    ...Echarts
  ]
}]
const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

let router = createRouter()

// 重置挂载的路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
