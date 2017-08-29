<template>
<div class = "chen-container">
	<ul class = "chen-list" >
		<li v-for = "(value, key) in this.$store.state.nav.data">
				<span @click = "getCategory"><router-link :to = "'/'+value">{{value}}</router-link></span>
        </li>
	</ul>
	<Foodlist></Foodlist>
</div>
</template>

<script>
	import http from '../../utils/HttpClient';
	import Foodlist from '../foodlist/foodlist.vue';
	import $ from 'jquery';
	import './nav.scss'
	export default {
		data: function(){
			return {
				data: [1, 2]
			}
		},
		components: {
			Foodlist
		},
		// },
		// created:function(){
		// 	console.log(888)
		// },
		mounted: function(){
			this.$store.dispatch("chendata");
			var current = localStorage.cart;
				if(current){
					current = JSON.parse(localStorage.cart);
				}else{
					current = [];
				}

				current.map((item, idx)=>{
					this.$store.state.nav.category.map((item2, idx2)=>{
						if(item.ID == item2.ID){

							$("[data-id = "+ item.ID+"]").find('input').val(item.num)
				console.log(11111,$("[data-id = "+ item.ID+"]").find('input').val(), item.num);
						}
					})
				})
		},
		methods: {
			getCategory: function(event){
				var category = event.target.innerText;
				$(event.target).parents("li").addClass("chen-active").siblings().removeClass("chen-active");
				console.log($(event.target).parents("li"))
				this.$store.dispatch("category", {category});
				this.className = "false";


				var current = localStorage.cart;
				if(current){
					current = JSON.parse(localStorage.cart);
				}else{
					current = [];
				}

				current.map((item, idx)=>{
					this.$store.state.nav.category.map((item2, idx2)=>{
						if(item.ID == item2.ID){
							console.log(item.ID, item2.ID);
							console.log($("[data-id = "+ item.ID+"]").children())
							$("[data-id = "+ item.ID+"]").find('input').val(item.num)
				
						}
					})
				})
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