<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {

  margin-top: 0px;
}
body .el-table th.gutter{
  display: table-cell!important;
}
</style>
