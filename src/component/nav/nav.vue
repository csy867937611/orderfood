<template>
	<ul class = "chen-list" >
		<li v-for = "(value, key) in this.$store.state.nav.data">
				<span @click = "getCategory"><router-link :to = "'/'+value">{{value}}</router-link></span>
        </li>
	</ul>
</template>

<script>
	import http from '../../utils/HttpClient';
	import $ from 'jquery';
	import './nav.scss'
	export default {
		data: function(){
			return {
				data: [1, 2]
			}
		},
		// },
		// created:function(){
		// 	console.log(888)
		// },
		mounted: function(){
			this.$store.dispatch("chendata");
		},
		methods: {
			getCategory: function(event){
				var category = event.target.innerText;
				$(event.target).parents("li").addClass("chen-active").siblings().removeClass("chen-active");
				console.log($(event.target).parents("li"))
				this.$store.dispatch("category", {category});
				this.className = "false"
			}
		}
	}
</script>
<style>
	.el-collapse{
		width: 150px;	
	}
	.el-collapse-item__header{
		background:#eee ;
	}
	.el-collapse-item__wrap{
		background: #ddd;
	}
</style>