<template>
	<div class="cyq-header">
		<ul>
			<li><router-link to="/">点餐系统后台</router-link></li>
		</ul>
		<ul>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					<i class="fa fa-bars"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				<router-link clas="dropdown-toggle count-info" to="/">
					<i class="fa fa-envelope"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					Admin
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import './header.scss'

	export default {
		
	}
</script>