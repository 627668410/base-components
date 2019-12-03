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
      this.tableData = res.list
      this.params.currentPage = res.currentPage
      this.params.pageSize = res.pageSize
      this.params.total = res.totalSize
    }
  }
}
