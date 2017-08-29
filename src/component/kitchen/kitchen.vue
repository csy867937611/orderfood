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
			<div class="kit-contenter" >
				<!-- <div class="dingdan" v-for="(value,key) in this.$store.state.nav.category"> -->
				<div class="dingdan" >
				<div v-for="(value,key) in this.$store.state.nav.cart">
					<p class="ppp" :data-id = "value.ID">
						id:<span>{{value.ID}}</span>&nbsp; 
						菜品名称:<span>{{value.name}}</span>&nbsp;  
						数量:<span>{{value.num}}份</span>&nbsp;
						制作时间:<span>{{(value.num)*(value.time)}}分钟 </span>
					</p>
					<p><el-button :plain="true" >上菜</el-button></p>
				</div>
				</div>
				<!-- </div> -->
				<div class="success">
					<!-- <p class="ppp">菜名：满汉全席  制作时间：60分钟</p>
					<p>
						<el-button :plain="true" type="success" class="serve" @click="serving">上菜</el-button>
					</p> -->
					66666666
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
				this.$store.dispatch('center')

			},
			over: function(){
				$('.success').show();
				$('.dingdan').hide();
				console.log('success')
			},
			serving: function(){
				console.log(555);
			}
			
		}
	}
</script>	