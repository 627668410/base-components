<template>
  <div class="table">
    <div class="left">
      <b-table :columns="columns"
               :dataSource="tableData"
               :options="options"
               @selection-change="onSelect" />
      <pagination :currentPage="params.currentPage"
                  :pageSize="params.pageSize"
                  :total="params.total"
                  @change="pageChange" />
      <div class="edit-data">{{rowData.name}}</div>
    </div>
    <div class="right">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <document style="height:100%;"/>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import BTable from '@/components/table'
import Pagination from '@/components/pagination'
import Document from './componets/Document'
import TableInit from './mixins/tableInit'
import Page from '@/mixins/page'
export default {
  mixins: [TableInit, Page],
  components: {
    BTable,
    Pagination,
    Document
  },
  data() {
    return {
      rowData: {
        name: '这是修改的name'
      }
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.table {
  @include flex();
  justify-content: space-between;
  height: 100%;
  .left,
  .right {
    width: 45%;
    // padding: 20px;
    height: 100%;
  }
}
.edit-data {
  width: 100%;
  text-align: center;
}
</style>
