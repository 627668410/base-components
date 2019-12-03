<template>
  <div class="echart-line">
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
import LineChart from '@/mixins/line-chart'
import LineData from '@/mixins/line-data'
import { getLineData } from '@/api/echarts'
export default {
  mixins: [InitChart, LineChart, LineData],
  components: { Document },
  data() {
    return {
      charts: {},
      option: {
        id: 'line',
        title: '折线图',
        name: '均价（元）',
        loading: false
      }
    }
  },
  mounted() {
    this._getLineData()
  },
  methods: {
    async _getLineData() {
      const option = this.option
      option.loading = true
      const [err, res] = await getLineData()
      option.loading = false
      if (err) return
      const [legend, xAxis, chartData] = this._dealLineData(res, 'name', 'price')
      const chartOption = this._initOption(option, [...legend], xAxis, chartData)
      this._initChart(option.id, chartOption)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.echart-line {
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
