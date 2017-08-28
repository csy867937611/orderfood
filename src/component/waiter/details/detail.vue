<template>
	<div class="details">
		<div id="headers">
			<span>1001</span>
		</div>
		<div class="bodys">
			<el-table
		    :data="tableData"
		    stripe
		    style="width: 100%">
		    <el-table-column
		      prop="date"
		      label="菜名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="进度">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="要求">
		    </el-table-column>
		  </el-table>
		  
		</div>
		<div class="footers">
			<div class="money">
				<p>
					<span>应付</span>
					<span>:</span>
					<span>0.00</span>
				</p>
			</div>
			<input type="button" class="paid" value="买单">
		</div>
	</div>
</template>

<script>
	import './detail.scss'
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'
	export default{
		data() {
		      return {
		        tableData: [{
		          date: '豆角小炒肉',
		          name:'制作中',
		          address: <el-button type="warning">催单</el-button>
		        }]
		      }
		    }
	}
</script>

<style>
</style>