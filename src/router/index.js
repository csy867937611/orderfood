import Vue from 'vue'
import VueRouter from 'vue-router'
import order from '../component/order/order.vue'
import adminHome from '../component/adminHome/home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:order},
		{path:'/adminHome',component:adminHome}

	]
})

export default router ;