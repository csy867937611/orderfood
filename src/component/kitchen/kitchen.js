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
 	}
};

const mutations = {
	center: (data) => {
		console.log(1111111111111)
		

		var socket = io.connect('ws://10.3.134.54:1703');
		socket.on('chilken', function(message){
			
		console.log(message)
			
		});
	}
	
};



export default {
	state,
	actions,
	mutations
}