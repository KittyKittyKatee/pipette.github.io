<template>
  <li class="review-item">
    <div class="review-item__wrap row">
      <div class="review-item__info col-md-3">
        <h4 class="review-item__autor">{{review.autor}}</h4>
        <div class="review-item__stars d-flex">
          <div v-for="i in Math.round(review.rating)" :key="'star-'+ i">
            <img src="../../assets/imgs/star.svg" />
          </div>
          <div v-for="i in 5 - Math.round(review.rating)" :key="'star-outline-'+ i">
            <img src="../../assets/imgs/star-outline.svg" />
          </div>
        </div>
      </div>
      <div class="review-item__content col-md-9">
        <h3 class="review-item__title text-20">{{review.title}}</h3>
        <p class="text-20">{{review.text}}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "vReviewItem",
  props: {
    review: Object
  }
};
</script>

<style lang="scss">
.review-item {
  border-bottom: 1px solid #fffefb;

  &__wrap {
    padding: 50px 0 40px;
  }

  &__autor {
    margin-bottom: 16px;
    font: 300 20px/1 "Recoleta", Helvetica, sans-serif;
  }

  &__stars {
    margin-right: 15px;

    img {
      margin-right: 3px;

      height: 14px;
      width: 14px;
    }
  }

  &__title {
    margin-bottom: 20px;

    font-weight: 700;
  }
}
</style>
