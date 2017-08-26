<template>
	<div :class="['cyq-nav-content', navOpen ? '' : 'toggle']" ref="cyqnav">
		<ul class="cyq-nav">
			<li class="cyq-nav-item nav-toggle">
				<a href="javascript:" class="btn btn-primary" @click="toggleNav">
					<i class="fa fa-bars"></i>
				</a>
			</li>
			<li class="cyq-nav-item" @click="toggleNavItem">
				<a href="javascript:">
					<i class="fa fa-file-o"></i>
					<span>菜单管理</span>
					<i class="fa fa-angle-left"></i>
				</a>
				<ul class="cyq-sub-nav">
					<li><router-link to="/">菜单浏览</router-link></li>
					<li><router-link to="/">菜单查询</router-link></li>
				</ul>
			</li>
			<li class="cyq-nav-item" @click="toggleNavItem">
				<a href="javascript:">
					<i class="fa fa-cog"></i>
					<span>系统设置</span>
					<i class="fa fa-angle-left"></i>
				</a>
				<ul class="cyq-sub-nav">
					<li><router-link to="/">待定</router-link></li>
					<li><router-link to="/">待定</router-link></li>
				</ul>
			</li>	
		</ul>
	</div>
</template>

<script>
	import './nav.scss'
	import $ from 'jquery'

	export default {
		data() {
			return {
				navOpen: true
			}
		},
		methods: {
			toggleNavItem(event) {
				if(!this.navOpen) {
					this.navOpen = true;
				}
				let self = $(event.target);
				if(self.closest('.cyq-sub-nav')[0]) {
					return;
				}
				if(!self.is('.cyq-nav-item')) {
					self = self.closest('.cyq-nav-item');
				}
				self.toggleClass('active');
			},
			toggleNav(event) {
				this.navOpen = !this.navOpen;
				$('.cyq-nav-item').removeClass('active');
			}
		}
	}
</script>