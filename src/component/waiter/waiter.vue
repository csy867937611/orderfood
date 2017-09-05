<template>
	<div class="waiterLook">
		<div class="header">
			<div class="headero">
				<span>小蚂蚁餐厅</span>
			</div>
		</div>
		<div class="body">
			<div class="find">
				<el-input v-model="input" placeholder="查询台号" @blur="find(input)"></el-input>
			</div>
			<div class="aoh">
				<ul v-for="(obj,index) in this.$store.state.waiter.arraoh" :ref="obj.id" :id="obj.id">
					<router-link :to="{path:'detail',query:{obj}}">
						<li v-for="(value,key) in obj">
							<span>{{value}}</span>
						</li>
					</router-link>
				</ul>
			</div>
		</div>
		<div class="foots">
			<div>
				<span>操作人员:</span>
				<span>11880</span>
			</div>
			<div>
				<span class="time">时间:</span>
				<span>上午</span>
				<span class="hours">{{this.$store.state.waiter.hours}}:</span>
				<span class="minutes">{{this.$store.state.waiter.minutes}}:</span>
				<span class="seconds">{{this.$store.state.waiter.seconds}}</span>
			</div>
		</div>
		 
	</div>
</template>

<script type="text/javascript">
	var deviceWidth = document.documentElement.clientWidth;		
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	import './waiter.scss';
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'
	import $ from 'jquery';
	import wsurl from '../../assets/common/common.js'

	var _wsurl = wsurl.global.wsurl;

	Vue.use(ElementUI) 

	export default{
		data:()=>{
			return{
				input:''
			}
		},
		beforeMount:function(){
			this.$store.dispatch('date');
			this.$store.dispatch('message');
			var socket = io.connect(_wsurl);
			socket.on('ser',(message)=>{
				console.log(message);
				if(message){
					console.log(666);
					var offer = 'ok'
					this.$alert('第'+message.table+'桌客人呼叫服务','注意', {confirmButtonText:'确定' ,callback(){
						socket.emit('waiter',offer);
						}
					})
				}
			})
			
		},
		methods:{
			find:function(value){
				console.log(this.$refs);
				console.log(value);
				if(value != ''){
					if(this.$refs[value]){
						$(this.$refs[value][0]).siblings().css({display:'none'});
					}
				}else{
					console.log(6)
				}
			}
		},
		props:['id']

	}

</script>