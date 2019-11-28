<template>
  <div>
    <b-table :columns="columns"
             :dataSource="tableData"
             :options="options"
             @selection-change="onSelect" />
    <div>{{rowData}}</div>
  </div>
</template>

<script>
import BTable from '@/components/table'
import TableInit from './mixins/tableInit'
export default {
  mixins: [TableInit],
  components: {
    BTable
  },
  data() {
    return {
      rowData: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
