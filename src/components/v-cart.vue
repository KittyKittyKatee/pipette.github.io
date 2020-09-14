<template>
<section v-if="CART_STATUS && CART_COUNT" class="cart">
  <div class="cart__wrap">
    <div class="cart__top">
      <h3 class="cart__title">Your Cart</h3>
      <span class="cart__shipping">You qualify for free shipping!</span>
      <span class="cart__promo">30% Off Sitewide. Use code: <strong>1YEAR</strong></span>
      <button @click="openCloseCart()" class="cart__close" >+</button>
    </div>
    <ul class="cart__list scroll">
      <li v-for="(cartItem, i) in CART" :key="'cartItem' + i" class="cart__item cart-item d-flex justify-content-between align-items-center">
        <div class="cart-item__img">
          <img src="../assets/imgs/OvernightBrightening__478x676_f85986ad-4288-492b-ae64-6396b9462415_1024x.png" alt="">
        </div>
        <div class="cart-item__main">
          <h4 class="cart-item__title">
            <a href="#">{{cartItem.title}}</a>
          </h4>
          <span class="cart-item__price">${{cartItem.price}}</span>
          <div class="cart-item__count d-flex align-items-center">
            <button>-</button>
            <input v-model="cartItem.count" type="text" id="count" value="1">
            <button>+</button>
          </div>
          <button  @click="removeCartItem(cartItem.id)" class="cart-item__close">+</button>
        </div>
      </li>
    </ul>
    <div class="cart__bottom">
      <div class="cart__subtotal d-flex justify-content-between align-items-center">
        <h5>SUBTOTAL</h5>
        <span class="cart__total-price">${{totalPrice}}</span>
      </div>
      <button class="cart__btn btn-main">Checkout</button>
    </div>
  </div>
</section>
</template>

<script>
import {
  mapActions,
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'vCart',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'CART','CART_STATUS', 'CART_COUNT'
    ]),
    totalPrice() {
      return this.CART.reduce(((acc, current) => acc + current.price*current.count), 0) 
    }
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_CART'
    ]),
    ...mapMutations([
      'OPEN_CLOSE_CART'
    ]),
    removeCartItem(id) {
      this.REMOVE_FROM_CART(id)
    },
    openCloseCart() {
      this.OPEN_CLOSE_CART();
    }
  }
}
</script>

<style lang="scss">
.cart {
  position: fixed;
  top: 90px;
  right: 0;
  width: 430px;
  z-index: 100;
  max-height: calc(100vh - 100px);

  padding: 0 0 165px;

  background-color: #fafaf2;

  &__wrap {
    max-height: calc(100vh - 100px);
    padding: 0 0 165px;
    box-sizing: border-box;
  }

  &__title {
    margin-bottom: 14px;

    font: 400 24px/1 "Recoleta", Helvetica, sans-serif;
    color: $dark-blue;
    text-decoration: underline;
  }

  &__top {
    padding: 26px 32px;
  }

  &__shipping,
  &__promo {
    display: inline-block;
    margin-bottom: 10px;

    font: 400 16px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;
  }

  &__list {
    list-style: none;
    padding: 0 32px;
    margin-bottom: 165px;
    max-height: calc(100vh - 380px);
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 50px;
    font-weight: 300;
    color: $dark-blue;
    appearance: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    transform: rotate(45deg);
  }

  &__bottom {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 105px;

    padding: 10px 32px;
    box-sizing: border-box;

    background-color: $very-light-green;
  }

  &__btn {
    width: 100%;
  }

  &__subtotal h5 {
    font: 600 14px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;
  }

  &__total-price {
    font-size: 18px;
  }
}

.cart-item {
  position: relative;
  height: 170px;

  padding: 16px 40px 16px 0;
  border-bottom: 1px solid #eff1e8;

  &__img {
    width: 110px;
    height: 110px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 24px;
    font-weight: 600;
    color: $dark-blue;
    appearance: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    transform: rotate(45deg);
  }

  &__title a {
    margin-bottom: 7px;

    font: 700 16px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;
  }

  &__price {
    display: inline-block;
    margin-bottom: 20px;

    font: 400 16px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;
  }

  &__count {
    height: 57px;
    width: 120px;

    margin-right: 25px;
    padding: 16px 0;
    box-sizing: border-box;

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
}
</style>
