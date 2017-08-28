import http from '../../utils/HttpClient';
import Vue from 'vue';

const state = {
	data: [],
	all: [],
	category: []
}

const actions = {
 	jie: (store, n)=>{
 		// console.log('actions')
 		store.commit('jie', n);
 		console.log(store)
 	}
}

const mutations = {
	jie: (data) =>{
		console.log(data)
		var message = '菜名：满汉全席  制作时间：60 分钟';
		var mess = encodeURIComponent(message);
		// 转码函数 decodeURIComponent()
		// 解码函数 encodeURIComponent()
		var socket = io.connect('ws://localhost:1703');
		socket.emit('server',mess);
	}
}

export default {
	state,
	actions,
	mutations
}