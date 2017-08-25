import Vue from 'vue'
import VueRouter from 'vue-router'
import order from '../component/order/order.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:order}

	]
})

export default router ;