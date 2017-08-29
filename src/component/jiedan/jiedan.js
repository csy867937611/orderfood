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
	jie: (data,n) =>{
		console.log(n);
		
		var mess = encodeURI(JSON.stringify(n))
		// var mess = new InputStreamReader(server.getInputStream(n),"GBK"); 
		
		// 转码函数 decodeURIComponent()
		// 解码函数 encodeURIComponent()
		var socket = io.connect('ws://10.3.134.54:1703');
		socket.emit('cooking', mess);
		socket.on('kitchen', function(mess){
			console.log(JSON.parse(decodeURI(mess)));
		})
		
	}
}

export default {
	state,
	actions,
	mutations
}