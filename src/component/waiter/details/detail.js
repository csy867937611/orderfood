import Vue from 'vue';
import $ from 'jquery';

const state = {
	arr:[{name:'红烧牛肉面',price:98},{name:'普罗旺斯海鲜沙拉',price:97},{name:'香酥鱿鱼圈',price:90},{name:'夏日风情沙拉',price:99}],
	newarr:[]
}

const actions = {
	showDetail:(store)=>{
		store.commit('showDetail')
	}
}

const mutations = {
	showDetail:(data)=>{
		var message = [{name:'红烧牛肉面',schedule:'进行中'}];
		var socket = io.connect('ws://localhost:1703');
		socket.emit('server',JSON.stringify(message));
		socket.on('ser',function(message){
			console.log(message)
			for(var i = 0 ;i < state.arr.length;i++){
				/*console.log(666,message);*/
				for(var j = 0 ; j < message.length;j++){
					/*console.log(777,message[0]);*/
					if(state.arr[i].name !== message[j].name){
						/*console.log(888,message)*/
						var newobj = $.extend(message[j],state.arr[i]);
						state.newarr.push(newobj);
						console.log(newobj);
					}
				}
			}
		})
		console.log(state.newarr)
	}
}

export default{
	state,
	actions,
	mutations
}