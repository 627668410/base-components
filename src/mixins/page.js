export default {
  data() {
    return {
      params: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      tableData: []
    }
  },
  methods: {
    setPageParams(res) {
      this.tableData = res.data.list
      this.params.currentPage = res.data.currentPage
      this.params.pageSize = res.data.pageSize
      this.params.total = res.data.totalSize
    }
  }
}
