<template>
<div class="home">
  <v-banner></v-banner>
  <v-product-group></v-product-group>
  <v-accordion-products></v-accordion-products>
  <section class="info-block" style="background-color: #edf2ed;">
    <div class="info-block__wrap row">
      <div class="info-block__img col-lg-4 col-md-5">
        <img src="../assets/imgs/Ingredients_123019_desktop_1024x.png" alt="Ingredients">
      </div>
      <div class="info-block__content col-lg-8 col-md-7">
        <h4 class="info-block__category title-14">Our Ingredients</h4>
        <h2 class="info-block__title title-48">Gentle formulas with strict standards</h2>
        <p class="text-20">Babies' skin is thinner and loses moisture faster than adult skin, and can also be extra-sensitive—which is why we banned over 2,000 potentially toxic ingredients. Dermatologist tested, pediatrician approved, and hypoallergenic, our formulas are gentle enough for babies’ delicate skin. And every one of our products is EWG Verified™ and cruelty-free.</p>
        <ul class="info-block__list row">
          <li class="info-block__elem col-4">
            <i class="info-block__icon"><img src="../assets/imgs/Dermatologist_Approved_120x.png" alt="Dermatologist Tested"></i>
            <p>Dermatologist Tested</p>
          </li>
          <li class="info-block__elem col-4">
            <i class="info-block__icon"><img src="../assets/imgs/Pediatrician_Approved_120x.png" alt="Pediatrician Approved"></i>
            <p>Pediatrician Approved</p>
          </li>
          <li class="info-block__elem col-4">
            <i class="info-block__icon"><img src="../assets/imgs/Clean_1aa9fbce-953d-484d-9557-d44ba893c07a_120x.png" alt="Hypoallergenic"></i>
            <p>Hypoallergenic</p>
          </li>
          <li class="info-block__elem col-4">
            <i class="info-block__icon"><img src="../assets/imgs/Clean_1aa9fbce-953d-484d-9557-d44ba893c07a_120x.png" alt="100% Nontoxic"></i>
            <p>100% Nontoxic</p>
          </li>
          <li class="info-block__elem col-4">
            <i class="info-block__icon"><img src="../assets/imgs/Leaping_Bunny_120x.png" alt="Leaping Bunny"></i>
            <p>Leaping Bunny</p>
          </li>
          <li class="info-block__elem info-block__elem--green col-4">
            <i class="info-block__icon"><img src="../assets/imgs/EWG_green_120x.png" alt="EWG Verified"></i>
            <p>EWG Verified</p>
          </li>
        </ul>
        <button class="info-block__btn btn-main">Learn More</button>
      </div>
    </div>
  </section>
  <section class="info-block" style="background-color: #f7ece1;">
    <div class="info-block__wrap row">
      <div class="info-block__content col-lg-8 col-md-7">
        <h4 class="info-block__category title-14">Our Story</h4>
        <h2 class="info-block__title title-48">Caring for their skin and the world they’ll grow up in</h2>
        <p class="text-20">Pipette is committed to caring for more than babies’ skin. From ingredient sourcing to packaging, our products are always made as sustainably and ethically as possible. Because we want to keep this planet healthy for the next generation.</p>
        <ul class="info-block__list row">
          <li class="info-block__elem col-4">
            <i class="info-block__icon"><img src="../assets/imgs/Clean_1aa9fbce-953d-484d-9557-d44ba893c07a_120x.png" alt="Hypoallergenic"></i>
            <p>Sustainable</p>
          </li>
          <li class="info-block__elem col-4">
            <i class="info-block__icon"><img src="../assets/imgs/Cruelty_Free_120x.png" alt="Leaping Bunny"></i>
            <p>Cruelty Free</p>
          </li>
          <li class="info-block__elem info-block__elem--green col-4">
            <i class="info-block__icon"><img src="../assets/imgs/EWG_green_120x.png" alt="EWG Verified"></i>
            <p>EWG Verified</p>
          </li>
        </ul>
        <button class="info-block__btn btn-main">Learn More</button>
      </div>
      <div class="info-block__img col-lg-4 col-md-5">
        <img src="../assets/imgs/Meet_Squalane_Desktop_006248cf-c7ab-4e17-979e-007dae16f267_1024x.jpg" alt="Ingredients">
      </div>
    </div>
  </section>
  <section class="reviews">
    <div class="reviews__wrap">
      <slick class="reviews__slider" ref="slick" :options="slickOptions">
        <v-review></v-review>
        <v-review></v-review>
        <v-review></v-review>
      </slick>
    </div>
  </section>
</div>
</template>

<script>
import vBanner from '@/components/home/v-banner.vue'
import vProductGroup from '@/components/home/v-product-group.vue'
import vAccordionProducts from '@/components/home/v-accordion-products.vue'
import vReview from '@/components/home/v-review.vue'

import Slick from 'vue-slick';

export default {
  name: 'Home',
  components: {
    vBanner,
    vProductGroup,
    vAccordionProducts,
    vReview,
    Slick
  },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        slidesToShow: 1,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        arrows: false,
        dots: true,
        draggable: true,
        edgeFriction: 0.30,
        swipe: true
      }
    }
  }
}
</script>

<style lang="scss">
.info-block {
  &__content {
    padding: 150px 30px 150px 192px !important;
    box-sizing: border-box;

    @media (max-width: 1070px) {
      padding-left: 100px !important;
    }
  }

  &__category {
    margin-bottom: 40px;

    text-transform: uppercase;
    font-weight: 800 !important;
  }

  &__title {
    margin-bottom: 40px;

    max-width: 400px;
  }

  p {
    margin-bottom: 40px;

    max-width: 440px;
  }

  &__img {
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    @media (max-width: 768px) {
      height: 400px;
    }
  }

  &__list {
    margin-bottom: 40px;

    max-width: 480px;

    list-style: none;
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

  &__elem {
    margin-bottom: 20px;

    >p {
      margin: 0 auto;

      text-align: center;
      font-size: 12px;
    }
  }
}

.reviews {
  background-color: $very-light-green;
  padding-bottom: 30px;

  &__wrap {
    max-width: 970px;
    margin-right: auto;
    margin-left: auto;
  }
}

.slick-dots {
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    margin: 5px;
    width: 18px;
    height: 18px;
    background: #cdcdcd;
    border-radius: 9px;
    appearance: none;
    border: none;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: darken(#cdcdcd, 5);
    }

    button {
      display: none;
    }

    &.slick-active {
      background: $dark-blue;
    }
  }
}
</style>
