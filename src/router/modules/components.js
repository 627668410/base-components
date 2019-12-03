const Table = () => import(/* webpackChunkname: 'Table' */ '@/views/table')
const Form = () => import(/* webpackChunkname: 'Form' */ '@/views/form')
export default [{
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
