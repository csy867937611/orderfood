<template>
	<div class="details">
		<div id="headers">
			<span>
				<router-link to="/detail">
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
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="nowPrice"
		      label="价格">
		    </el-table-column>
		    <el-table-column
		      prop="num"
		      label="数量">
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
			var num = 0;
			var socket = io.connect('ws://localhost:1703');
			socket.on('clientOrder',function(order){
				var orders = JSON.parse(decodeURI(order));
				if(orders){
					console.log(orders);
					this.tableData = this.tableData.concat(orders);
					for(var i = 0 ; i < orders ; i++){
						num += orders[i].num*orders[i].nowPrice;
					}
					this.price = num ;
				}
			}.bind(this))
			if(this.$store.state.nav.cart != ''){
				this.tableData = this.tableData.concat(this.$store.state.nav.cart);
				for(var i = 0 ; i < this.$store.state.nav.cart.length; i++){
					num += this.$store.state.nav.cart[i].num*this.$store.state.nav.cart[i].nowPrice;

				}
				this.price = num ;
			}
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
