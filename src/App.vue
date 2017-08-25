<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
 
  var deviceWidth = document.documentElement.clientWidth;   
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  //1rem=100px  就是所有的css属性的属性值都是用rem来表示
  export default{
    name: "app"
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


