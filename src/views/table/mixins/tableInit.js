import { getTableList } from '@/api/components'
export default {
  data() {
    return {
      buttonData: [{
        name: 'add',
        label: '添加'
      }, {
        name: 'delete',
        label: '删除',
        disabled: true
      }],
      columns: [{
        prop: 'roleName',
        label: '角色名称'
      },
      {
        prop: 'account',
        label: '账户名'
      },
      {
        prop: 'createAccount',
        label: '创建者'
      },
      {
        prop: 'createTime',
        label: '创建时间'
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
      const [err, res] = await this.$to(getTableList({ currentPage, pageSize }))
      if (err) {
        this.options.loading = false
        return
      }
      this.options.loading = false
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
    init() {
      // 表格数据初始化
      this._setTableData(this.params)
    }
  }
}
