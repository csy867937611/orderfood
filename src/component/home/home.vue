<template>
	<div class = "chen-body">
		<div class="chen-header">
	      <h1>小蚂蚁点餐系统</h1>
	    </div>
	    <div class="chen-content">
	      
	      	<ChenNav></ChenNav>
	   
	      <div class="chen-main">
	      	<router-view></router-view>
	      </div>
	    </div>
	    <div class="chen-footer">footer</div>
	</div>
</template>
<script>
	import ChenNav from '../nav/nav.vue';
	import foodlist from '../foodlist/foodlist.vue';
	import './home.scss';
	export default {
		components: {
			ChenNav,
			foodlist
		}
	}
</script>