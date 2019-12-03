require('echarts/lib/chart/line')
export default {
  methods: {
    _initOption({ title, name }, legend, xAxis, data) {
      let option = {
        title: {
          text: title,
          textAlign: 'center',
          x: '50%'
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#fff',
          textStyle: {
            color: '#000'
          }
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
          data: xAxis
        },
        yAxis: {
          name: name,
          // nameLocation: 'center',
          // nameGap: 50,
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
        series: data
      }
      return option
    }
  }
}
