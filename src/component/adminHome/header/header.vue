<template>
	<div class="dk-header">
		<ul>
			<li><router-link to="/">小蚂蚁点餐后台</router-link></li>
		</ul>
		<ul>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					<i class="fa fa-bars"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					<i class="fa fa-envelope"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					Adminstrator
				</router-link>
			</li>						
		</ul>		
	</div>	
</template>

<script type="text/javascript">
	import './header.scss'
	// import $ from 'jquery'

	export default {
		
	}
</script>