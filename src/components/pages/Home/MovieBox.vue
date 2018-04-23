<template>
	<div class = "home-movie-box">
		<ul class = "movie-list">
			<movie-item
				v-for = 'film in films'
				:key = 'film.id'
				:info = 'film'
				:type = 'type.url_type'
			></movie-item>
		</ul>
		
		<router-link class="more-button"
			tag = "div"
			to = "/films"
		>
			更多{{type.title}}电影
		</router-link>
	</div>
</template>
<script>
	import MovieItem from './MovieItem'
	export default{
		name:'MovieBox',
		props:['type'],
		data () {
			return {
				films:[],
				page:1,
			}
		},
		methods:{
			getFilms () {
				let {page} = this;
				let {count , url_type} = this.type;
				this.$http.get('/mz/v4/api/film/'+url_type,{
					params:{
						page,count,__t:Date.now()
					}
				}).then((res)=>{
					this.films = res.data.data.films;
				})
			}
		},
		created(){
			this.getFilms();
		},
		components:{
			MovieItem
		}
	}
</script>
<style lang='scss'>
	.home-movie-box{
		.movie-list{
			padding-top: 18px;
			margin-bottom:10px;
		}
		.more-button{
			width: 1.6rem;
			height: 0.3rem;
			border: 1px solid #aaa;
			border-radius: 0.15rem;
			margin: 0.1rem auto 0.3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;
			color:#616161;
			cursor: pointer;
		}
	}
</style>
