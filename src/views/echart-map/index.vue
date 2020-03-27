<template>
  <div class="echart-map">
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
import MapChart from '@/mixins/map-chart'
// import MapData from '@/mixins/bar-data'
import { getMapData } from '@/api/echarts'
// import { upColor, downColor, gray } from '@/styles/variables.scss'
export default {
  mixins: [InitChart, MapChart],
  components: { Document },
  data() {
    return {
      charts: {},
      option: {
        id: 'map',
        title: '地图',
        loading: false
      }
    }
  },
  mounted() {
    this._getMapData()
  },
  methods: {
    async _getMapData() {
      const option = this.option
      option.loading = true
      const [err, res] = await getMapData()
      option.loading = false
      if (err) return
      const [xAxis, chartData, showData] = this._dealMapData(res, 'name', 'price')
      const chartOption = this._initOption(option, xAxis, chartData, showData)
      this._initChart(option.id, chartOption)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.echart-map {
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
