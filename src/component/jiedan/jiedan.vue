<template>
	<div class="jiedan-body">
		<div class="jiedan-header">
			<h1>小蚂蚁点餐系统</h1>
		</div>

		<div class="jiedan-content" v-for="(value, idx) in this.$store.state.nav.cart">
		
				<p class="ppp" :data-id = "value.ID">id:<span>{{value.ID}}</span>&nbsp;  菜品名称：<span>{{value.name}}</span>  数量：<span>{{value.num}}</span></p>
				
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
			jie: function(event){
				console.log(this.$store.state.nav.cart)
				// console.log($(event.target).parents("p").prev().find("span").eq(0).text())
				// console.log($(event.target).parents("p").prev().find("span").eq(1).text())
				var id = $(event.target).parents("p").prev().find("span").eq(0).text();
				var name = $(event.target).parents("p").prev().find("span").eq(1).text();
				var num = $(event.target).parents("p").prev().find("span").eq(2).text();
				 
				this.$store.dispatch('jie', {id, name, num})

				// console.log('component', this);
				// console.log(this.$store.state.nav.cart[0].name)
				
				
			},
			footover: function(){
				console.log('over')
			}
		}


		
	}

</script>