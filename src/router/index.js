import Vue from 'vue'
import VueRouter from 'vue-router'
import order from '../component/order/order.vue'
import waiter from '../component/waiter/waiter.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:order},
		{path:'/waiter',component:waiter}
	]
})

export default router ;