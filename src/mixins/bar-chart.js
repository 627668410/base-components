require('echarts/lib/chart/bar')
export default {
  methods: {
    _initOption({ title, name }, xAxis, data, showData) {
      let option = {
        title: {
          text: title,
          textAlign: 'center',
          x: '50%'
        },
        grid: {
          left: '15%'
        },
        xAxis: {
          type: 'category',
          data: xAxis,
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          name: name,
          splitLine: {
            lineStyle: {
              color: '#ccc',
              type: 'dotted'
            }
          },
          axisLine: {
            lineStyle: {
              width: 0
            }
          },
          type: 'value'
        },
        series: [{
          data: data,
          type: 'bar',
          itemStyle: {
            color: '#768DE2'
          }
        }]
      }
      return option
    }
  }
}
