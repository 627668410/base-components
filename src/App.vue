<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
#app {
  height: calc(100% - #{$navBarHeight});
}
</style>
