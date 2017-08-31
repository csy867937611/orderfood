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

	var _wsurl = wsurl.global.wsurl;
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
		created:function(){
			var socket = io.connect(_wsurl);
			socket.on('suc', (data)=> {
		        console.log(1234, JSON.parse(decodeURI(data)));
		        var res = JSON.parse(decodeURI(data));
		        this.$store.state.nav.client = res;
		    });
		}

	}
</script>