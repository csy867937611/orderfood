<template>
	<div class="sbox">
		<div class="nav">
			<h1 @click="ajax">导航栏</h1>
		</div>
		<ul  class="content" >
			<li v-for="(value,index) in this.$store.state.hot_nav.arr">{{value}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import $ from 'jquery'
	import './hot_nav.scss'
	export default{
		methods:{
			ajax:function(){
				this.$store.dispatch('ajax',{qty:'10'});
				console.log(this)
			}
		}
	}
</script>
