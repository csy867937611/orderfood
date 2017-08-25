import Vue from 'vue'
import VueRouter from 'vue-router'
import order from '../component/order/order.vue'
import adminHome from '../component/adminHome/home.vue'

import home from '../component/home/home.vue'

import waiter from '../component/waiter/waiter.vue'


Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:order},
		{path:'/adminHome',component:adminHome}
		{path:'/home',component:home},
		{path:'/waiter',component:waiter}
	]
})

export default router ;