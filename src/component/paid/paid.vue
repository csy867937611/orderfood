<template>
	<div class="details">
		<div id="headers">
			<span>
				<router-link to="/waiter">
					<i class="el-icon-arrow-left"></i>
				</router-link>
			</span>
			<span>消费单</span>
		</div>
		<div class="bodys">
			<el-table
		    :data="tableData"
		    stripe
		    style="width: 100%">
		    <el-table-column
		      prop="name"
		      label="菜名"
		      width="180"
		      align="center">
		    </el-table-column>
		    <el-table-column
		      prop="nowPrice"
		      label="价格"
		      align="center">
		    </el-table-column>
		    <el-table-column
		      prop="num"
		      label="数量"
		      align="center">
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
			<el-button type="text" @click="open" width="328">
				付款
			</el-button>
		</div>
	</div>
</template>

<script>
	import '../waiter/details/detail.scss'
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'

	export default {
		data(){
			return {
		        tableData: [],
		        price:''
		    }
		},
		created(){
			var num = 0 ;
			this.tableData = this.tableData.concat(this.$store.state.waiter.newarr) ;
			for(var i = 0 ; i < this.$store.state.waiter.newarr.length; i++){
				num += this.$store.state.waiter.newarr[i].num*this.$store.state.waiter.newarr[i].nowPrice;
			}
			this.price = num ;
		},
		methods:{
			open() {
		        this.$alert(<img src='./src/assets/imgs/1503974911.png'/>,{
		          callback: action => {
		            this.$message({
		              message: `付款成功`
		            });
		          }
		        });
		    }
		}
		
	}
</script>
