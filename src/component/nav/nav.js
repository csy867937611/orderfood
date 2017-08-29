import http from '../../utils/HttpClient';
import Vue from 'vue';

const state = {
	data: [],
	all: [],
	category: [],
	className: [],
	cart: []
};

const actions = {
 	chendata: (store, arg)=>{
 		console.log('actions')
 		store.commit('chendata', arg);
 	},
 	category: (store, arg)=>{
 		console.log('action', arg)
 		store.commit('category', arg);
 	},
 	chenKeyword: (store, arg)=>{
 		console.log('chenKeyword')
 		store.commit('chenKeyword', arg);
 	}
};

const mutations = {
	//查找全部菜品；
	chendata: (data, arg)=>{

		//获取localstorage;
		var currentCart = localStorage.cart;
		if(currentCart){
			currentCart = JSON.parse(currentCart);
		} else {
			currentCart = [];
		};

		http.post('query').then(res=>{

			//去重；
			var arr =[];
			res.data.map((item, idx)=>{
				arr.push(item.category);
				item.num = 0;
				currentCart.map((item2, idx2)=>{
					
					if(item2.ID == item.ID){
						item.num = item2.num;
					}
				})

			});
			var arr2 = arr.filter((item,idx, self)=>{
				return self.indexOf(item) == idx;
			})
			console.log("arr",arr2)
			state.data = arr2;
			state.category = res.data;
			state.all = res.data;
		

		})
	},
	//查找分类；
	category: (data, arg)=>{
		console.log('mutations', arg);

		//循环找到同类的菜品；
		var same = [] ;
		state.all.map((item, idx)=>{
			if(item.category == arg.category){
				same.push(item)
			}
		});
		state.category = same;
		console.log(state.category)

		// http.post('getCategory', arg).then((res)=>{
		// 	console.log(res);
		// 	state.category = res;
		// })
	},
	chenKeyword: (data, arg)=>{
		http.post('keyword', arg).then(res=>{
			console.log('success', res)
			state.category = res.data
		})
	}
};

export default {
	state,
	actions,
	mutations
}