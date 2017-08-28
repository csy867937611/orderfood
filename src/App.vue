<template>
  <div id="app">
    <router-view></router-view>
    <spinner v-show="false"></spinner>
  </div>
</template>

<script type="text/javascript">

  var deviceWidth = document.documentElement.clientWidth;   
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  //1rem=100px  就是所有的css属性的属性值都是用rem来表示

  import spinner from './component/spinner/spinner.vue';
  import kitchen from './component/kitchen/kitchen.vue';
  import jiedan from './component/jiedan/jiedan.vue';
  export default {
    name: "app",
    components: {
      spinner,
      kitchen,
      jiedan
    }
  }

</script>

<style lang="scss">
  *{margin:0;padding:0;}
  #app {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #fff
  }
</style>


