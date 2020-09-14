<template>
<section class="banner-slide">
  <div class="banner-slide__wrap">
    <h4 class="banner-slide__category">HBD TO US!</h4>
    <h1 class="banner-slide__title">30% Off Sitewide</h1>
    <h2 class="banner-slide__subtitle">Anniversary Sale</h2>
    <p>Thanks for being part of our Year 1 journey! To celebrate, we're giving you this sweet little party favor.</p>
    <span class="banner-slide__promo">Use code: <strong>1YEAR</strong></span>
    <button class="banner-slide__btn btn-main">Stock Up</button>
  </div>
</section>
</template>

<script>
export default {
  name: 'vBannerSlide',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.banner-slide {
  min-height: 100vh;

  background-image: url(../../assets/imgs/Anniversary_Sale_10_off_45_Desktop_2048x.jpg);

  &__wrap {
    padding: 180px 125px 230px;
  }

  &__category {
    margin-bottom: 40px;

    font: 900 14px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
  }

  &__title {
    max-width: 720px;

    margin-bottom: 30px;

    font: 300 80px/1 "Recoleta", Helvetica, sans-serif;
  }

  &__subtitle {
    max-width: 540px;

    margin-bottom: 34px;

    font: 300 32px/1 "Recoleta", Helvetica, sans-serif;
  }

  p {
    max-width: 540px;

    margin-bottom: 40px;

    font: 400 20px/28px "Basis Grotesque Pro", Helvetica, sans-serif;
  }

  &__promo {
    display: inline-block;
    margin-bottom: 40px;

    font: 400 24px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
  }
}
</style>
