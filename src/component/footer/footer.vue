<template>
	<div class="foot">
		<ul class = "chen-footer" @click = "addEventListener">
			<li class="chen-food color" @click = "chenFood" >
				<span class = "chen-icon"><i class="iconfont icon-food"></i></span>
				<span class = "chen-item">菜单</span>
			</li>
			<li class="chen-order" @click = "chenCart">
				<span class = "chen-icon"><i class="iconfont icon-order"></i></span>
				<span class = "chen-item">下单</span>
			</li>
			<li  class="chen-cooker">
				<span class = "chen-icon"><i class="iconfont icon-cooker"></i></span>
				<span class = "chen-item">厨房</span>
			</li>
			<li @click = "chenCallWaiter" class="chen-bell">
				<span class = "chen-icon"><i class="iconfont icon-bell"></i></span>
				<span class = "chen-item">呼叫</span>
			</li>
		</ul>
		<div class="chen-qty" v-show="this.$store.state.nav.cart.length > 0">{{this.$store.state.nav.cart.length}}</div>
	</div>
</template>
<script>
	import './footer.scss';
	import router from '../../router';
	import $ from 'jquery';
	export default {
		methods: {
			chenCallWaiter: function(){
				console.log('chenCallWaiter', router)
				// router.push('/callWaiter');
				this.$store.state.home.show = true;
				console.log(this.$store.state.home.show)
			},
			chenCart: function(){
				console.log('chenCart');
				router.push('/cart');
			},
			chenFood: function(){
				router.push('/沙拉');
			},
			addEventListener: function(event){
				if($(event.target).parents("li").hasClass("chen-bell")){
					console.log('chen-bell');
					return;
				}
				$(event.target).parents("li").addClass("color").siblings().removeClass("color");
			}
		}
	}
</script>