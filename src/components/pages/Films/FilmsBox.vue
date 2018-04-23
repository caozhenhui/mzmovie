<template>
	<div class="films-box"
		v-infinite-scroll="loadMore"
		infinite-scroll-disabled="loading"
		infinite-scroll-distance="10"
		infinite-scroll-immediate-check="false"
	>

		<films-item
			v-for = 'film in films'
			:key = 'film.id'
			:type = 'type'
			:film = 'film'
		></films-item>
	</div>
</template>
<script>
import FilmsItem from './FilmsItem';
import { Toast } from 'mint-ui';

export default {
	name: 'FilmsBox',
	props:['type'],
	data () {
		return {
			films:[],// 存入电影的数据
			page:1,//页数
			count:7,//每页多少条
			loading:false,//是否正在加载的开关
			hasMore:true//是否拥有更多的开关
		}
	},
	methods:{
		getFims () {
			//开始请求
			this.loading = true;
			//请求交互
			let toast = Toast({
				message: '正在加载...',
				duration: -1,
				iconClass:'fa fa-cog fa-spin'
			});
			let { type, page, count, time } = this;
			this.$http.get('/mz/v4/api/film/'+type,{
				params:{ page, count}
			}).then((res) => {
				//将新获取到的数据拼接到当前的数组里
				this.films = this.films.concat(res.data.data.films);
				//请求交互结束
				toast.close();
				//表示请求结束
				this.loading = false;
				let { current,total } = res.data.data.page;
				 //判断是否还有更多的数据
				if(total - current <=0 ){
					this.hasMore = false
					return false
				}
				// 如果还有更多数据，页数++
				this.page ++
			})
		},
		loadMore() {
			//如果没有更多了
			if(!this.hasMore){
				Toast({
					message: '没有更多了',
					position:'bottom',
					duration:1000
				});
				return false;
			}
			this.loading = true;
			this.getFims();
		}
	},
	watch:{
		type:{
			immediate:true,
			handler(){
				//切换时候重置数据
				this.page = 1;
				this.films = [];
				this.hasMore = true;
				this.loading = false;
				this.getFims();
			}
		}
	},
	components:{ FilmsItem }
}
</script>

<style lang="scss" scoped>
   
</style>

