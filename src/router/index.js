import Vue from 'vue';
import VueRouter from 'vue-router';
import order from '../component/order/order.vue';

import home from '../component/home/home.vue';

import waiter from '../component/waiter/waiter.vue';

import foodlist from '../component/foodlist/foodlist.vue';


Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{path:'/',component:order},
		//{path: '/home', component: foodlist},设置默认级路由并显示；

		{path:'/home',component:home, redirect: '/home', 
			children: [
				{path: '/home', component: foodlist},
				{path: '/沙拉', component: foodlist},
				{path: '/小吃', component: foodlist},
				{path: '/主菜', component: foodlist},
				{path: '/汤品', component: foodlist},
				{path: '/主食', component: foodlist},
				{path: '/甜点', component: foodlist},
				{path: '/饮品', component: foodlist}
			]
		},

		{path:'/waiter',component:waiter}

	]
})

export default router ;