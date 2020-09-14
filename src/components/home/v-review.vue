<template>
<div class="review">
  <h3 class="review__category">WHAT PARENTS ARE SAYING</h3>
  <div class="review__stars d-flex justify-content-center">
    <img src="../../assets/imgs/star.svg">
    <img src="../../assets/imgs/star.svg">
    <img src="../../assets/imgs/star.svg">
    <img src="../../assets/imgs/star.svg">
    <img src="../../assets/imgs/star.svg">
  </div>
  <h2 class="review__title title-48">“Best Hand Sanitizer We've Ever Used!”</h2>
  <h6 class="review__product">Hand Sanitizer</h6>
  <p class="text-20">“No smell, no sticky residue, no feeling a need to wash my hands...and soft, actually soft. This leaves your hands feeling soft and clean. I would HIGHLY recommend this for everyone in the family.”</p>
  <h5 class="review__autor">Hawk</h5>
</div>
</template>

<script>
export default {
  name: 'vReview',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.review {
  max-width: 970px;
  margin: 80px auto 74px;

  &__category {
    margin-bottom: 40px;

    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
  }

  &__title {
    margin-bottom: 30px;

    text-align: center;
  }

  &__product {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    margin-bottom: 60px;

    text-align: center;
  }

  &__autor {
    font: 300 24px/1 "Recoleta", Helvetica, sans-serif;
    text-align: center;
  }

  &__stars {
    margin: 0 auto 40px;

    img {
      height: 22px;
      width: 22px;

      margin: 5px;
    }
  }
}
</style>
