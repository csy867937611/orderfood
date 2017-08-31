import http from '../../utils/HttpClient';
import Vue from 'vue';
import wsurl from '../../assets/common/common.js'

var _wsurl = wsurl.global.wsurl;
const state = {
	data: [],
	receive: [],
	category: []
}

const actions = {
 	jie: (store, n)=>{
 		store.commit('jie', n);
 	},
 	topover: (store, n)=>{
 		store.commit('topover', n);
 	}
}

const mutations = {
	jie: (data,n) =>{
		var mess = encodeURI(JSON.stringify(state.data))
		var socket = io.connect(_wsurl);
		socket.emit('cooking', mess);
		socket.on('kitchen', function(mess){
			state.data = JSON.parse(decodeURI(mess));
			console.log(11111,'mess')
		})
		
	},
	topover: (data, n)=>{

		var abc = encodeURI(JSON.stringify(state.data));
		var socket = io.connect(_wsurl);
		socket.emit('success', abc);
		// socket.on('suc', function(abc){
		// 	// console.log(abc);
		// })
	}
}

export default {
	state,
	actions,
	mutations
}