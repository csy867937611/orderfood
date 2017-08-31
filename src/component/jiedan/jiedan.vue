<template>
	<div class="jiedan-body">
		<div class="jiedan-header">
			<h1>小蚂蚁点餐系统</h1>
		</div>

		<div class="jiedan-content" v-for="(value, idx) in this.$store.state.jiedan.data">
			
				<p class="ppp" :data-id = "value.ID">菜品名称：<span>{{value.name}}</span>  数量：<span>{{value.num}}</span></p>
				
			    <p><el-button type="info" @click="jie">接单</el-button>
			   <!--  <el-button type="warning" @click="footover">售馨</el-button></p> -->

			    <el-button :plain="true" @click="topover">上菜</el-button></p>
		
		</div>

		<div class="jiedan-footder">
			
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import './jiedan.scss';
	import router from '../../router';
	console.log(8888)
	import wsurl from '../../assets/common/common.js'

	var _wsurl = wsurl.global.wsurl;
		
	

	export default {
		name: 'jiedan',
		data: function(){
			return {
				show: false,
				count: 0
			}
		},
		created: function(){
			var socket = io.connect(_wsurl);
			socket.on('clientOrder', (mess)=>{
				var data = JSON.parse(decodeURI(mess))
				this.$store.state.jiedan.data = data;
			})
		},
		methods: {
			jie: function(event){
				console.log('12321',this);
				var completeId = $(event.target).parents("p").prev().data('id');
				this.$store.state.jiedan.data.map((item, idx)=>{
					if(item.ID == completeId){
						item.status = '正在烹饪';
					}
				})
				console.log($(event.target).parents()[0]);
				$(event.target).parents().prop("disabled", true);

				
				
				this.$store.dispatch('jie');
				console.log('已接单', completeId);

				this.$message('接单成功');
				
			},

			topover: function(event){
				var  currentId = $(event.target).parents("p").prev().data('id');
				this.$store.state.jiedan.data.map((item, idx)=>{
					if(item.ID == currentId){
						item.status = '已完成';
					}
				})
				this.$store.dispatch('topover');
				console.log('已完成', currentId);

				this.$message('制作完成');
			},
		}
	}

</script>