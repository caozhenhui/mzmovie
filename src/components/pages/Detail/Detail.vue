<template>
    <div class="detail">
        {{ film }}
    </div>
</template>
<script>
export default {
    name:'Detail',
    props:['id'],
    data () {
        return {
            film:{}
        }
    },
    methods:{
        getItem () {
            this.$http.get('mz/v4/api/film/'+ this.id,{
                params:{__t:Date.now()}
            }).then((res) => {
                this.film = res.data.data.film
            })
        }
    },
    created () {
        this.getItem()
    }
}
</script>
<style lang="scss" scoped>

</style>
