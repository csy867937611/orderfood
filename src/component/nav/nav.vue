<template>
	<div class="chen-nav">
		<el-collapse accordion>
  			<el-collapse-item title="招牌菜" name="1">
	        	<p>老司机醉鹅</p>
	        	<p>白切鸡</p>
	        	<p>卤水鸭</p>
	        	<p>白云猪手</p>
	        	<p>油炸山坑鱼</p>
	        	<p>一家欢卤水拼盘</p>
	        </el-collapse-item>
    		<!-- <el-collapse-item title="广东菜" name="2">
    			        	<p>老司机醉鹅</p>
    			        	<p>白切鸡</p>
    			        	<p>卤水鸭</p>
    			        	<p>白云猪手</p>
    			        	<p>油炸山坑鱼</p>
    			        	<p>一家欢卤水拼盘</p>
    			        </el-collapse-item>
    		<el-collapse-item title="四川菜" name="3">
    			        	<p>老司机醉鹅</p>
    			        	<p>白切鸡</p>
    			        	<p>卤水鸭</p>
    			        	<p>白云猪手</p>
    			        	<p>油炸山坑鱼</p>
    			        	<p>一家欢卤水拼盘</p>
    			        </el-collapse-item>
    		<el-collapse-item title="重庆菜" name="4">
    			        	<p>老司机醉鹅</p>
    			        	<p>白切鸡</p>
    			        	<p>卤水鸭</p>
    			        	<p>白云猪手</p>
    			        	<p>油炸山坑鱼</p>
    			        	<p>一家欢卤水拼盘</p>
    			        </el-collapse-item>
    		<el-collapse-item title="山东菜" name="5">
    			        	<p>老司机醉鹅</p>
    			        	<p>白切鸡</p>
    			        	<p>卤水鸭</p>
    			        	<p>白云猪手</p>
    			        	<p>油炸山坑鱼</p>
    			        	<p>一家欢卤水拼盘</p>
    			        </el-collapse-item>
    		<el-collapse-item title="点心" name="6">
    			        	<p>老司机醉鹅</p>
    			        	<p>白切鸡</p>
    			        	<p>卤水鸭</p>
    			        	<p>白云猪手</p>
    			        	<p>油炸山坑鱼</p>
    			        	<p>一家欢卤水拼盘</p>
    			        </el-collapse-item>
    		<el-collapse-item title="酒水/饮料" name="7">
    			       		<p>老司机醉鹅</p>
    			        	<p>白切鸡</p>
    			        	<p>卤水鸭</p>
    			        	<p>白云猪手</p>
    			        	<p>油炸山坑鱼</p>
    			        	<p>一家欢卤水拼盘</p>
    			        </el-collapse-item> -->
		</el-collapse>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				data: [1, 2]
			}
		},
		created:function(){
			console.log(888)
		},
		mounted: function(){
			console.log(this.data)
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