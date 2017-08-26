<template>
	<div class="chen-foodlist">
		<div class="chen-food" v-for = "(value, key) in this.$store.state.nav.category">
			<img :src="'./src/assets/imgs/' + value.imgurl" alt="">
			<div class="chen-details">
				<p class="chen-name">{{value.name}}</p>
				<p class = "chen-price">价格：{{value.nowPrice}}</p>
				<p class = "chen-time">工时：{{value.time}}分钟</p>
			</div>
			<div class="chen-car" :id = "value.id">
				<p class="chen-sub" @click = "sup" >减</p>
				<input type="number" class="chen-num" />
				<p class="chen-add" @click = "add">点</p>
			</div>
		</div>
	</div>
</template>
<script>
	import './foodlist.scss';
	import $ from 'jquery';
	export default{
		data: function(){
			return {
				show: false,
				count: 0
			}
		},
		methods: {
			add: function(event){
				$(event.target).siblings().show();
				var val = event.target.previousElementSibling.value;
				if(val){
					console.log('val', val);
					val++;
					event.target.previousElementSibling.value = val;
					
				}else{
					event.target.previousElementSibling.value = 1;
				}
				this.count++;
				this.show = true;
			},
			sup: function(event){
				var val = event.target.nextElementSibling.value;
				if(val){
					val--;
					console.log('val', val);
					if(val <= 0){

						event.target.nextElementSibling.value = '';
						// $(event.target.nextElementSibling).hide();
						$(event.target).hide().next().hide();
						return;
					}
					event.target.nextElementSibling.value = val;
				}
			}
		}
	}
</script>