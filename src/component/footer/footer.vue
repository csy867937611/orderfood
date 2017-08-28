<template>
	<ul class = "chen-footer">
		<li class="chen-food" @click = "chenFood">
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
</template>
<script>
	import './footer.scss';
	import router from '../../router';
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
			}
		}
	}
</script>