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
	import wsurl from '../../assets/common/common.js'

	var _wsurl = wsurl.global.wsurl;
	export default {
		data(){
		    return {
		        tableData: [],
		        page:''
		    }
		},
		created(){
			this.tableData = this.tableData.concat(this.$store.state.waiter.newarr);
			var socket = io.connect(_wsurl);
			socket.on('kitchen',function(food){
				var orders = JSON.parse(decodeURI(food));
				console.log(orders);
				this.tableData = orders;
				for(var i = 0 ; i < orders.length; i++){
					if(orders[i].status == '已完成'){
						this.$alert(orders[i].name+'上菜','注意', {confirmButtonText:'确定' ,callback(){}
						})
					}
					
					
				}
				/*if(food){
					console.log(orders)
					console.log(this.$store.state.detail.newarr)
					for(var i = 0 ; i < this.$store.state.detail.newarr.length; i++){
						if(this.$store.state.detail.newarr[i].name == orders[0].name){
							this.$store.state.detail.newarr[i].status = '已接单'
						}
					}
					this.tableData = this.tableData.concat(orders);
				}*/
			}.bind(this));
			socket.on('suc',function(getfood){
				var _getfood = JSON.parse(decodeURI(getfood));
				console.log(_getfood)
			})
		}

	};
</script>

