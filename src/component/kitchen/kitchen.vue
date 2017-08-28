<template>
	<div class="kit-body">
		<div class="kit-header">
			<h1>小蚂蚁点餐系统</h1>
		</div>
		<div class="kit-content">
			<div class="block">
				<span class="wrapper">
				    <el-button :plain="true" :autofocus="true" class="blue" type="info" @click="info">进行中</el-button>
				</span>
				<span class="wrapper">
				    <el-button :plain="true" class="green" type="success" @click="success">已完成</el-button>				    
				</span>
			</div>
			<div class="kit-contenter">
				<div class="dingdan" v-for="(value,key) in this.$store.state.nav.category">
					<p class="ppp">菜名： {{value.name}} 制作时间： {{value.time}} 分钟</p>
					<button>上菜</button>
				</div>
				<div class="success">
					222
				</div>
			</div>
		</div>

		<div class="kit-footer">
			
		</div>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery';
	import './kitchen.scss'

	export default {
		name: 'kitchen',
		data: function(){
			return {
				show: false,
				count: 0
			}
		},
		methods: {
			info: function(){
				$('.dingdan').show();
				$('.success').hide();
			},
			success: function(){
				$('.success').show();
				$('.info').hide();
			}
		}
	}
</script>	