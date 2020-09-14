<template>
<section class="banner">
  <div class="banner__wrap">
    <div class="banner__main">
      <v-banner-slide></v-banner-slide>
    </div>
  </div>
</section>
</template>

<script>
import vBannerSlide from '@/components/home/v-banner-slide.vue'

export default {
  name: 'vBanner',
  props: {
    msg: String
  },
  components: {
    vBannerSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

</style>
