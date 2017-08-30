import http from '../../utils/HttpClient';
import Vue from 'vue';



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

		var socket = io.connect('ws://10.3.134.54:1703');
		socket.on('chilken', function(message){
			
		console.log(message)
			
		});
	},
	topover: (data, n)=>{

		var abc = encodeURI(JSON.stringify(n));
		var socket = io.connect('ws://10.3.134.54:1703');
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