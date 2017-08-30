<template>
	<div class="su-details">
		<div id="su-headers">
			<span>
				<router-link to="/waiter">
					<i class="el-icon-arrow-left"></i>
				</router-link>
			</span>
			<span>进度</span>
		</div>
		<div class="su-body">
			<el-table
		    :data="tableData"
		    stripe
		    style="width: 100%"
		    align="center">
		    <el-table-column
		      prop="name"
		      label="菜名"
		      width="180"
		      align="center">
		    </el-table-column>
		    <el-table-column
		      prop="status"
		      label="进度"
		      align="center">
		    </el-table-column>
		  </el-table>
		</div>
	</div>
</template>

<script>
	import './schedule.scss';
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css';
	export default {
		data(){
		    return {
		        tableData: [],
		        page:''
		    }
		},
		created(){
			var socket = io.connect('ws://localhost:1703');
			
			socket.on('kitchen',function(food){
				var orders = JSON.parse(decodeURI(food));
				console.log(orders)
				if(food){
					console.log(orders)
					for(var i = 0 ; i < this.$store.state.detail.newarr.length; i++){
						if(this.$store.state.detail.newarr[i].name == orders[0].name){
							this.$store.state.detail.newarr[i].status = '已接单'
						}
					}
					this.tableData = this.tableData.concat(this.$store.state.detail.newarr);
				}
			}.bind(this))
		}

	};
</script>

