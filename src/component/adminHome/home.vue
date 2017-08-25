<template>
	<div class="cyq-container">
		<cyq-header></cyq-header>
		<div class="cyq-body">
			<cyq-nav></cyq-nav>
			<div class="cyq-content">
				<div class="cyq-toolbar" style="background:#fff;">
					<a href="javascript:" class="btn btn-primary btn -sm" :class="value.class" v-if="toolList" v-for="(value,key) in toolList" @click="click(value)">{{value.text ? value.text : key}}</a>
				</div>
				<router-view class="cyq-viewer"></router-view>
			</div>
		</div>
		<div class="cyq-footer">@cyq</div>	
	</div>
</template>

<script>
	import './home.scss'
	import nav from './nav/nav.vue'
	import header from './header/header.vue'

	export default {
		components: {
			'cyq-nav': nav,
			'cyq-header':header
		},
		data: function() {
			return {
				toolList:null
			}
		},
		methods: {
			addTool(arg) {
				this.toolList = arg
			},
			click(arg) {
				if(arg.event) {
					arg.event()
				}
			}
		}
	}
</script>