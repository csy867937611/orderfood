import http from '../../utils/HttpClient';
import Vue from 'vue';
import wsurl from '../../assets/common/common.js'

var _wsurl = wsurl.global.wsurl;


const state = {
	data: [],
	all: [],
	category: []
};

const actions = {
 	center: (store, n)=>{
 		// console.log('actions')
 		store.commit('center', n);
 		console.log(store)
 	},
 	topover: (store, n)=>{
 		store.commit('topover', n);
 		console.log(store)
 	}
};

const mutations = {
	center: (data) => {
		console.log(1111111111111)
		

		var socket = io.connect(_wsurl);
		socket.on('chilken', function(message){
			
		console.log(message)
			
		});
	},
	topover: (data, n)=>{

		var abc = encodeURI(JSON.stringify(n));
		var socket = io.connect(_wsurl);
		socket.emit('success', abc);
		socket.on('suc', function(abc){
			console.log(JSON.parse(decodeURI(abc)));
		})
	}
	
};



export default {
	state,
	actions,
	mutations
}