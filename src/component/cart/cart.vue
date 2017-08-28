<template>
	<div class = "chen-cart">
		<h3>订单详情</h3>
		<div class="chen-foodlist">
			
			<div class="chen-food" v-for = "(value, key) in this.$store.state.nav.cart">
				<div class = "chen-img">
					<img :src="'./src/assets/imgs/' + value.imgurl" alt="" >
				</div>
				<div class="chen-details">
					<p class="chen-name">{{value.name}}</p>
					<p class = "chen-price">价格：{{value.nowPrice}}</p>
					<p class = "chen-time">工时：{{value.time}}分钟</p>
				</div>
				<div class="chen-car" :id = "value.ID">
					<p class="chen-sub" @click = "sup" >减</p>
					<input type="number" class="chen-num" :value= "value.num" />
					<p class="chen-add" @click = "add">加</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import './cart.scss';
	export default {
		data: function(){
			return {
				arr: []
			}
		},
		methods:{
			add: function(){
				console.log("add");
			},
			sup: function(){
				console.log("sup")
			}
		},
		created: function(){
			console.log(localStorage.cart, this.$store.state.nav);
			var cart;
			if(localStorage.cart){
				cart = JSON.parse(localStorage.cart);
			}else{
				cart=[];
			};
			this.$store.state.nav.cart = cart
			
		}
	}
</script>