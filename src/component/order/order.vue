<template>
	<div class="bigbox">
		<div class="head">
			<h1>头部</h1>	
		</div>
		<hot_nav></hot_nav>
	</div>
</template>
<script type="text/javascript">
	import hot_nav from "./hot_nav/hot_nav.vue"
	import './order.scss'
	export default{
		components:{
			'hot_nav':hot_nav
		}
	}
</script>


