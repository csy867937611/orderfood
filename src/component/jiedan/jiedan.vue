<template>
	<div class="jiedan">
		<div class="jiedan-header">
			<h1>小蚂蚁点餐系统</h1>
		</div>

		<div class="jiedan-content">
			<div class="dingdan" v-for="(value,key) in this.$store.state.nav.category">
				<p class="ppp">菜名： {{value.name}} 制作时间： {{value.time}} 分钟<button>接单</button></p>
				
			</div>
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

		}
		
	}

</script>