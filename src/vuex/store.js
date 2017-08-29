import Vue from 'vue'
import Vuex from 'vuex'
import waiter from '../component/waiter/waiter';
import hot_nav from '../component/order/hot_nav/hot_nav';
import nav from '../component/nav/nav.js';
import kitchen from '../component/kitchen/kitchen.js';
import jiedan from '../component/jiedan/jiedan.js';


import home from '../component/home/home.js';
import detail from '../component/waiter/details/detail'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hot_nav,
        nav,

        kitchen,
        jiedan,
        waiter,
        home,
        
        detail
      
    }
})