<template>
	<div class="chen-client">
		<div class="title-box">
			
			<p class = client-title>订单进度详情</p>
		</div>
		<div class="chen-dish">
			
			<div class="chen-food" v-for = "(value, key) in this.$store.state.nav.client" :data-id="value.ID" :key="value.ID">
				<div class = "chen-img">
					<img :src="'./src/assets/imgs/' + value.imgurl" alt="" >
				</div>
				<div class="chen-details">
					<span v-if="value.status == '待接单'" class = "chen-delete" ><i @click = "chenDelete" class="iconfont icon-delete"></i></span>
					<p class="chen-name chen-p">{{value.name}}</p>
					<p class = "chen-price chen-p">价格：{{value.nowPrice}}</p>
					<p class = "chen-time chen-p">工时：{{value.time}}分钟</p>
					<span class = "chen-sum">{{value.status}}</span>
				</div>
				<!-- <div class="chen-car" :data-id = "value.ID" >
					<p class="chen-sub" v-show = "value.num > 0"><i class="iconfont icon-reduce1"></i></p>
					<input type="number" class="chen-num" v-show = "value.num > 0" :value = "value.num" />
					<p class="chen-add" ><i class="iconfont icon-add1"></i></p>
				</div> -->
			</div>
		</div>
	</div>
</template>
<script>
	import './client_kitchen.scss';
	export default {
		methods: {
			chenDelete: function(event){
				var currentId = $(event.target).parents('.chen-food').data('id');
				console.log(123, currentId);
				this.$store.state.nav.client.map((item, idx, self)=>{
					if(item.ID == currentId){
						this.$store.state.nav.client.splice(idx, 1);
						return;
					}
				})
			}
		}
	}
</script>