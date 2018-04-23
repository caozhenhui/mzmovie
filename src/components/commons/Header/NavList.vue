<template>
	<div>
		<transition
			enter-active-class='animated slideInLeft'
			leave-active-class='animated slideOutLeft'
		>
			<nav class="nav-list" v-if='isNavShow'>
				<ul @click.stop='closeNav'>
					<router-link 
						v-for='nav in navs' 
						:key='nav.id'
						tag="li"
						:to="{name:nav.name}"	
					>
						<span>{{ nav.title }}</span>
						<i class="fa fa-angle-right"></i>
					</router-link>
				</ul>
			</nav>
		</transition>
		<transition
			enter-active-class='animated fadeIn'
			leave-active-class='animated fadeOut'
		>		
			<div class="shade" v-if='isNavShow' @click='closeNav'></div>
		</transition>
	</div>
</template>

<script>
	export default{
		name:'NavList',
		data () {
			return {
				navs:[
					{id:1, title:'首页',name:'home'},
					{id:2, title:'影院',name:'films'},
					{id:3, title:'商品',name:'goods'},
					{id:4, title:'购物车',name:'buycar'},
					{id:5, title:'个人中心',name:'mine'}
				]
			}
		},
		props:['isNavShow','closeNav']
	}
</script>

<style>
	.animated{
		animation-duration: 0.5s;
	}
	.nav-list{
		position: fixed;
		top: 0.5rem;
		width: 2.65rem;
		height: 100%;
		background: #282828;
		border-top: 1px solid #222;
    	box-shadow: 0 1px 1px #363636 inset;
		z-index: 999;
	}
	.nav-list li{
		color: #999;
		width: 100%;
		height: 0.5rem;
		border-bottom: 1px solid #222;
		position: relative;
	}
	.nav-list li span{
		float: left;
		margin-left: 16px;
		font-size: 14px;
		color: #9a9a9a;
	}
	.nav-list li i{
		margin-right: 16px;
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translate(0,-50%);
	}
	
</style>