<template>
    <div class="back-top-box"
        v-scroll-hide:isShow
        scroll-hide-distance = '300'
    >
        <transition
            enter-active-class='fadeIn'
            leave-active-class='fadeOut'
        >
            <div class="back-top animated" 
            :size='size'
            v-if="isShow"
        >
			<i class="fa fa-arrow-up"></i>
		</div>
        </transition>
    </div>
</template>
<script>
export default {
  name:'BackTop',
  props:['size'],
  data () {
      return {
          isShow: false
      }
    }
}
</script>
<style lang="scss" scoped>
    @import './index.scss';
</style>

