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
 		// console.log('actions')
 		store.commit('jie', n);
 		console.log(store)
 	}
}

const mutations = {
	jie: (data,n) =>{
				
		var mess = encodeURI(JSON.stringify(state.data))
		
		var socket = io.connect(_wsurl);
		socket.emit('cooking', mess);
		socket.on('kitchen', function(mess){
			console.log(JSON.parse(decodeURI(mess)));
		})

		// socket.on('clientOrder', function(data){
		// 	console.log(12321)
		// 	 console.log(JSON.parse(decodeURI(data)));
		// })
		
	}
}

export default {
	state,
	actions,
	mutations
}