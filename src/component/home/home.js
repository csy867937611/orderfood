import http from '../../utils/HttpClient';
import Vue from 'vue';
import {Notification} from 'element-ui';

const state = {
	show: false,
	time: []
};
const actions = {
	timer: (store, n)=>{

		var time = 5;
		var timer = timer + n.ID;
		timer = setInterval(()=>{
			time--;
			
			var m = Math.floor(time/60%60);
			var s = Math.floor(time%60);
			
			
			store.commit('timer', m + ':'+ s);
			if(time == 0){
				clearInterval(timer);
				Vue.set(state.time, 0, null);
				

		       Notification({
		          title: n.name,
		          duration: 5000,
		          message: '您的菜马上就好了！'
		        });
				
				return;
			}
		}, 1000)
		
	}
};

const mutations = {
	timer: (data, n)=>{
		Vue.set(state.time, 0, n)
		console.log(123321, state.time);

		// Vue.set(example1.items, indexOfItem, newValue)
		/*	由于 JavaScript 的限制， Vue 不能检测以下变动的数组：
			当你利用索引直接设置一个项时，例如： vm.items[indexOfItem] = newValue
			当你修改数组的长度时，例如： vm.items.length = newLength
			为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果， 同时也将触发状态更新：
			// Vue.set
			Vue.set(example1.items, indexOfItem, newValue)
			// Array.prototype.splice
			example1.items.splice(indexOfItem, 1, newValue)
			为了解决第二类问题，你可以使用 splice：
			example1.items.splice(newLength)
		*/

	}
}


export default {
	state,
	actions,
	mutations
}