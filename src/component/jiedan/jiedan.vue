<template>
	<div class="jiedan-body">
		<div class="jiedan-header">
			<h1>小蚂蚁点餐系统</h1>
		</div>

		<div class="jiedan-content">
			
				<p class="ppp">菜名：满汉全席  制作时间：60 分钟</p>
				
			    <p><el-button type="info" @click="jie">接单</el-button>
			    <el-button type="warning" @click="footover">售馨</el-button></p>
			    
			
		</div>

		<div class="jiedan-footder">
			
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import './jiedan.scss'

	export default {
		name: 'jiedan',
		data: function(){
			return {
				show: false,
				count: 0
			}
		},
		methods: {
			jie: function(){
				this.$store.dispatch('jie', 1)
				console.log('component', this);
				console.log(this.$store.state.nav.cart)
			},
			footover: function(){
				console.log('over')
			}
		}


		
	}

</script>