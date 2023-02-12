<template>
  <div id="app">
    <sci-topnav></sci-topnav>
    <router-view></router-view>
  </div>
</template>

<script>
import SciTopnav from '@/components/topnav.vue'
export default {
  name: 'sci-ui',
  components: { SciTopnav }
}
</script>

<style lang="less" scoped>
#app {
  width: 1200px;
  margin: 0 auto;
}
</style>
