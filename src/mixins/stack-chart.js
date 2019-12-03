require('echarts/lib/chart/bar')
export default {
  methods: {
    _initOption({ title, name }, legend, xAxis, data, showData) {
      let option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#fff',
          textStyle: {
            color: '#000'
          },
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          text: title,
          textAlign: 'center',
          x: '50%'
        },
        grid: {
          left: '15%',
          bottom: '10%'
        },
        legend: {
          data: legend,
          bottom: 0,
          left: 'center'
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
          axisLine: {
            lineStyle: {
              width: 0
            }
          },
          splitLine: {
            lineStyle: {
              color: '#ccc',
              type: 'dotted'
            }
          },
          type: 'value'
        },
        series: data
      }
      return option
    }
  }
}
