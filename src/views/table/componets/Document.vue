<template>
  <div class="document">
    <div v-for="item of document"
         :key="item.title">
      <h2>{{item.title}}</h2>
      <ul>
        <li v-for="(li,index) of item.content"
            :key="index">{{li}}</li>
      </ul>
      <div v-html="item.define"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      document: [
        {
          title: 'dataSource（数据源，要求是数组格式，必填字段）'
        },
        {
          title: 'options（配置项，要求是对象格式，必填字段）',
          content: [
            'loading：控制v-loading,默认false',
            'maxHeight：设置后固定表头，默认表格高度600',
            'indexLabel：序号列的名称，默认为"序号"',
            'stripe：斑马纹，默认false',
            'border：表格是否有border，默认true',
            'mutiSelect：是否有多选列，默认false',
            'mutiSelectPosition：多选列的位置：left，right，默认left',
            'index：序号，默认false',
            'headerClass：头部样式类，默认table-header',
            'selectable：类型为 Function(row, index)，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选'
          ]
        },
        {
          title: 'columns（配置表格中的数据）',
          content: [
            'prop：和数据源中的列名对应起来，绑定数据',
            'label：列名的名称',
            'align：该列文字的排列，默认"center"居中',
            'width：列宽',
            'fixed：该列是否固定',
            'sortable：该列是否排序',
            'render：自定义渲染函数',
            'button：设置为true，表示按钮列',
            'group：配置按钮，要求数组格式'
          ],
          define: `
            <div style="margin-left:20px;line-height:30px">
              <ul>
                <li>type：按钮类型</li>
                <li>size：按钮大小，默认mini</li>
                <li>icon：按钮图标，默认''</li>
                <li>disabled：是否禁用，默认false</li>
                <li>plain：是否为朴素按钮，默认false</li>
                <li>onClick：点击函数，function(row,index)</li>
              </ul>
            </div>
          `
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.document {
  li {
    line-height: 30px;
  }
}
</style>
