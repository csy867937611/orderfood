<template>
  <div id="app">
    <router-view></router-view>
    <spinner v-show="false"></spinner>
  </div>
</template>

<script type="text/javascript">
  import spinner from './component/spinner/spinner.vue'
  export default{
    components: {
      spinner
    }
  }
</script>

<style lang="scss">
  *{margin:0;padding:0;}
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff
  }
</style>


