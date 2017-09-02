<template>
	<div class="bigbox">
		<div class="head">
			<h1>小蚂蚁餐厅</h1>	
		</div>
		<div class="lamp">
			 <el-carousel :interval="4000" type="card" height="200px">
				<el-carousel-item v-for="(value, key) in this.$store.state.order.newFood" :key="value.ID">
					<img :src="'./src/assets/imgs/'+ value.imgurl" alt="">
					<p>{{value.name}}</p>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="home-item">
			<div>
				<router-link to = "/home">
					<div class="client">
						<p><i class = "iconfont icon-client"></i></p>
						<h2 class = name>客户端</h2>
					</div>
				</router-link>
			</div>
			<div>
				<router-link to = "/view">
					<div class="client">
						<p><i class = "iconfont icon-cooker"></i></p>
						<h2 class = name>厨房端</h2>
					</div>
				</router-link>
			</div>
			<div>
				<router-link to = "/waiter">
					<div class="client">
						<p><i class = "iconfont icon-waiter"></i></p>
						<h2 class = name>服务员端</h2>
					</div>
				</router-link>
			</div>
			<div>
				<router-link to = "/adminHome">
					<div class="client">
						<p><i class = "iconfont icon-b"></i></p>
						<h2 class = name>后台</h2>
					</div>
				</router-link>
			</div>
			
		</div>
		<spinner></spinner>
	</div>
</template>
<script>
	import './order.scss';
	import spinner from '../spinner/spinner.vue';
	export default{
		components:{
			spinner
		},
		created: function(){
			this.$store.dispatch('getHot');
		}
	}
</script>


