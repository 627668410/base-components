import { COLOR } from '@/consts'
export default {
  methods: {
    _dealStackData(data, xAxisName = 'name', yAxisName = 'price', showName = 'name', showValue = 'ratio') {
      const legend = []
      let xAxis = []
      let showData = {}
      let chartData = []
      let valueObj = {} // 数据处理的暂存值
      // 拿到图表数据的中间值以及基本的数据获取
      for (let i in data) {
        showData[i] = {}
        xAxis.push(i)
        if (data[i] instanceof Array) {
          // 数据处理
          data[i].forEach(item => {
            showData[i][item[showName]] = item[showValue]
            legend.push(item[xAxisName])
            const valueArr = valueObj[item[xAxisName]]
            // name：显示的文字字段，price：值的字段
            if (valueArr) {
              valueArr.push(item[yAxisName])
            } else {
              valueObj[item[xAxisName]] = [item[yAxisName]]
            }
          })
        } else {
          console.error(`stack-data里对象里每个分类的值应该是数组,但是拿到的是${typeof data[i]}`)
        }
      }
      // 获取图表数据
      let colorIndex = -1
      for (let i in valueObj) {
        colorIndex++
        chartData.push({
          name: i,
          type: 'bar',
          stack: '总量',
          itemStyle: {
            color: COLOR[colorIndex] ? COLOR[colorIndex] : COLOR[colorIndex - 2]
          },
          data: valueObj[i]
        })
      }
      return [new Set(legend), xAxis, chartData, showData]
    }
  }
}
