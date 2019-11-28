<template>
  <div>
    <b-table :columns="columns"
             :dataSource="tableData"
             :options="options"
             @selection-change="onSelect" />
    <pagination :currentPage="params.currentPage"
                :pageSize="params.pageSize"
                :total="params.total"
                @change="pageChange" />
    <div>{{rowData.name}}</div>
  </div>
</template>

<script>
import BTable from '@/components/table'
import Pagination from '@/components/pagination'
import TableInit from './mixins/tableInit'
import Page from '@/mixins/page'
export default {
  mixins: [TableInit, Page],
  components: {
    BTable,
    Pagination
  },
  data() {
    return {
      rowData: {}
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
</style>
