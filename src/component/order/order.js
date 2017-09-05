import http from '../../utils/HttpClient';
import Vue from 'vue';

const state = {
	data: [],
	newFood: [] 

};

const actions = {
 	getHot: (store, arg)=>{
 		console.log('actions')
 		store.commit('getHot', arg);
 	}
};

const mutations = {
	//查找全部菜品；
	getHot: (data, arg)=>{

		http.post('query').then(res=>{
			console.log(res)
			res.data.map(item=>{
				if(item.isFamous == 'Y'){
					state.data.push(item);
				}
			});
			var num = parseInt(state.data.length/4);
			console.log('num', num)
			state.newFood = state.data.splice(0,5)
			// for(var i = 0; i < num; i++){
			// 	state.newFood.push(state.data[i]);
			// }
		})
	}
};

export default {
	state,
	actions,
	mutations
}