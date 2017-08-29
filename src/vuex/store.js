import Vue from 'vue'
import Vuex from 'vuex'
import waiter from '../component/waiter/waiter';
import hot_nav from '../component/order/hot_nav/hot_nav';
import nav from '../component/nav/nav.js';
import detail from '../component/waiter/details/detail'
import home from '../component/home/home.js';


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hot_nav,
        waiter,
        nav,
        detail,
        home

    }
})