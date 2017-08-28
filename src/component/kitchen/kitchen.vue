<template>
	<div class="kit-body">
		<div class="kit-header">
			<h1>小蚂蚁点餐系统</h1>
		</div>
		<div class="kit-content">
			<div class="block">
				<span class="wrapper">
   					<el-button type="warning" @click="center">进行中</el-button>
				</span>
				<span class="wrapper">
				    <el-button type="success" @click="over">已完成</el-button>		    
				</span>
			</div>
			<div class="kit-contenter">
				<!-- <div class="dingdan" v-for="(value,key) in this.$store.state.nav.category"> -->
				<div class="dingdan">
					1111
				</div>
				<!-- </div> -->
				<div class="success">
					<p class="ppp">菜名：满汉全席  制作时间：60分钟</p>
					<p>
						<el-button :plain="true" type="success" class="serve" @click="serving">上菜</el-button>
					</p>
					<br/>
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
			center: function(){
				$('.dingdan').show();
				$('.success').hide();
				console.log('dingdan')
			},
			over: function(){
				$('.success').show();
				$('.dingdan').hide();
				console.log('success')
			},
			serving: function(){
				console.log(555)
			}

		}
	}
</script>	