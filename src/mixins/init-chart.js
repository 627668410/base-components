let echart = require('echarts/lib/echarts')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
require('echarts/lib/component/title')
export default {
  methods: {
    // 初始化报表
    _initChart(id, option) {
      let chart = this.charts[id]
      if (chart) {
        chart.clear()
        chart.setOption(option)
      } else {
        const dom = document.getElementById(id)
        if (dom) {
          chart = echart.init(dom)
          if (this.charts instanceof Object) {
            this.charts[id] = chart
          } else {
            console.error('请传入对象类型的charts来存储图表')
          }
          chart.setOption(option)
        } else {
          console.error('dom元素不存在')
        }
      }
      window.onresize = () => {
        for (let i in this.charts) {
          this.charts[i].resize()
        }
      }
    }
  }
}
