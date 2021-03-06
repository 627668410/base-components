import { getTableList } from '@/api/components'
export default {
  data() {
    return {
      columns: [{
        prop: 'name',
        label: '名称'
      },
      {
        prop: 'value',
        label: 'value'
      },
      {
        label: '禁用',
        width: 50,
        render: (h, row, index) => {
          return (<el-switch
            value={row.forbidden === 0}
            onChange={(val) => this.onChange(row.id, val)}
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>)
        }
      },
      {
        label: '操作栏',
        button: true,
        group: [{
          name: '修改',
          type: 'primary',
          plain: true,
          onClick: (row, index) => { // 箭头函数写法的 this 代表 Vue 实例
            this.onEditClick(row)
          }
        }]
      }
      ],
      options: {
        mutiSelect: true,
        loading: false, // 表格动画
        border: false
      }
    }
  },
  methods: {
    // 表格分页请求
    async _setTableData({ currentPage = 1, pageSize = 10 }) {
      this.options.loading = true
      const [err, res] = await getTableList({ currentPage, pageSize })
      this.options.loading = false
      if (err) return
      this.setPageParams(res)
    },
    // 页码发生变化
    pageChange(params) {
      // 表格数据更新
      this._setTableData(params)
    },
    onEditClick(row) {
      this.rowData = row
      console.log(row)
    },
    onChange(id, val) {
      this.$message.success('我变了')
    },
    init() {
      // 表格数据初始化
      this._setTableData(this.params)
    }
  }
}
