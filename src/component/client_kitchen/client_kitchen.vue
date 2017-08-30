<template>
	<div class="chen-client">
			
		<div class="chen-food" v-for = "(value, key) in this.$store.state.nav.client">
			<div class = "chen-img">
				<img :src="'./src/assets/imgs/' + value.imgurl" alt="" >
			</div>
			<div class="chen-details">
				<p class="chen-name">{{value.name}}</p>
				<p class = "chen-price">价格：{{value.nowPrice}}</p>
				<p class = "chen-time">工时：{{value.time}}分钟</p>
				<span class = "chen-sum">{{value.status}}</span>
			</div>
			<!-- <div class="chen-car" :data-id = "value.ID" >
				<p class="chen-sub" v-show = "value.num > 0"><i class="iconfont icon-reduce1"></i></p>
				<input type="number" class="chen-num" v-show = "value.num > 0" :value = "value.num" />
				<p class="chen-add" ><i class="iconfont icon-add1"></i></p>
			</div> -->
		</div>
	</div>
</template>
<script>
	import './client_kitchen.scss';
	export default {}
</script>