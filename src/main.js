import $ from 'jquery'
import baseurl from './assets/common/common.js'
//插件样式
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/common/common.scss'
import './assets/font-awesome/font-awesome.css'
import './assets/jquery-confirm/jquery-confirm.css'
import './assets/bootstrap/datepicker/css/datepicker.css'

//icon-font;
import './assets/icon-font/iconfont.css';

import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex/store.js'

import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
