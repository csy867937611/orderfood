import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex/store.js';
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
