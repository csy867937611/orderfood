<template>

<div class = "chen-main">
	<div class = "chen-show" v-show = "show">
		<div class="chen-showPic" @touchmove = "touchmove">
			<div class="chen-close" @click = "closePic">&times;</div>
			<div class="chen-prev" @click = "prevPic"><i class="iconfont icon-prev"></i></div>
			<div class="chen-next" @click = "nextPic"><i class="iconfont icon-next"></i></div>
			<div class="chen-detailsList">
				<div class="chen-details" v-for = "(value, key) in this.$store.state.nav.category" :key= "value.ID" :data-id = "value.ID">
					<img :src="'./src/assets/imgs/' + value.imgurl" alt="" />
					<span>{{value.name}}</span>
					<span>{{value.nowPrice}}元/份</span>
					<span class = "chen-add" @click = "chenAdd">点</span>
				</div>
			</div>
		</div>
	</div>
	<div class = "chen-all">
		<el-input placeholder="请输入内容" icon="search" class = "chen-search" v-model="keyword" 
		:on-icon-click="iconSearch"></el-input>
		<div class="chen-foodlist">
			<div class="chen-food" v-for = "(value, idx) in this.$store.state.nav.category" :idx = "idx" >

				<div class = "chen-img">
					<img :src="'./src/assets/imgs/' + value.imgurl" alt="" @click = "showPic" />
				</div>
				<div class="chen-details">
					<p class="chen-name">{{value.name}}</p>
					<p class = "chen-price">价格：{{value.nowPrice}}</p>
					<p class = "chen-time">工时：{{value.time}}分钟</p>
				</div>
				<div class="chen-car" :data-id = "value.ID" >
					<p class="chen-sub" @click = "sup" v-show = "value.num > 0">减</p>
					<input type="number" class="chen-num" v-show = "value.num > 0" :value = "value.num" />
					<p class="chen-add" @click = "add">点</p>
				</div>

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

				keyword: '',

				arr: [],
				num: 0

			}
		},
		mounted: function(){
			var cart;
			if(localStorage.cart){
				cart = JSON.parse(localStorage.cart);
			} else {
				cart = [];
			};
			this.$store.state.nav.cart = cart;
		
		},
		methods: {
			touchmove: function(e){
				console.log(123)
				e.preventDefault();
			  
			},
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

				// 当前菜品ID；
				var currentId = $(event.target).parent().attr('data-id');

				this.$store.state.nav.category.map((item, idx)=>{
					if(item.ID == currentId){

						item.num++;
						
						event.target.previousElementSibling.value = item.num;

						var idx = this.$store.state.nav.cart.indexOf(item);
						console.log(idx);
						if(idx < 0){
							this.$store.state.nav.cart.push(item);
						}

						console.log('item.num',item.num)                                                             
						localStorage.cart = JSON.stringify(this.$store.state.nav.cart);
					}

				});
				console.log(this.$store.state.nav.cart);
				
				localStorage.cart = JSON.stringify(this.$store.state.nav.cart);
				

			},
			sup: function(event){
				// 当前菜品ID；
				var currentId = $(event.target).parent().attr('data-id');

				this.$store.state.nav.category.map((item, idx)=>{
					if(item.ID == currentId){
						item.num--;

						if(item.num <= 0 ){
							var _idx = this.$store.state.nav.cart.indexOf(item);
							this.$store.state.nav.cart.splice(_idx, 1);
						}
						event.target.nextElementSibling.value = item.num;
					}

					event.target.nextElementSibling.value = val;
				});
				

				// console.log(this.$store.state.nav.cart)
				localStorage.cart = JSON.stringify(this.$store.state.nav.cart);
			},
			

			iconSearch: function(){
				console.log(999)
			},
			showPic: function(event){
				console.log('showPic');

				//显示图片；
				this.show = true;

				//获取图片宽度；
				var _width = $('.chen-details').width() * this.$store.state.nav.category.length;

				//赋值；
				this.num = $(event.target).parents('.chen-food').attr('idx');
				console.log(this.num)
				
				$('.chen-detailsList').width(_width);

				//获取偏移量；
				var left = $('.chen-details').width() + 2*$('.chen-prev').width();
				
				//默认left值；
				var _left = left * (this.num);

				//设置left值；图片显示相应的图片；
				$('.chen-detailsList').css({left:-_left});
			},
			closePic: function(){
				this.show = false;
			},
			prevPic: function(){
				//显示上一张；
				console.log('prevPic');

				//获取偏移量；
				var left = $('.chen-details').width() + 2*$('.chen-prev').width();

				this.num--;

				//this.num <=0 时，设置默认值0；
				if(this.num <= 0){
					this.num = 0;
				};

				//计算left值；
				var _left = left * this.num;

				//动画切换上一张；
				$('.chen-detailsList').animate({left: -_left});
			},
			nextPic: function(){
				//显示下一张图片；
				console.log('nextPic');

				//获取单位偏移量；
				var left = $('.chen-details').width() + 2*$('.chen-prev').width();

				//计算left值；
				this.num++;

				//this.num <=0 时，设置默认值0；
				if(this.num >= this.$store.state.nav.category.length){
					this.num = this.$store.state.nav.category.length;
				};

				var _left = left * this.num;

				//动画切换下一张；
				$('.chen-detailsList').animate({left: -_left});
			},
			chenAdd: function(){
				console.log('chenAdd');
				// 当前菜品ID；
				var currentId = $(event.target).parent().attr('data-id');

				this.$store.state.nav.category.map((item, idx)=>{
					if(item.ID == currentId){

						item.num++;
						// event.target.previousElementSibling.value = item.num;

						var idx = this.$store.state.nav.cart.indexOf(item);
						console.log(idx);
						if(idx < 0){
							this.$store.state.nav.cart.push(item);
						}

						console.log('item.num',item.num)                                                             
						localStorage.cart = JSON.stringify(this.$store.state.nav.cart);
					}
				});	
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