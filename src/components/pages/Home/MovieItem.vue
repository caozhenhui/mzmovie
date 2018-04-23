<template>
    <li class="home-movie-item">
       <div class="img-box img-bg">
           <img v-lazy="info.cover.origin" alt="" width="100%">
       </div>
       <div class="item-list">
           <div class="left">
               <div class="movie-name">{{ info.name }}</div>
               <div class="people-look"
                    v-if='type==="now-playing"'
               >{{ info.cinemaCount }}家影院上映&nbsp;&nbsp;{{ info.watchCount }}人购票</div>
           </div>
           <div class="right">
               <span class='span' v-if='type === "now-playing"'>{{ info.grade }}</span>
              <span class="time" v-else>{{ info.premiereAt | premiere }}上映</span>
           </div>
       </div>
    </li>
</template>
<script>
export default {
  name:'MovieItem',
  props:['type','info'],
  data () {
      return {

      }
  }
}
</script>
<style lang="scss" scoped>
    .home-movie-item{
        margin: 0 17px 17px 17px;
        background-color: #f9f9f9;
        -webkit-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        -moz-box-shadow: 0.5px 0.5px 1px #a8a8a8;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
        cursor: pointer;
        .img-box{
            width: 100%;
            height: 1.91813rem;
            .img-box img{
                width: 100%;
                height: 100%;
            } 
        }
        .item-list{
            width: 100%;
            overflow: hidden;
            .left{
                padding: 0.1rem 0 0.1rem 28px;
                float: left;
                .movie-name{
                    font-size: 12px;
                    line-height: 15px;
                    -webkit-user-select: text;
                    user-select: text;
                }
                .people-look{
                    font-size: 8px;
                    color: #9a9a9a;
                    line-height: 15px;
                }
            }
            .right{
                float: right;
                position: relative;
                padding-top: 8px;
                .span{
                  position: absolute;
                  top: 0.12rem;
                  right: 15px;
                  color: #f78360;
                  font-size: 18px;
               }
               .time{
                   display: inline-block;
                   height: 100%;
                   padding-right: 15px;
                   color: #f78360;
                   font-size: 12px;
               }
            }
        }
    }
</style>
