require('echarts/lib/chart/bar')
export default {
  methods: {
    _initOption ({ title, min, max }, mapData) {
      let option = {
        title: {
          show: true,
          text: title,
          left: '35%'
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            if (params.data) {
              return `${params.name}(<span style="font-size:10px;">各省价格指数:
          ${params.data.value}</span>)`
            }
          }
        },
        visualMap: {
          type: 'continuous',
          text: ['高', '低'],
          showLabel: true,
          seriesIndex: [0],
          min: min,
          calculable: true,
          max: max,
          inRange: {
            color: ['#ED1C24', '#FFB27D', '#BFB500', '#22B14C'],
            symbolSize: [30, 100]
          },
          textStyle: {
            color: '#000'
          },
          bottom: '-5',
          left: 0
        },
        geo: {
          roam: true,
          map: 'china',
          layoutCenter: ['50%', '50%'],
          layoutSize: '100%',
          label: {
            emphasis: {
              show: false
            }
          },
          scaleLimit: {
            min: 1.2,
            max: 10
          },
          itemStyle: {
            emphasis: {
              areaColor: '#fff464'
            }
          }

        },
        series: [{
          name: 'mapSer',
          type: 'map',
          roam: false,
          geoIndex: 0,
          label: {
            show: false
          },
          data: mapData
        }]
      }
      return option
    }
  }
}
