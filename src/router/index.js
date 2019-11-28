import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = () => import(/* webpackChunkname: 'Layout' */ '@/layout')
const Login = () => import(/* webpackChunkname: 'Login' */ '@/views/login')
const Page404 = () => import(/* webpackChunkname: 'Page404' */ '@/views/error-page/404')
const Table = () => import(/* webpackChunkname: 'Table' */ '@/views/table')
const Form = () => import(/* webpackChunkname: 'Form' */ '@/views/form')
const EchartMap = () => import(/* webpackChunkname: 'EchartMap' */ '@/views/echart-map')

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
  children: [{
    path: '/components/table',
    name: 'table',
    component: Table,
    meta: {
      title: '表格',
      icon: 'parking'
    }
  }, {
    path: '/components/form',
    name: 'form',
    component: Form,
    meta: {
      title: '表单',
      icon: 'parking'
    }
  }]
}, {
  path: '/echarts',
  name: 'echarts',
  component: Layout,
  meta: {
    title: '图表',
    icon: 'record'
  },
  children: [{
    path: '/echarts/map',
    name: 'echart_map',
    component: EchartMap,
    meta: {
      title: '地图'
    }
  }]
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
