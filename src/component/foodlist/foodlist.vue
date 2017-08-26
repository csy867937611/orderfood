<template>
	<div class = "chen-all">
		<el-input placeholder="请输入内容" icon="search" class = "chen-search" v-model="keyword" 
		:on-icon-click="iconSearch"></el-input>
		<div class="chen-foodlist">
			
			<div class="chen-food" v-for = "(value, key) in this.$store.state.nav.category">
				<img :src="'./src/assets/imgs/' + value.imgurl" alt="">
				<div class="chen-details">
					<p class="chen-name">{{value.name}}</p>
					<p class = "chen-price">价格：{{value.nowPrice}}</p>
					<p class = "chen-time">工时：{{value.time}}分钟</p>
				</div>
				<div class="chen-car" :id = "value.ID">
					<p class="chen-sub" @click = "sup" >减</p>
					<input type="number" class="chen-num" />
					<p class="chen-add" @click = "add">点</p>
				</div>
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
				count: 0,
				keyword: ''
			}
		},
		methods: {
			add: function(event){
				// 当前菜品ID；
				var currentId = $(event.target).parent().attr('id');
				// console.log(currentId)

				$(event.target).siblings().show();
				var val = event.target.previousElementSibling.value;
				if(val){
					console.log('val', val);
					val++;
					event.target.previousElementSibling.value = val;

					//当前菜品添加属性num;
					this.$store.state.nav.category.map(item=>{
						if(item.ID == currentId){
							item.num = val;
							console.log(item)

						}
					});
					
				}else{
					event.target.previousElementSibling.value = 1;
					this.$store.state.nav.category.map(item=>{
						if(item.ID == currentId){
							item.num = 1;
							console.log(item)
						}
					});
				}
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
			},
			iconSearch: function(){
				console.log(999)
			}
		},
		watch: {
			keyword: function(){
				console.log(this.keyword);
				//如何去掉nav选中高亮；
				$('li').removeClass('chen-active');
				this.$store.dispatch('chenKeyword', {keyword: this.keyword});
			}
		}
	}
</script>