<template>
    <div class="page">
        <cell
            v-for = 'good in goods'
            :key = 'good.id'
            :title = 'good.model'
            :label = '"￥" + good.price'
            :img = 'good.imgUrl'
        >
            <mz-button type="danger" size='small'
                @click="addGoodInCar(good)"
            >加入购物车</mz-button>
        </cell>
        <router-link class="foot"
            tag="div"
            to="/buycar"
        >
            我的购物车
        </router-link>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name:'Goods',
    data () {
        return {
            //商品列表信息
            goods:[]
        }
    },
    created () {
        //获取商品信息
        this.$http.get('/static/json/goodslist.json').then((res) => {
            this.goods = res.data
        })
    },
    methods:{
        ...mapActions(['addGoodInCar'])
    }
}
</script>

<style lang="scss" scoped>
    .foot{
        width: 100%;
        height: 0.50rem;
        position: fixed;
        bottom: 0;
        color: #fff;
        background: #ef4f4f;
        text-align: center;
        line-height: 0.50rem;
    }
</style>

