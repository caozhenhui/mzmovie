<template>
    <div class="total">
        <mz-tab-bar>
            <div class="left">
                总价钱：<span>{{ totalinfo.price }}元</span>&nbsp;&nbsp;
                总件数：<span>{{ totalinfo.num }}</span>
            </div>
            <div class="right buy-btn">
                结算
            </div>
        </mz-tab-bar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'Total',
    computed: {
        ...mapGetters(['totalinfo'])
    }
}
</script>

<style scoped>
    .mint-tabbar{
        height: 0.5rem;
        line-height: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left{
        padding: 10px;
    }
    .buy-btn{
        width: 1rem;
        height: 100%;
        line-height: 0.5rem;
        text-align: center;
        background: #ef4f4f;
        color: #fff;
        font-size: 0.18rem;
    }
</style>

