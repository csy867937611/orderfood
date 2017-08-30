import Vue from 'vue';
import $ from 'jquery';
import wsurl from '../../../assets/common/common.js'

var _wsurl = wsurl.global.wsurl;

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
		console.log(666)
		var socket = io.connect(_wsurl);
			socket.on('clientOrder',function(order){
				var orders = JSON.parse(decodeURI(order));
				if(orders){
					console.log(orders);
					state.newarr = state.newarr.concat(orders);
				}
			}.bind(this))
		console.log(state.newarr)
	}
}

export default{
	state,
	actions,
	mutations
}