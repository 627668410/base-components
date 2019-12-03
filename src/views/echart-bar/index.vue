<template>
  <div class="echart-bar">
    <div :id="option.id"
         class="left"
         v-loading="option.loading"></div>
    <div class="right">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <document style="height:100%;" />
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import Document from './components/Document'
import InitChart from '@/mixins/init-chart'
import BarChart from '@/mixins/bar-chart'
import BarData from '@/mixins/bar-data'
import { getBarData } from '@/api/echarts'
import { upColor, downColor, gray } from '@/styles/variables.scss'
export default {
  mixins: [InitChart, BarChart, BarData],
  components: { Document },
  data() {
    return {
      charts: {},
      option: {
        id: 'bar',
        title: '折线图',
        name: '均价（元）',
        loading: false
      }
    }
  },
  mounted() {
    this._getBarData()
  },
  methods: {
    async _getBarData() {
      const option = this.option
      option.loading = true
      const [err, res] = await getBarData()
      option.loading = false
      if (err) return
      const [xAxis, chartData, showData] = this._dealBarData(res, 'name', 'price')
      const chartOption = this._initOption(option, xAxis, chartData, showData)
      chartOption.series[0] = Object.assign(chartOption.series[0], {
        label: {
          show: true,
          position: 'top',
          formatter(params) {
            const seriesData = showData[params.name]
            if (seriesData === 0) {
              return `{gray|${seriesData}}`
            } else if (seriesData > 0) {
              return `{red|${seriesData}}`
            } else {
              return `{green|${seriesData}}`
            }
          },
          rich: {
            red: {
              color: upColor
            },
            green: {
              color: downColor
            },
            gray: {
              color: gray
            }
          }
        }
      })
      console.log(chartOption)
      this._initChart(option.id, chartOption)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.echart-bar {
  @include flex();
  justify-content: space-between;
  height: 100%;
  .left,
  .right {
    width: 45%;
    height: 100%;
  }
}
</style>
