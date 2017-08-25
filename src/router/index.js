import Vue from 'vue'
import VueRouter from 'vue-router'
import order from '../component/order/order.vue'
import home from '../component/home/home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:order},
		{path:'/home',component:home}

	]
})

export default router ;