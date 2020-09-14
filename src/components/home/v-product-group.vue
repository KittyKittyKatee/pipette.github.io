<template>
<section class="product-group d-flex flex-column align-items-center">
  <div class="product-group__wrap">
    <div slot="titles" class="product-group__top">
      <h4 class="product-group__category">Gifts and Sets</h4>
      <h2 class="product-group__title title-48">Recently Viewed</h2>
    </div>
  </div>
  <ul class="product-group__list row d-flex justify-content-center">
    <v-product-card class="product-group__product col-lg-3 col-md-6"></v-product-card>
    <v-product-card class="product-group__product col-lg-3 col-md-6"></v-product-card>
    <v-product-card class="product-group__product col-lg-3 col-md-6"></v-product-card>
    <v-product-card class="product-group__product col-lg-3 col-md-6"></v-product-card>
  </ul>
</section>
</template>

<script>
import vProductCard from '@/components/home/v-product-card.vue'

export default {
  name: 'vProductGroup',
  props: {
    msg: String
  },
  components: {
    vProductCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.product-group {
  padding: 144px 0 131px;

  &__wrap {
    padding: 0 15px;
    margin: 0 auto;
  }

  &__list {
    list-style: none;
    max-width: 1230px;
  }

  &__category {
    margin-bottom: 34px;

    text-align: center;
    text-transform: uppercase;
    font: 700 14px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
  }

  &__title {
    margin-bottom: 62px;
    text-align: center;
  }
}
</style>
