<template>
	<div class = "chen-body">
		<div class="chen-header">
	      <h1>小蚂蚁点餐系统</h1>
	    </div>
	    <div class="chen-content">
	      <div class="chen-nav">
	      	<ChenNav></ChenNav>
	      </div>
	      <div class="chen-main"></div>
	    </div>
	    <div class="chen-footer">footer</div>
	</div>
</template>
<script>
	import ChenNav from '../nav/nav.vue';
	import './home.scss';
	export default {
		components: {
			ChenNav
		}
	}
</script>