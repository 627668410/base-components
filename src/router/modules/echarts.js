const EchartMap = () => import(/* webpackChunkname: 'EchartMap' */ '@/views/echart-map')
const EchartLine = () => import(/* webpackChunkname: 'EchartLine' */ '@/views/echart-line')
const EchartBar = () => import(/* webpackChunkname: 'EchartBar' */ '@/views/echart-bar')
const EchartStack = () => import(/* webpackChunkname: 'EchartStack' */ '@/views/echart-stack')
export default [
  {
    path: '/echarts/map',
    name: 'echart_map',
    component: EchartMap,
    meta: {
      title: '地图'
    }
  },
  {
    path: '/echarts/line',
    name: 'echart_line',
    component: EchartLine,
    meta: {
      title: '折线图'
    }
  },
  {
    path: '/echarts/bar',
    name: 'echart_bar',
    component: EchartBar,
    meta: {
      title: '柱状图'
    }
  },
  {
    path: '/echarts/stack',
    name: 'echart_stack',
    component: EchartStack,
    meta: {
      title: '堆叠图'
    }
  }
]
