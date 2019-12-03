<template>
  <div class="echart-stack">
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
import StackChart from '@/mixins/stack-chart'
import StackData from '@/mixins/stack-data'
import { getStackData } from '@/api/echarts'
import { upColor, downColor, gray } from '@/styles/variables.scss'
export default {
  mixins: [InitChart, StackChart, StackData],
  components: { Document },
  data() {
    return {
      charts: {},
      option: {
        id: 'stack',
        title: '堆叠图',
        name: '均价（元）',
        loading: false
      }
    }
  },
  mounted() {
    this._getStackData()
  },
  methods: {
    async _getStackData() {
      const option = this.option
      option.loading = true
      const [err, res] = await getStackData()
      option.loading = false
      if (err) return
      const [legend, xAxis, chartData, showData] = this._dealStackData(res)
      let chartOption = this._initOption(option, [...legend], xAxis, chartData, showData)
      chartOption.tooltip = Object.assign(chartOption.tooltip, {
        formatter(params) {
          let text = ``
          params.forEach(item => {
            const seriesData = showData[item.axisValue][item.seriesName]
            text += `<span style="display:inline-block;padding-right:20px;float:left">${item.seriesName}</span>
                           <span style="color: ${seriesData === 0 ? gray : seriesData > 0 ? upColor : downColor};float:right">${seriesData}</span>
                           <br/>`
          })
          return text
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
.echart-stack {
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
