<template>
<li class="product-card">
  <router-link :to="'/catalog/product/'+ product.id">
    <div class="product-card__top">
      <div class="product-card__img">
        <img src="../../assets/imgs/FALL19_PDP_FragranceFree_BellyButter_front.png">
      </div>
      <div class="product-card__badge">
        <img src="../../assets/imgs/EWG_green-v1579137793862.png">
      </div>
    </div>
    <div class="product-card__main d-flex flex-column align-items-center">
      <h3 class="product-card__title">{{product.title}}</h3>
      <div class="product-card__rating d-flex">
        <div class="product__stars d-flex">
          <div v-for="i in roundRating" :key="i">
            <img src="../../assets/imgs/star.svg">
          </div>
          <div v-for="i in (5 - roundRating)" :key="i">
            <img src="../../assets/imgs/star-outline.svg">
          </div>
        </div>
        <span>({{product.rating}} stars)</span>
      </div>
      <span class="product-card__reviews">{{product.reviews}} reviews</span>
      <span class="product-card__price">${{product.price}}</span>
    </div>
    <div class="product-card__btns d-flex justify-content-center">
      <div class="product-card__count d-flex justify-content-between">
        <button>-</button>
        <input type="text" id="count" value="1">
        <button>+</button>
      </div>
      <button class="product-card__btn btn-main">Add to Cart</button>
    </div>
  </router-link>
</li>
</template>

<script>
export default {
  name: 'vProductCard',
  props: {
    product: Object
  },
  computed: {
    roundRating() {
      return Math.round(this.product.rating)
    }
  },
}
</script>

<style lang="scss">
.product-card {
  a {
    text-decoration: none;
    color: $dark-blue;
    width: 100%;
    height: 100%;

    &:hover {
      text-decoration: none;
      color: $dark-blue;

      .product-card__btns {
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }

  &__stars {
    margin-right: 5px;

    img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }

  &__btns {
    opacity: 0;
    transition: all 0.3s;
  }

  &__rating {
    margin-bottom: 10px;

    span {
      padding-top: 3px;

      font: 400 12px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    }
  }

  &__price {
    font: 700 20px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
  }

  &__count {
    height: 57px;
    width: 120px;

    margin-right: 25px;
    padding: 16px;
    box-sizing: border-box;
    border: 2px solid $dark-blue;

    button {
      font-size: 20px;
      color: $dark-blue;
      appearance: none;
      background-color: transparent;
      border: none;
      box-shadow: none;
    }

    input {
      width: 35px;
      appearance: none;
      background-color: transparent;
      border: none;
      box-shadow: none;
      font: 400 14px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
      color: $dark-blue;
      text-align: center;
      outline: none;
    }
  }

  &__reviews {
    margin-bottom: 10px;

    font: 400 12px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
  }

  &__top {
    position: relative;
  }

  &__main {
    padding: 28px 0 20px;
    box-sizing: border-box;
  }

  &__title {
    margin-bottom: 6px;

    font: 400 24px/1 "Recoleta", Helvetica, sans-serif;
  }

  &__badge {
    position: absolute;
    top: 0;
    right: 0;

    width: 44px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__img {
    width: 100%;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
