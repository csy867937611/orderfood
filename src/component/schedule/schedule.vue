<template>
	<div class="su-details">
		<div id="su-headers">
			<span>
				<router-link to="/detail">
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
		      prop="schedule"
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
			socket.on('chilken',function(food){
				console.log(food);
				/*if(food){
					this.tableData = this.tableData.concat(order);
				}*/
			})
		}

	};
</script>

