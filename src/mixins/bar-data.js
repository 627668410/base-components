export default {
  methods: {
    _dealBarData(resource, xAxisName = 'name', value = 'value', showName = 'name', showValue = 'ratio') {
      const xAxis = []
      const data = []
      const showData = {}
      resource.forEach(item => {
        xAxis.push(item[xAxisName])
        data.push(item[value])
        showData[item[showName]] = item[showValue]
      })
      return [xAxis, data, showData]
    }
  }
}
