<template>
<div class="catalog">
  <div v-for="(product) in ALL_PRODUCTS" :key="product.id" class="catalog__list row">
    <v-product-card :product="product" class="col-md-3"></v-product-card>
  </div>
</div>
</template>

<script>
import vProductCard from '@/components/home/v-product-card.vue'
import {
  mapGetters,
  mapActions
} from 'vuex';

export default {
  name: 'Catalog',
  props: {
    msg: String
  },
  components: {
    vProductCard
  },
  computed: {
    ...mapGetters([
      'ALL_PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS'
    ])
  },
  created() {
    this.GET_PRODUCTS();
  },
}
</script>
