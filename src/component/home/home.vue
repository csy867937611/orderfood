<template>
	<div class = "chen-body">
		<div class="chen-header">
	      <h1>小蚂蚁餐厅</h1>
	      <!-- <div class = "chen-bell" @click = "callWaiter"><i class="iconfont icon-hot"></i></div> -->
	    </div>
	    <div class="chen-content">
	   		<router-view></router-view>
	    </div>
		<Foot></Foot>
		<div class="chen-tips" v-show = "this.$store.state.home.show">
			<div class="chen-alert" >
				<h3>正在呼叫服务员</h3>
				<div class="box">
					<div class="box1"></div>
					<div class="box2"></div>
					<div class="box3"></div>
				</div>
				<div class="chen-close" @click = "chenClose" >&times;</div>
			</div>
		</div>
	</div>
</template>
<script>
	import ChenNav from '../nav/nav.vue';
	// import foodlist from '../foodlist/foodlist.vue';
	import Foot from '../footer/footer.vue';
	import './home.scss';
	import wsurl from '../../assets/common/common.js'


	var _iourl = wsurl.global.iourl;

	export default {
		components: {
			ChenNav,
			Foot
		},
		methods: {
			callWaiter: function(){
				console.log('callWaiter', Foot)
			},
			chenClose: function(){
				console.log('chenClose');
				this.$store.state.home.show = false;
			}
		},
		created: function(){
			var socket = io.connect(_iourl);
			//监听服务端发过来的数据；
		    socket.on('kitchen', (data)=> {
		       
		        var res = JSON.parse(decodeURI(data));
		        res.map((item, idx)=>{
		        	if(item.status == '正在烹饪'){
		        		 // this.$store.dispatch('timer',item);
		        	}
		        })
		        this.$store.state.nav.client = res;
		    });
		    socket.on('suc', (data)=> {
		        var res = JSON.parse(decodeURI(data));

		        this.$store.state.nav.client = res;
		    });

		    //监听服务端发过来的数据；
		    socket.on('clientOrderAdd', (data)=> {
		        console.log(JSON.parse(decodeURI(data)));
		       
		        var res = JSON.parse(decodeURI(data));
		        res.forEach((item, idx)=>{
		        	var num = 0;
		        	for(var item2 of this.$store.state.nav.client){
		        		num++;
		        		if(item.ID == item2.ID && item2.status == '待接单'){
		        			console.log('kkk',item2.num, item.num)
		        			item2.num += item.num;
		        			return ;

		        		} else {
		        			if(num == this.$store.state.nav.client.length){
		        				console.log('push',item2.num, item.num)
		        				this.$store.state.nav.client.push(item);
		        				return;
		        			}
		        		}
		        	}
		        })
		    });

		}

	}
</script>