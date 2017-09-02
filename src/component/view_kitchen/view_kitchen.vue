<template>
	<div class="v-body">
		<div class="v-header">
			<h1 class = "v-title">小蚂蚁餐厅</h1>
		</div>
		<div class="v-content">
			<div class="v-details">当前菜品数量：{{this.$store.state.view.dish.length}}</div>
			<div class="v-dish">
				<div class="chen-food" v-for = "(value, key) in this.$store.state.view.dish" :data-id="value.ID" :key="value.ID" :data-idx = "key">
					<!-- <div class = "chen-img">
						<img :src="'./src/assets/imgs/' + value.imgurl" alt="" >
					</div> -->
					<div class="chen-details">
						<p class="chen-name chen-p">{{value.name}}</p>
						<p class="chen-name chen-p">数量：{{value.num}}</p>
						<!-- <p class = "chen-price chen-p">价格：{{value.nowPrice}}</p>
						<p class = "chen-time chen-p">工时：{{value.time}}分钟{{value.num}}</p> -->
						<!-- <span class = "chen-sum" v-if = "value.status == '正在烹饪' ? test(): false">{{time}}</span> -->
						<button class = "chen-sum" v-show="value.status == '待接单'" @click = "nextStep">待接单</button>
						<button class = "chen-sum" v-show="value.status == '正在烹饪'" @click = "nextStep">正在烹饪</button>
						<button class = "chen-sum" v-show="value.status == '已完成'">已完成</button>
						<button class = "chen-sum" v-show="value.status == '已完成'"  @click = "dishCompleted">可上菜</button>
						
					</div>
					<div class="chen-step">
						<el-steps :space="100" :active="value.status == '待接单' ? 1 : value.status == '正在烹饪' ? 2 : 3" finish-status="success">
						  	<el-step title="待接单"></el-step>
						  	<el-step title="烹饪中"></el-step>
						  	<el-step title="已完成"></el-step>
						</el-steps>
					</div>
				</div>		
			</div>
		</div>
		<div class="v-footer">厨房上菜服务端</div>
	</div>
</template>
<script>
	import './view_kitchen.scss'
	import Client from '../client_kitchen/client_kitchen.vue';
	import wsurl from '../../assets/common/common.js';
	import $ from 'jquery';
	var _iourl = wsurl.global.iourl;

	export default {
		components: {
			Client
		},
		methods: {
			nextStep: function(event){
				var socket = io.connect(_iourl);

				//当前菜品ID，idx;
				var currentId = $(event.target).parents(".chen-food").data('id');
				var currentIdx = $(event.target).parents(".chen-food").data('idx');

				var status = $(event.target).next().text();

				//点击改变菜品状态；
				this.$store.state.view.dish.map((item, idx)=>{
					if(item.ID == currentId && idx == currentIdx){
						item.status = status;
						socket.emit('cooking',encodeURI(JSON.stringify(this.$store.state.view.dish)));				
					}
				})
			},
			dishCompleted: function(event){
				$(event.target).text('已上菜').attr('disabled', 'disabled')
				var currentId = $(event.target).parents(".chen-food").data('id');
				var currentIdx = $(event.target).parents(".chen-food").data('idx');
				this.$store.state.view.dish.map((item, idx, self)=>{
					if(item.ID == currentId && idx == currentIdx){
						var newItem = self.splice(idx, 1);
						self.push(newItem[0]);	
						console.log(self)				
					}
				})
			}
		},
		created: function(){
			var socket = io.connect(_iourl);
			socket.on('clientOrder', (mess)=>{
				console.log(JSON.parse(decodeURI(mess)));
				var data = JSON.parse(decodeURI(mess))
				this.$store.state.view.dish = data;
			});

			//监听菜品，实时更新;
			socket.on('kitchen', (mess)=>{
				console.log(JSON.parse(decodeURI(mess)));
				var data = JSON.parse(decodeURI(mess))
				this.$store.state.view.dish = data;
			});

			//加单监听数据；
		    socket.on('clientOrderAdd', (data)=> {
		        console.log(JSON.parse(decodeURI(data)));
		       
		        var res = JSON.parse(decodeURI(data));
		        res.forEach((item, idx)=>{
		        	var num = 0;
		        	for(var item2 of this.$store.state.view.dish){
		        		num++;

		        		//当菜品状态为‘待接单’时，数量直接添加剂上去；
		        		if(item.ID == item2.ID && item2.status == '待接单'){
		        			console.log('kkk',item2.num, item.num)
		        			item2.num += item.num;
		        			return ;

		        		} else {

		        			//茶菜品状态为其他状态时，新增的菜品直接追加；
		        			if(num == this.$store.state.view.dish.length){
		        				console.log('push',item2.num, item.num);
		        				this.$store.state.view.dish.push(item);
		        				return;
		        			}
		        		}
		        	}
		        })
		    });
		}
	}
</script>