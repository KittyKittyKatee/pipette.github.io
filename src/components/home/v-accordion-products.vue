<template>
<section class="accordion-products">
  <p>{{idActiveCard}}</p>
  <div class="accordion-products__wrap d-flex">
    <div class="accordion-products__elem d-flex" style="background-color: #fffefb;" @click="openCard(1)">
      <div class="accordion-products__label">
        <span>Overnight Brightening Mask</span>
      </div>
      <transition name="slide">
        <div v-show="idActiveCard == 1" class="accordion-products__content">
          <div class="accordion-products__content-wrap d-flex">
            <div class="accordion-products__main">
              <h5 class="accordion-products__category title-14">Customer Favorites</h5>
              <h2 class="accordion-products__title title-48">Overnight Brightening Mask</h2>
              <div class="accordion-products__rating d-flex">
                <div class="accordion-products__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <span>(4.9 stars)</span>
              </div>
              <span class="accordion-products__reviews">12 reviews</span>
              <div class="accordion-products__price">
                <span>$22</span> 2 fl oz / 60 ml
              </div>
              <p>This gentle yet effective exfoliating face mask is designed for expecting and postpartum moms, and works while you sleep to combat dullness and discoloration. In the morning, wake up to soft, moisturized skin and a visibly brighter, more luminous complexion.</p>
              <button class="accordion-products__btn btn-main">Shop Now</button>
            </div>
            <div class="accordion-products__img">
              <img src="../../assets/imgs/OvernightBrightening__478x676_f85986ad-4288-492b-ae64-6396b9462415_1024x.png">
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="accordion-products__elem d-flex" style="background-color: #fafaf2;" @click="openCard(2)">
      <div class="accordion-products__label">
        <span>Overnight Brightening Mask</span>
      </div>
      <transition name="slide">
        <div v-show="idActiveCard == 2" class="accordion-products__content">
          <div class="accordion-products__content-wrap d-flex">
            <div class="accordion-products__main">
              <h5 class="accordion-products__category title-14">Customer Favorites</h5>
              <h2 class="accordion-products__title title-48">Overnight Brightening Mask</h2>
              <div class="accordion-products__rating d-flex">
                <div class="accordion-products__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <span>(4.9 stars)</span>
              </div>
              <span class="accordion-products__reviews">12 reviews</span>
              <div class="accordion-products__price">
                <span>$22</span> 2 fl oz / 60 ml
              </div>
              <p>This gentle yet effective exfoliating face mask is designed for expecting and postpartum moms, and works while you sleep to combat dullness and discoloration. In the morning, wake up to soft, moisturized skin and a visibly brighter, more luminous complexion.</p>
              <button class="accordion-products__btn btn-main">Shop Now</button>
            </div>
            <div class="accordion-products__img">
              <img src="../../assets/imgs/OvernightBrightening__478x676_f85986ad-4288-492b-ae64-6396b9462415_1024x.png">
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="accordion-products__elem d-flex" style="background-color: #f2f7fa;" @click="openCard(3)">
      <div class="accordion-products__label">
        <span>Overnight Brightening Mask</span>
      </div>
      <transition name="slide">
        <div v-show="idActiveCard == 3" class="accordion-products__content">
          <div class="accordion-products__content-wrap d-flex">
            <div class="accordion-products__main">
              <h5 class="accordion-products__category title-14">Customer Favorites</h5>
              <h2 class="accordion-products__title title-48">Overnight Brightening Mask</h2>
              <div class="accordion-products__rating d-flex">
                <div class="accordion-products__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <span>(4.9 stars)</span>
              </div>
              <span class="accordion-products__reviews">12 reviews</span>
              <div class="accordion-products__price">
                <span>$22</span> 2 fl oz / 60 ml
              </div>
              <p>This gentle yet effective exfoliating face mask is designed for expecting and postpartum moms, and works while you sleep to combat dullness and discoloration. In the morning, wake up to soft, moisturized skin and a visibly brighter, more luminous complexion.</p>
              <button class="accordion-products__btn btn-main">Shop Now</button>
            </div>
            <div class="accordion-products__img">
              <img src="../../assets/imgs/OvernightBrightening__478x676_f85986ad-4288-492b-ae64-6396b9462415_1024x.png">
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="accordion-products__elem d-flex" style="background-color: #faede5;" @click="openCard(4)">
      <div class="accordion-products__label">
        <span>Overnight Brightening Mask</span>
      </div>
      <transition name="slide">
        <div v-show="idActiveCard==4" class="accordion-products__content">
          <div class="accordion-products__content-wrap d-flex">
            <div class="accordion-products__main">
              <h5 class="accordion-products__category title-14">Customer Favorites</h5>
              <h2 class="accordion-products__title title-48">Overnight Brightening Mask</h2>
              <div class="accordion-products__rating d-flex">
                <div class="accordion-products__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <span>(4.9 stars)</span>
              </div>
              <span class="accordion-products__reviews">12 reviews</span>
              <div class="accordion-products__price">
                <span>$22</span> 2 fl oz / 60 ml
              </div>
              <p>This gentle yet effective exfoliating face mask is designed for expecting and postpartum moms, and works while you sleep to combat dullness and discoloration. In the morning, wake up to soft, moisturized skin and a visibly brighter, more luminous complexion.</p>
              <button class="accordion-products__btn btn-main">Shop Now</button>
            </div>
            <div class="accordion-products__img">
              <img src="../../assets/imgs/OvernightBrightening__478x676_f85986ad-4288-492b-ae64-6396b9462415_1024x.png">
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="accordion-products__elem d-flex" style="background-color: #fffde6;" @click="openCard(5)">
      <div class="accordion-products__label">
        <span>Overnight Brightening Mask</span>
      </div>
      <transition name="slide">
        <div v-show="idActiveCard==5" class="accordion-products__content">
          <div class="accordion-products__content-wrap d-flex">
            <div class="accordion-products__main">
              <h5 class="accordion-products__category title-14">Customer Favorites</h5>
              <h2 class="accordion-products__title title-48">Overnight Brightening Mask</h2>
              <div class="accordion-products__rating d-flex">
                <div class="accordion-products__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <span>(4.9 stars)</span>
              </div>
              <span class="accordion-products__reviews">12 reviews</span>
              <div class="accordion-products__price">
                <span>$22</span> 2 fl oz / 60 ml
              </div>
              <p>This gentle yet effective exfoliating face mask is designed for expecting and postpartum moms, and works while you sleep to combat dullness and discoloration. In the morning, wake up to soft, moisturized skin and a visibly brighter, more luminous complexion.</p>
              <button class="accordion-products__btn btn-main">Shop Now</button>
            </div>
            <div class="accordion-products__img">
              <img src="../../assets/imgs/OvernightBrightening__478x676_f85986ad-4288-492b-ae64-6396b9462415_1024x.png">
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "vAccordionProducts",
  data() {
    return {
      idActiveCard: 1
    }
  },
  props: {
    msg: String,
  },
  methods: {
    openCard: function (id) {
      this.idActiveCard = id;
    }
  },
};
</script>

<style lang="scss">
.accordion-products {
  &__label {
    position: relative;
    width: 129px;
    min-width: 129px;
    height: 1025px;

    cursor: pointer;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);

      font: 300 20px/1 "Recoleta", Helvetica, sans-serif;
      color: $dark-blue;
      text-align: center;
      width: 500px;
    }
  }

  &__content {
    display: flex;
    overflow: hidden;

    width: calc(99vw - 129*5px);
  }

  &__content-wrap {
    overflow: hidden;
    min-width: 1100px;
    padding: 144px 0 90px 65px;
  }

  &__img {
    margin-left: 120px;
    margin-top: 30px;
    max-width: 390px;
    height: auto;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__category {
    margin-bottom: 56px;
  }

  &__title {
    max-width: 450px;
    margin-bottom: 28px;
  }

  p {
    max-width: 350px;

    margin-bottom: 30px;

    font: 400 20px/28px "Basis Grotesque Pro", Helvetica, sans-serif;
  }

  &__price {
    margin-bottom: 10px;

    font: 400 20px/28px "Basis Grotesque Pro", Helvetica, sans-serif;

    span {
      font-weight: 700;
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

  &__rating {
    margin-bottom: 10px;

    span {
      padding-top: 3px;

      font: 400 12px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    }
  }

  &__reviews {
    display: inline-block;
    margin-bottom: 50px;

    font: 400 12px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
  }
}

.slide-enter,
.slide-leave-to {
  width: 0px;
  padding: 0;
  transition: width 0.4s;
}

.slide-enter-to {
  width: calc(99vw - 129*5px);
  transition: width 0.4s;
}
</style>
