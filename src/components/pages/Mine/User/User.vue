<template>
    <div class="mine-user page">
        <h2>{{userInfo.userName}}</h2>
        <button @click="EXIT">注销</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { EXIT } from '@/store/other/const';
export default {
    name:'User',
    computed:{
        ...mapState({
            userInfo:(state) => {
                return state.other.userInfo
            }
        })
    },
    methods:{
        ...mapMutations([EXIT])
    }
}
</script>

<style scoped>

</style>

