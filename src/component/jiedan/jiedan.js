import http from '../../utils/HttpClient';
import Vue from 'vue';

const state = {
	data: [],
	all: [],
	category: []
};

const actions = {
 	jie: (store, n)=>{
 		console.log('actions')
 		store.commit('jie', n);
 		console.log(store)
 	},
 	category: (store, n)=>{
 		console.log('action', n)
 		store.commit('category', n);
 	}
};

const mutations = {
	jie: (store) =>{
		console.log(123)
	}
};

export default {
	state,
	actions,
	mutations
}