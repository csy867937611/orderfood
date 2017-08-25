<template>
	<div class="waiterLook">
		<div class="header">
			<div class="headero">
				<span>西餐厅</span>
			</div>
			<div class="headert">
				<span>基本操作</span>
				<span>财务管理</span>
				<span>辅助工具</span>
				<span>系统维护</span>
			</div>
		</div>
		<div class="body">
			<div class="find">
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
			<div class="aoh">
				<ul>
					<li>
						<span>1001</span>
					</li>
					<li>
						<span>5</span>
						<span>位</span>
					</li>
					<li>
						<span>96</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	var deviceWidth = document.documentElement.clientWidth;		
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	import './waiter.scss';
	import Vue from 'vue'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'

	Vue.use(ElementUI) 

	export default{
		data:()=>{
			return{
				arraoh:[{}],
				input:''
			}
		}
	}

</script>