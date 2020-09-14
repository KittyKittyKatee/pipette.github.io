<template>
<div id="app">
  <app-header></app-header>
  <transition name="slide-left">
    <v-cart></v-cart>
  </transition>
  <router-view />
</div>
</template>

<script>
import appHeader from '@/components/Header.vue'
import vCart from '@/components/v-cart.vue'

import {
  mapActions
} from 'vuex'

export default {
  name: 'nav',
  props: {
    msg: String
  },
  components: {
    appHeader,
    vCart
  },
  methods: {
    ...mapActions([
      'SET_CART'
    ]),
  },
  created() {
    this.SET_CART()
  },
}
</script>

<style lang="scss">
.slide-left-enter, .slide-left-leave-to{
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s;
}
.slide-left-enter-to{
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s;
}
.slide-left-leave-to {
  opacity: 0;
  transition: all 0.3s;
}
</style>
