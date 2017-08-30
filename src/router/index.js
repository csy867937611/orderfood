import Vue from 'vue'
import VueRouter from 'vue-router'
import order from '../component/order/order.vue'
import adminHome from '../component/adminHome/home.vue'
import kitchen from '../component/kitchen/kitchen.vue'
import jiedan from '../component/jiedan/jiedan.vue'
import home from '../component/home/home.vue';
import waiter from '../component/waiter/waiter.vue';
import foodlist from '../component/foodlist/foodlist.vue';
import nav from '../component/nav/nav.vue';
import cart from '../component/cart/cart.vue';
import clients from '../component/clients/clients.vue'
import client from '../component/client/client.vue'
import detail from '../component/waiter/details/detail.vue';
import update from '../component/update/update.vue'
import paid from '../component/paid/paid.vue';

import client_kitchen from '../component/client_kitchen/client_kitchen.vue';


import schedule from '../component/schedule/schedule.vue';


Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:order},
		{path:'/adminHome', component:adminHome, children:[
			{path:'/clients', name:'clients', component:clients},
			{path:'/client', name:'client', component:client},
			{path: '/update', name: 'update', component:update}
		]},
		//{path: '/home', component: foodlist},设置默认级路由并显示；

		{path:'/home',component:home, redirect: '/home', 
			children: [
				{path: '/home', component: nav},
				{path: '/沙拉', component: nav},
				{path: '/小吃', component: nav},
				{path: '/主菜', component: nav},
				{path: '/汤品', component: nav},
				{path: '/主食', component: nav},
				{path: '/甜点', component: nav},
				{path: '/饮品', component: nav},
				{path: '/callWaiter', component: {template: '<div>hello world!</div>'}},
				{path: '/cart', component: cart},
				{path: '/client_kitchen', component: client_kitchen}

			]
		},
		{path:'/waiter',component:waiter},
		{path:'/detail',component:detail},
		{path:'/paid',component:paid},
		{path:'/kitchen',component:kitchen},
		{path:'/jiedan',component:jiedan},
		{path:'/schedule',component:schedule}

	]
})

export default router ;