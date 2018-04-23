<template>
    <div class="mine">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Mine',
    computed: mapState({
        userInfo:(state) => {
            return state.other.userInfo
        }
    }),
    watch:{
        'userInfo.userName':{
            immediate:true,
            handler (newval) {
                if ( newval ) {
                    this.$router.replace({name:"user"});
                } else {
                    this.$router.replace({name:'login'});
                }
            }
        }
    }
    
}
</script>

<style scoped>

</style>

