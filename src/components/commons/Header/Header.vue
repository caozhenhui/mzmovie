<template>
	<header class="app-header">
		<nav class="header-nav">
			<div class="left">
				<div class="title-icon" @click="isNavShow=!isNavShow">
					<i class="fa fa-navicon"></i>
				</div>
				<div class="title">{{ title }}</div>
			</div>
			<div class="right">
				<div class="city">
					北京
					<i class="fa fa-angle-down"></i>
				</div>
				<div class="user">
					<i class="fa fa-user-o"></i>
				</div>
			</div>
		</nav>
		
		<nav-list :is-nav-show='isNavShow' :close-nav='closeNav'></nav-list>
	</header>
</template>
<script>
	import NavList from './NavList';
	//垮组件操作数据
	import bus from '../../../modules/bus';
	//引入路由创建全局钩子 操作遮罩
	import router from '../../../router';

	export default{
		name:'AppHeader',
		components:{
			NavList
		},
		data (){
			return {
                isNavShow:false,
                title:'卖座电影'
			}
		},
		methods:{
			closeNav(){
				this.isNavShow = false;
			}
		},
		created () {
			router.beforeEach((to, from, next) => {
                let title = '卖座电影'
                switch (to.name) {
                    case 'films': title = '电影列表'; break;
                    case '404': title = '404'; break;
                    case 'goods': title = '商品列表'; break;
                    case 'buycar': title = '购物车'; break;
					case 'mine': title = '个人中心'; break;
					case 'user' :title = '我的'; break;
					case 'login' :title = '登录'; break;
                }
                this.title = title;
				//切换路由时候控制遮罩
				this.closeNav();
				next();
			})
		}
	}
</script>
<style>
	.app-header{
	    position: fixed;
	    top: 0;
	    width: 100%;
	    height: 0.5rem;
	    line-height: 0.5rem;
	    z-index: 2;
	}
	.header-nav{
		position: relative;
		z-index: 999;
		overflow: hidden;
		background: #282828;
	}
	.app-header .left{
		color: #fff;
	    font-size: 16px;
	    line-height: 0.5rem;
	    height: 0.5rem;
	    float: left;
	}
	.title-icon{
		float: left;
   		width: 0.48rem;
	    text-align: center;
	    border-right: 1px solid #222;
	    box-shadow: 1px 0 1px #363636;
	    color: #999;
	}
	.title{
		float: left;
		color: #fff;
		padding: 0 1em;
		font-size: 14px;
	}
	.app-header .right{
		float: right;
		color: #999;
	}
	.city{
		float: left;
	}
	.user{
		float: right;
		width: 0.48rem;
		text-align: center;
	}
</style>