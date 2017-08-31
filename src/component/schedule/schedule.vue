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
			socket.on('suc', (data)=> {
		        console.log(1234, JSON.parse(decodeURI(data)));
		        var res = JSON.parse(decodeURI(data));
		        this.tableData = res;
		        for(var i = 0 ; i < res.length; i++){
					if(res[i].status == '已完成'){
						this.$alert(res[i].name+'上菜','注意', {confirmButtonText:'确定' ,callback(){}
						})
					}	
				}
		    });
		}

	};
</script>

