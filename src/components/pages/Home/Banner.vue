<template>
	<div class="swiper-container app-banner">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide img-bg"
	        	v-for="banner in banners"
	        	:key="banner.id"
	        >
	        	<img :src="banner.imageUrl" width="100%">
	        </div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	import Vue from 'vue';
	import '../../../../node_modules/swiper/dist/css/swiper.min.css';
	export default {
		name:'AppBanner',
		data(){
			return {
				banners:[]
			}
		},
		mounted () {
			this.$http.get('/mz/v4/api/billboard/home',{
				params:{__t:Date.now()}
			}).then((res)=>{
				this.banners = res.data.data.billboards;
				Vue.nextTick(()=>{
					new Swiper('.app-banner',{
						pagination:{
							el:'.swiper-pagination'
						},
						autoplay:true
					})
				})
			})
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-wrapper{
		width: 100%;
		height: 2.1094rem;
	}
	.swiper-slide{
		width: 100%;
		height: 2.1094rem;
	}
</style>

