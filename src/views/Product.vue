<template>
<section class="product">
  <div class="product__main">
    <div class="product__wrap">
      <p>{{CART}}</p>
      <div class="row align-items-center">
        <div class="product__imgs col-md-6">
          <div class="product__img">
            <img src="../assets/imgs/Baby-Oil_1024x.png">
          </div>
        </div>
        <div class="product__info col-md-6">
          <h2 class="product__title title-48">{{product.title}}</h2>
          <div class="product__rating d-flex">
            <div class="product__stars d-flex">
              <div v-for="i in roundRating" :key="i">
                <img src="../assets/imgs/star.svg">
              </div>
              <div v-for="i in (5 - roundRating)" :key="i">
                <img src="../assets/imgs/star-outline.svg">
              </div>
            </div>
            <span>({{product.rating}} stars)</span>
            <span class="product__reviews">{{ALL_REVIEWS.length}} reviews</span>
          </div>
          <div class="product__price text-20">
            <strong>${{product.price}}</strong>
            <span>{{product.size}}</span>
          </div>
          <div class="product__btns d-flex">
            <div class="product__count d-flex justify-content-between">
              <button @click="decrement()">-</button>
              <input v-model="count" @change="checkValue()" type="text" id="count">
              <button @click="increment()">+</button>
            </div>
            <button class="product__btn btn-main" @click="addToCart()">Add to Cart</button>
          </div>
          <p class="text-20">{{product.desc}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="product__ingredients ingredients">
    <div class="ingredients__wrap">
      <div class="row align-items-center">
        <div class="ingredients__img col-md-6">
          <img src="../assets/imgs/PIP_PDP_Single_90-v1565707451035.jpg">
        </div>
        <div class="ingredients__content col-md-6">
          <div class="ingredients__body">
            <h3 class="ingredients__title title-32">Clean ingredients you can trust</h3>
            <div class="ingredients__main" v-html="product['main-ingredients']">
            </div>
            <div class="ingredients__list">
              <transition-group name="slide-up" tag="div">
                <div class="ingredients__subtitle d-flex justify-content-between align-items-center" key="1">
                  <h6>Full list of ingredients</h6>
                  <span @click="ingredientsActive = !ingredientsActive" :class="{active: ingredientsActive}">+</span>
                </div>
                <div v-show="ingredientsActive" class="ingredients__hidden scroll" key="2" v-html="product.structure">
                </div>
              </transition-group>
            </div>
            <button class="ingredients__btn btn-main btn-one-border">Learn more about our ingredients</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product__using using row align-items-center">
    <div class="using__wrap">
      <div class="row align-items-center">
        <div class="using__media col-md-6">
          <div class="using__video">
            <img src="../assets/imgs/SPR20_PDP_BabyOil_lifestyle-v1593014955241.jpg">
          </div>
          <div class="using__img">
            <img src="../assets/imgs/SPR20_PDP_BabyOil_lifestyle-v1593014955241.jpg">
          </div>
        </div>
        <div class="using__content col-md-6">
          <div class="using__body">
            <h3 class="ingredients__title title-32">Soft on skin</h3>
            <div class="using__main" v-html="product.use">
            </div>
            <ul class="using__icons row">
              <li class="using__icon icon col-4">
                <i class="icon__icon"><img src="../assets/imgs/Pediatrician_Approved_120x.png" alt="Dermatologist and Ophthalmologist Tested"></i>
                <p>Dermatologist and Ophthalmologist Tested</p>
              </li>
              <li class="using__icon icon col-4">
                <i class="icon__icon"><img src="../assets/imgs/Dermatologist_Approved_120x.png" alt="Pediatrician Backed"></i>
                <p>Pediatrician Backed</p>
              </li>
              <li class="using__icon icon col-4">
                <i class="icon__icon"><img src="../assets/imgs/Safe-for-Sensitive-Skin-v1565730214120.png" alt="Safe for Sensitive Skin"></i>
                <p>Safe for Sensitive Skin</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product__clinic-results clinic-results">
    <div class="clinic-results__wrap">
      <h3>CLINICAL RESULTS</h3>
      <ul class="clinic-results__main d-flex justify-content-between">
        <li class="clinic-results__improvement text-20 d-flex flex-column">
          <big>160%</big>
          improvement in skin hydration.*
        </li>
        <li class="clinic-results__improvement text-20 d-flex flex-column">
          <big>100%</big>
          showed significant clinical improvement in skin hydration.*
        </li>
      </ul>
      <ul class="clinic-results__more text-20">
        <li><strong>100%</strong> showed significant clinical improvement to the skin barrier.*</li>
        <li><strong>100%</strong> felt the product left baby's skin feeling soft and smooth.**</li>
        <li><strong>100%</strong> felt the product was gentle yet effective on baby's skin.**</li>
        <li><strong>100%</strong> thought baby's skin felt replenished.**</li>
      </ul>
      <div class="clinic-results__annotation">
        <p>*Based on a 24-hour clinical study of 32 adults, after 8-, 12- and 24- hour single application.</p>
        <p>**Based on a 14-day consumer use study of 34 children, ages 3 months - 3 years, at least once daily use.</p>
      </div>
    </div>
  </div>
  <v-review-list :reviews="ALL_REVIEWS" :productId="product.id" :rating="product.rating" :roundRating="roundRating"></v-review-list>
</section>
</template>

<script>
import vReviewList from '@/components/product/v-review-list.vue'
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'Product',
  props: {
    id: String
  },
  components: {
    vReviewList
  },
  data() {
    return {
      ingredientsActive: false,
      count: 1
    }
  },
  computed: {
    ...mapGetters([
      'ALL_REVIEWS',
      'CART'
    ]),
    product() {
      const id = this.id
      return this.$store.getters.PRODUCT_BY_ID(id);
    },
    roundRating() {
      return Math.round(this.product.rating)
    },
    // count() {
    //   if (this.count > this.product.availability) {
    //     return this.product.availability
    //   }
    //   if (this.count < 1) {
    //     return 1
    //   }
    // }
  },
  methods: {
    ...mapActions([
      'GET_REVIEWS',
      'ADD_TO_CART'
    ]),
    increment() {
      if(this.product.availability > this.count) {
        this.count++;
      } else {
        return false
      }
    },
    decrement() {
      if(this.count > 1) {
        this.count--;
      } else {
        return false
      }
    },
    checkValue() {
      if (this.count > this.product.availability) {
        this.count = this.product.availability
      }
      if (this.count < 1) {
        this.count = 1
      }
    },
    addToCart() {
      let item = {
        count: this.count,
        id: this.id,
        title: this.product.title,
        price: this.product.price,
        sale: this.product.sale,
        availability: this.product.availability
      }
      this.ADD_TO_CART(item)
    }
  },
  created() {
    this.GET_REVIEWS(this.product.id)
    console.log(this.ALL_REVIEWS)
  },
}
</script>

<style lang="scss">
.product {
  &__wrap {
    margin: 0 auto;
    width: 100%;
    max-width: 1410px;
  }

  &__img {
    img {
      width: 100%;
      background-color: $very-light-green;
      object-fit: contain;
    }
  }

  &__info {
    padding: 0 100px;
    box-sizing: border-box;
  }

  &__stars {
    margin-right: 5px;

    img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }

  &__title {
    margin-bottom: 20px;
  }

  &__rating {
    margin-bottom: 40px;

    span {
      padding-top: 3px;

      font: 400 12px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    }
  }

  &__btns {
    margin-bottom: 50px;
  }

  .product__btn {
    width: 100%;
  }

  &__price {
    margin-bottom: 20px;

    strong {
      margin-right: 17px;
    }
  }

  &__reviews {
    margin-left: 13px;
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
}

.ingredients {
  &__wrap {
    margin: 0 auto;
    width: 100%;
    max-width: 1410px;
  }

  &__title {
    margin-bottom: 24px;
  }

  &__main {
    margin-bottom: 165px;

    p {
      margin: 0;

      font: 400 20px/30px "Basis Grotesque Pro", Helvetica, sans-serif;
      color: $dark-blue;
    }
  }

  &__subtitle {
    height: 60px;
    border-top: 1px solid $dark-blue;
    background-color: $bg-beige;
    transition: all 0.5s;

    h6 {
      margin: 0;

      font: 700 14px/30px "Basis Grotesque Pro", Helvetica, sans-serif;
      color: $dark-blue;
    }

    span {
      font-size: 24px;
      font-weight: 500;

      cursor: pointer;
      transition: all 0.2s;

      &.active {
        transform: rotate(45deg);
      }
    }
  }

  &__list {
    overflow: hidden;
    position: absolute;
    bottom: 54px;
    width: 100%;
    max-width: 500px;
    margin-bottom: 40px;

    border-bottom: 1px solid $dark-blue;
  }

  &__img {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  &__body {
    position: relative;

    padding: 0 100px;
    box-sizing: border-box;
  }

  &__hidden {
    height: 0px;
    overflow-y: auto;
    font: 400 20px/30px "Basis Grotesque Pro", Helvetica, sans-serif;
    color: $dark-blue;
    background-color: $bg-beige;
  }

  .slide-up-enter-to {
    height: 440px;
    transition: height 0.5s ease-in-out;
  }

  .slide-up-leave-to {
    height: 0px;
    transition: height 0.5s ease-in-out;
  }
}

.using {
  &__wrap {
    margin: 0 auto;
    width: 100%;
    max-width: 1410px;
  }

  &__body {
    padding: 0 100px;
    box-sizing: border-box;
  }

  &__main {
    margin-bottom: 52px;
    max-width: 500px;

    p {
      margin: 0;
      margin-bottom: 24px;

      font: 400 20px/30px "Basis Grotesque Pro", Helvetica, sans-serif;
      color: $dark-blue;
    }
  }

  &__media img {
    width: 100%;
    object-fit: cover;
  }

  &__video {
    margin-bottom: 20px;
  }

  &__icons {
    margin-bottom: 40px;

    max-width: 600px;

    list-style: none;
  }
}

.icon {
  margin-bottom: 20px;

  >p {
    margin: 0 auto;

    text-align: center;
    font-size: 12px;
  }

  &__icon {
    display: block;
    width: 55px;
    height: 55px;

    margin: 0 auto 16px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }
}

.clinic-results {
  background-color: #faede5;

  h3 {
    margin-bottom: 60px;

    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__main {
    margin-bottom: 60px;

    max-width: 860px;
  }

  &__more {
    margin-left: 20px;
    margin-bottom: 70px;
  }

  &__annotation {
    margin-bottom: 9px;

    font-size: 12px;
    line-height: 1;
  }

  &__improvement {
    max-width: 440px;

    big {
      margin-bottom: 15px;

      font: 300 100px/1 "Recoleta", Helvetica, sans-serif;
    }
  }

  &__wrap {
    margin: 0 auto;
    width: 100%;
    max-width: 1230px;
    padding: 110px 15px;
  }
}
</style>
