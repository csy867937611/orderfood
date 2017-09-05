<template>
	<div class="kit-body">
		<div class="kit-header">
			<h1>小蚂蚁点餐系统</h1>
			<span class="sp" @click="back">＜</span>
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
				<div class="dingdan" >
					<div class="dingdan2" v-for="(value,key) in this.$store.state.jiedan.data">
						<p class="ppp" :data-id = "value.ID">
							 
							菜品名称:<span>{{value.name}}</span>&nbsp;  
							数量:<span>{{value.num}}份</span>&nbsp;
							制作时间:<span>{{(value.num)*(value.time)}}分钟 </span>
						</p>
						<p>
							<el-button :plain="true" @click="topover">上菜</el-button>
							<!-- <el-button :plain="true" @click="jindu">进度</el-button> -->
						</p>
					</div>
				</div>
				<!-- </div> -->
				<div class="success">
					<!-- <p class="ppp">菜名：满汉全席  制作时间：60分钟</p>
					<p>
						<el-button :plain="true" type="success" class="serve" @click="serving">上菜</el-button>
					</p> -->
					
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
	import './kitchen.scss';
	import router from '../../router';


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
			},
			over: function(){
				
			},
			serving: function(){
				
			},
			topover: function(event){
				
			},
			back: function(){
				
			}
			
			
		}
	}
</script>	