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
					<span class = "chen-sum">小计：{{value.nowPrice*value.num}}元</span>
				</div>
				<div class="chen-car" :data-id = "value.ID">
					<p class="chen-sub" @click = "sup" >减</p>
					<input type="number" class="chen-num" :value= "value.num" />
					<p class="chen-add" @click = "add">加</p>
				</div>
			</div>
		</div>
		<div class="chen-account">
			<div class="chen-total">
				<span class = "sum">总计:</span>
				<span class = "total">{{total}}元</span>
			</div>
			<div class = "chen-pay">
				<span @click = "order">下单</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	import './cart.scss';
	export default {
		data: function(){
			return {
				arr: [],
				total: null
			}
		},
		methods:{
			add: function(event){
				console.log("add");
				// 当前菜品ID；
				var currentId = $(event.target).parent().attr('data-id');

				this.$store.state.nav.cart.map((item, idx)=>{
					if(item.ID == currentId){
						//价格；
						this.total += item.nowPrice;

						item.num++;
						event.target.previousElementSibling.value = item.num;

						console.log('item.num',item.num)                                                             
						localStorage.cart = JSON.stringify(this.$store.state.nav.cart);
					}
				});
				
			},
			sup: function(event){
				console.log("sup");
				// 当前菜品ID；
				var currentId = $(event.target).parent().attr('data-id');

				this.$store.state.nav.cart.map((item, idx)=>{
					if(item.ID == currentId){
						//价格；
						this.total -= item.nowPrice;

						item.num--;
						if(item.num <= 0){
							item.num = 0;
							var _idx = this.$store.state.nav.cart.indexOf(item);
							this.$store.state.nav.cart.splice(_idx, 1);
						}
						event.target.nextElementSibling.value = item.num;

						console.log('item.num',item.num)                                                             
						localStorage.cart = JSON.stringify(this.$store.state.nav.cart);
					}
				});
			},
			order: function(){
				console.log(123)
			}
		},
		created: function(){
		
			var cart;
			if(localStorage.cart){
				cart = JSON.parse(localStorage.cart);
			}else{
				cart=[];
			};
			this.$store.state.nav.cart = cart;
			var price = 0;
			this.$store.state.nav.cart.map((item, idx)=>{
				price += item.nowPrice * item.num;
			});
			this.total = price;

		}
	}
</script>