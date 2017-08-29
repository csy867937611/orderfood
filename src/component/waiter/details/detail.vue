<template>
	<div class="details">
		<div id="headers">
			<span>{{page}}</span>
		</div>
		<div class="bodys">
			<el-table
		    :data="tableData"
		    stripe
		    style="width: 100%">
		    <el-table-column
		      prop="name"
		      label="菜名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="schedule"
		      label="进度">
		    </el-table-column>
		    <el-table-column
		      prop="require"
		      label="要求">
		    </el-table-column>
		  </el-table>
		  
		</div>
		<div class="footers">
			<div class="money">
				<p>
					<span>应付</span>
					<span>:</span>
					<span>{{price}}</span>
				</p>
			</div>
			<input type="button" class="paid" value="买单" @click="showDetail">
		</div>
	</div>
</template>


<script>
	import './detail.scss'
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'
	export default{
		data(){
		      return {
		        tableData: [{
		          name: '豆角小炒肉',
		          schedule:'进行中...',
		          require: <el-button type="warning">催单</el-button>
		        }],
		        page:'',
		        price:''
		      }
		    },
		methods:{
			showDetail:function(){
				console.log(this);
				this.$store.dispatch('showDetail');
			},
			reminder:function(){
				console.log(666);
			}
			
		},
		created(){
			this.page = this.$route.query.obj.id;
			var number = 0;
			for(var i = 0 ; i < this.$store.state.detail.arr.length; i++){
				this.$store.state.detail.arr[i].require = <el-button type="warning">催单</el-button>;
				number += this.$store.state.detail.arr[i].price
			}
			this.price = number;
			this.tableData = this.tableData.concat(this.$store.state.detail.arr)
		}
	}
</script>

<style>
</style>