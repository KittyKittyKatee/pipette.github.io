<template>
  <header class="header">
    <div class="header__wrap d-flex justify-content-between align-items-center">
      <div class="header__menu">
        <nav>
          <ul class="header__nav d-flex justify-content-between align-items-center">
            <li @mouseover="activeMenu('baby')"><router-link class="header__link" to="/catalog/baby">Baby</router-link></li>
            <li @mouseover="activeMenu('mom')" @mouseleave="menuActive = false"><router-link class="header__link" to="/catalog/mom">Mom</router-link></li>
            <li><router-link class="header__link" to="/catalog/family">Family</router-link></li>
            <li><router-link class="header__link" to="/catalog/gifts">Gifts</router-link></li>
            <li><router-link class="header__link" to="/catalog/learn">Learn</router-link></li>
            <li><router-link class="header__link" to="/catalog/blog">Blog</router-link></li>
          </ul>
        </nav>
      </div>
      <router-link class="header__logo" to="/catalog/blog">
        <img src="../assets/imgs/logo.svg" alt />
      </router-link>
      <div class="header__utilities d-flex justify-content-between align-items-center">
        <div class="header__utilit header__search">
          <img src="../assets/imgs/search.svg" alt />
        </div>
        <div class="header__utilit header__user">
          <img src="../assets/imgs/user.svg" alt />
        </div>x
        <div @click="openCloseCart()" class="header__utilit header__cart">
          <img src="../assets/imgs/cart.svg" alt />
          <div v-show="CART_COUNT" class="header__cart-count">{{CART_COUNT}}</div>
        </div>
      </div>
    </div>
    <v-hidden-menu v-if="menuActive" :categories="categories" :favorites="favorites"></v-hidden-menu>
  </header>
</template>

<script>
import vHiddenMenu from "@/components/v-hidden-menu.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "appHeader",
  props: {
    msg: String
  },
  data() {
    return {
      categories: [],
      favorites: [],
      menuActive: true
    };
  },
  components: {
    vHiddenMenu
  },
  computed: {
    ...mapGetters([
      "CART_COUNT",
      "BABY_CATEGORIES_MAIN",
      "BABY_CATEGORIES_FAVORITES",
      "MOM_CATEGORIES_MAIN",
      "MOM_CATEGORIES_FAVORITES"
    ])
  },
  methods: {
    ...mapActions(["GET_CATEGORIES_BABY", "GET_CATEGORIES_MOM"]),
    ...mapMutations(["OPEN_CLOSE_CART"]),
    openCloseCart() {
      this.CART_COUNT ? this.OPEN_CLOSE_CART() : false;
    },
    activeMenu(category) {
      switch (category) {
        case "baby":
          this.categories = this.BABY_CATEGORIES_MAIN;
          this.favorites = this.BABY_CATEGORIES_FAVORITES;
          break;
        case "mom":
          this.categories = this.MOM_CATEGORIES_MAIN;
          this.favorites = this.MOM_CATEGORIES_FAVORITES;
          break;
      }
      this.menuActive = true;
    }
  },
  created() {
    this.GET_CATEGORIES_BABY();
    this.GET_CATEGORIES_MOM();
  }
};
</script>

<style lang="scss">
.header {
  height: 90px;
  position: relative;

  ul {
    list-style: none;
  }

  &__nav {
    margin: 0;
  }

  &__wrap {
    height: 90px;

    padding: 0 45px;
  }

  &__logo {
    margin-left: -350px;
  }

  &__menu nav {
    width: 440px;
  }

  &__link {
    margin-right: 30px;
    padding-right: 3px;

    font: 400 16px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;

    cursor: pointer;

    &:hover {
      font-weight: 500;
      color: $dark-blue;
      text-decoration: none;
    }
  }

  &__cart {
    position: relative;
  }

  &__utilit {
    margin-right: 20px;

    cursor: pointer;
  }

  &__cart-count {
    position: absolute;
    top: 60%;
    left: -5px;

    width: 20px;
    height: 20px;

    padding-top: 5px;
    border-radius: 10px;

    font: 400 12px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    text-align: center;

    background-color: $light-green;
  }
}
</style>
