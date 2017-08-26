import Vue from 'vue'
import Vuex from 'vuex'
import hot_nav from '../component/order/hot_nav/hot_nav'
import waiter from '../component/waiter/waiter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hot_nav,
        waiter
    }
})