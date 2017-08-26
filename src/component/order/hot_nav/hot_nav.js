import http from '../../../utils/HttpClient'
import Vue from 'vue'

const state = {
	arr:[]
};

const actions = {
	ajax:(store,agr)=>{
		store.commit('ajax',agr)	
	}
	
}

const mutations = {
	ajax:(data,agr)=>{
		console.log(agr);
		http.get('http://localhost:8888/coll',agr).then(response=>{
			console.log(response)
			state.arr = response;
			console.log(state);
		})
	}
}

export default {
	state,
	actions,
	mutations
}