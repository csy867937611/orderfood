<template>
	<div class="details">
		<div id="headers">
			<span>
				<router-link to="/waiter">
					<i class="el-icon-arrow-left"></i>
				</router-link>
			</span>
			<span>{{page}}</span>
		</div>
		<div class="bodys">
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
		      prop="time"
		      label="制作时间"
		      align="center">
		    </el-table-column>
		    <el-table-column
		      prop="remain"
		      label="库存"
		      align="center">
		    </el-table-column>
		  </el-table>
		  
		</div>
		<div class="footers">
			<router-link to='/schedule' class="money">
				<span>查看进度</span>
			</router-link>
			<router-link to='/paid' class="paid">
				<span>买单</span>
			</router-link>
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
		        tableData: [],
		        page:''
		      }
		    },
		methods:{
			
			reminder:function(){
				console.log(666);
			}
			
		},
		created(){
			this.$store.dispatch('showDetail');
			if(this.$route.query.obj.id){
				console.log(777);
				this.page = this.$route.query.obj.id;
			}else{
				
				this.page = '1001';
			}
			var number = 0;
			var socket = io.connect('ws://localhost:1703');
			socket.on('clientOrder',function(order){
				var orders = JSON.parse(decodeURI(order));
				if(orders){
					console.log(orders);
					this.tableData = this.tableData.concat(orders);
				}
			}.bind(this))
			/*if(this.$store.state.nav.cart != ''){
				for(var i = 0 ; i < this.$store.state.nav.cart.length; i++){
					this.$store.state.nav.cart[i].require = <el-button type="warning">催单</el-button>;
				}
				this.tableData = this.tableData.concat(this.$store.state.nav.cart);
			}
			console.log(this.$store.state.nav.cart);*/
		}
	}
</script>

<style>
</style>