<template>
	<div class="chen-client">
		<div class="title-box">
			
			<p class = client-title>订单进度详情{{this.$store.state.home.time[0]}}</p>
		</div>
		<div class="chen-dish">
			
			<div class="chen-food" v-for = "(value, key) in this.$store.state.nav.client" :data-id="value.ID" :key="value.ID">
				<div class = "chen-img">
					<img :src="'./src/assets/imgs/' + value.imgurl" alt="" >
				</div>
				<div class="chen-details">
					<span v-if="value.status == '待接单'" class = "chen-delete" ><i @click = "chenDelete" class="iconfont icon-delete"></i></span>
					<p class="chen-name chen-p">{{value.name}}</p>
					<p class = "chen-price chen-p">价格：{{value.nowPrice}}</p>
					<p class = "chen-time chen-p">工时：{{value.time}}分钟{{value.num}}</p>
					<!-- <span class = "chen-sum" v-if = "value.status == '正在烹饪' ? test(): false">{{time}}</span> -->
					<!-- <span class = "chen-sum" :key = "value.ID">{{test(value.time)}}</span> -->
					<p></p>
				</div>
				<div class="chen-step">
					<el-steps :space="100" :active="value.status == '待接单' ? 1 : value.status == '正在烹饪' ? 2 : 3" finish-status="success">
					  	<el-step title="待接单"></el-step>
					  	<el-step title="烹饪中"></el-step>
					  	<el-step title="已完成"></el-step>
					</el-steps>
				</div>
			<!-- 	<div class="chen-car" :data-id = "value.ID" >
				<p class="chen-sub" v-show = "value.num > 0"><i class="iconfont icon-reduce1"></i></p>
				<input type="number" class="chen-num" v-show = "value.num > 0" :value = "value.num" />
				<p class="chen-add" ><i class="iconfont icon-add1"></i></p>
			</div> -->
			</div>
		</div>
	</div>
</template>
<script>
	import './client_kitchen.scss';
	import wsurl from '../../assets/common/common.js'

	var _iourl = wsurl.global.iourl;
	export default {
		data: function(){
			return {
				num:0,
				time: 2
			}
		},
		methods: {
			chenDelete: function(event){
				var currentId = $(event.target).parents('.chen-food').data('id');
				console.log(123, currentId);
				var socket = io.connect(_iourl);
				this.$store.state.nav.client.map((item, idx, self)=>{
					if(item.ID == currentId){
						this.$store.state.nav.client.splice(idx, 1);

						
						//更新数据到服务端；
						console.log('cooking')
						socket.emit('cooking', encodeURI(JSON.stringify(this.$store.state.nav.client)));

						//监听服务端发过来的数据；
					    socket.on('kitchen', (data)=> {
					        console.log(JSON.parse(decodeURI(data)));
					        this.$store.state.nav.client = JSON.parse(decodeURI(data));
					    });
						return;
					}
				})
			},
			test: function(n){
				// return this.$store.state.home.time[0];
				counts(n);

				function counts(n){
				var time = 5;
				var timer = timer + n.ID;
				timer = setInterval(()=>{
					time--;
					console.log('倒计时！', n)
					
					var m = Math.floor(time/60%60);
					var s = Math.floor(time%60);
					
					
					if(time == 0){
						clearInterval(timer);
					}
				}, 1000)
				}

			}
		},
		created: function(){

		}
	}
</script>