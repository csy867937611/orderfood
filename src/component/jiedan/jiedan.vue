<template>
	<div class="jiedan-body">
		<div class="jiedan-header">
			<h1>小蚂蚁点餐系统</h1>
		</div>

		<div class="jiedan-content" v-for="(value, idx) in this.$store.state.jiedan.data">
		
				<p class="ppp" :data-id = "value.ID">菜品名称：<span>{{value.name}}</span>  数量：<span>{{value.num}}</span></p>
				
			    <p><el-button type="info" @click="jie">接单</el-button>
			   <!--  <el-button type="warning" @click="footover">售馨</el-button></p> -->
			    <el-button :plain="true" @click="jindu">进度</el-button></p>
			    
			
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

		
	

	export default {
		name: 'jiedan',
		data: function(){
			return {
				show: false,
				count: 0
			}
		},
		created: function(){
			var socket = io.connect('ws://10.3.134.54:1703');
			socket.on('clientOrder', (mess)=>{
				console.log(JSON.parse(decodeURI(mess)));
				var data = JSON.parse(decodeURI(mess))
				this.$store.state.jiedan.data = data;
			})
		},
		methods: {
			jie: function(event){
				console.log(this.$store.state.jiedan.data)
				// console.log($(event.target).parents("p").prev().find("span").eq(0).text())
				// console.log($(event.target).parents("p").prev().find("span").eq(1).text())
				
				var completeId = $(event.target).parents("p").prev().data('id');
				this.$store.state.jiedan.data.map((item, idx)=>{
					if(item.ID == completeId){
						item.status = '已接单';
						this.$store.state.jiedan.receive.push(item);
					}
				})

				//传菜单状态
				
				this.$store.dispatch('jie')

				console.log('component', completeId);
				// console.log(this.$store.state.nav.cart[0].name)
				
				
			},

			jindu: function(){
				console.log(router)
				router.push('/kitchen')
			}
		}


		
	}

</script>