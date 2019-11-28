<template>
  <div class="pagination">
    <div class="pagination-content">
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        :layout="layout"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page',
  props: {
    // 当前页
    currentPage: {
      type: Number,
      default: 1
    },
    // 当前每页条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 每页条数
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next'
    },
    total: {
      type: Number,
      required: true
    }
  },
  watch: {
    currentPage(newVal) {
      this.params.currentPage = newVal || 1
    },
    pageSize(newVal) {
      this.params.pageSize = newVal || 10
    }
  },
  data () {
    return {
      params: {
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.params.currentPage = 1
      this.params.pageSize = val
      this.$emit('change', this.params)
    },
    handleCurrentChange (val) {
      this.params.currentPage = val
      this.$emit('change', this.params)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  &-content {
    margin: 15px 10px;
  }
}
</style>
