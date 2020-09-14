<template>
  <section class="hidden-menu">
    <div class="hidden-menu__wrap">
      <div class="row justify-content-between">
        <div class="hidden-menu__nav col-md-4">
          <router-link to class="hidden-menu__title">all products</router-link>
          <ul class="hidden-menu__list">
            <li v-for="(item, i) in categories" :key="'category-' + i" class="hidden-menu__elem">
              <router-link class="hidden-menu__link" to="">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
        <div class="hidden-menu__favorites col-md-8">
          <h3 class="hidden-menu__title">Customer Favorites</h3>
          <ul v-for="(item, i) in favorites" :key="'favorites-' + i" class="hidden-menu__elems favorites row">
            <li class="favorites__elem col-md-4">
              <router-link to>
                <div class="favorites__img">
                  <img src />
                </div>
                <h4 class="favorites__product-title">{{item.title}}</h4>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "vHiddenMenu",
  props: ["categories", "favorites"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.hidden-menu {
  position: absolute;
  left: 0;
  width: 100%;
  height: 500px;
  background-color: white;
  &__wrap {
    padding: 42px 102px 84px;
    box-sizing: border-box;
    background-color: white;
  }
  &__list {
    margin-top: 27px;
  }
  &__link {
    font: 400 16px/24px "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;
    transition: all 0.2s;
    &:hover {
        color: $dark-blue;
    }
  }
  &__elem {
      margin-bottom: 13px;
  }
  &__title {
    font: 900 13px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;
    text-transform: uppercase;
  }
}
</style>