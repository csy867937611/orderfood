import Vue from 'vue'
import Vuex from 'vuex'
import waiter from '../component/waiter/waiter';
import hot_nav from '../component/order/hot_nav/hot_nav';
import nav from '../component/nav/nav.js';
<<<<<<< HEAD
import detail from '../component/waiter/details/detail'
=======
import home from '../component/home/home.js';
>>>>>>> 37671e8cf7ccad620d0df5d2f733164ab47dc460


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hot_nav,
        waiter,
        nav,
<<<<<<< HEAD
        detail
=======
        home
>>>>>>> 37671e8cf7ccad620d0df5d2f733164ab47dc460
    }
})