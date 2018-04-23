<template>
    <div class="login page">
        <form @submit.prevent = "login">
            ID:<input type="text" v-model = "userName">
            PASS:<input type="password" v-model = "password">
            <button type="submit">登录</button>
        </form>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    name:'Login',
    data () {
        return {
            userName: '',
            password:'',
            params:null
        }
    },
    methods: {
        login () {
            let {userName ,password} = this;
            let params = {userName, password, callback:(data) => {
                if(data === 1) {
                    Toast({
                        message:'登录成功',
                        duration:1000
                    })
                }else {
                    Toast({
                        message:'登录失败',
                        duration:1000
                    })
                }
            }};
            this.$store.dispatch('login',params)
        }
    }
}
</script>

<style>

</style>
