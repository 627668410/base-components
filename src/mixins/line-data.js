import { COLOR } from '@/consts'
export default {
  methods: {
    // data:源数据，name：legend，value：显示的数据
    _dealLineData(data, name = 'brand', value = 'price') {
      const legend = []
      let xAxis = []
      let chartData = []
      let valueObj = {} // 数据处理的暂存值
      // 拿到图表数据的中间值以及基本的数据获取
      for (let i in data) {
        xAxis.push(i)
        if (data[i] instanceof Array) {
          data[i].forEach(item => {
            legend.push(item[name])
            const valueArr = valueObj[item[name]]
            if (valueArr) {
              valueArr.push(item[value])
            } else {
              valueObj[item[name]] = [item[value]]
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
          type: 'line',
          itemStyle: {
            color: COLOR[colorIndex] ? COLOR[colorIndex] : COLOR[colorIndex - 2]
          },
          data: valueObj[i]
        })
      }
      // console.log('valueObj', valueObj)
      return [new Set(legend), xAxis, chartData]
    }
  }
}
