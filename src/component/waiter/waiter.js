import Vue from 'vue'

const state = {
	arraoh:[{id:1001,people:'3位',spending:296},{id:1002,people:'6位',spending:996},{id:1003,people:'2位',spending:96},{id:1004,people:'2位',spending:96},{id:1005,people:'2位',spending:96},{id:1006,people:'6位',spending:396},{id:1007,people:'10位',spending:1196},{id:1008,people:'10位',spending:1196},{id:1009,people:'10位',spending:1196},{id:1010,people:'10位',spending:1196},{id:1011,people:'10位',spending:1196}],
	hours:'',
	minutes:'',
	seconds:''
}

const actions = {
	date:(store)=>{
		store.commit('date')
	},
	find:(store,value)=>{
		store.commit('find',value)
	}
}

const mutations = {
	date:(data)=>{
		var time = new Date();
		var hour = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		state.hours = hour;
		state.minutes = minutes;
		state.seconds = seconds;
		 setInterval(function(){
		 	time = new Date();
			hour = time.getHours();
			minutes = time.getMinutes();
			seconds = time.getSeconds();
			state.hours = hour;
			state.minutes = minutes;
			state.seconds = seconds;
		},1000)
	},
	find:(data,value)=>{
		console.log(this)
		for(var i = 0 ;i<state.arraoh.length;i++){
			if(state.arraoh[i].id == value){
				
			}
		}
	}
}

export default {
	state,
	actions,
	mutations
}