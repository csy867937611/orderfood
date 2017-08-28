import Vue from 'vue'
import Vuex from 'vuex'
import hot_nav from '../component/order/hot_nav/hot_nav';
import nav from '../component/nav/nav.js';
import kitchen from '../component/kitchen/kitchen.js';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hot_nav,
        nav,
        kitchen
    }
})