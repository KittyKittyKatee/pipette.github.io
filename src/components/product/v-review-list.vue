<template>
  <section class="review-list">
    <div class="review-list__wrap">
      <h4 class="review-list__title title-24">Customer Reviews</h4>
      <div class="review-list__top row justify-content-between">
        <div class="review-list__statistic statistic col-md-5 d-flex">
          <div class="statistic__main">
            <div class="statistic__stars d-flex">
              <div v-for="i in roundRating" :key="i">
                <img src="../../assets/imgs/star.svg" />
              </div>
              <div v-for="i in 5 - roundRating" :key="i">
                <img src="../../assets/imgs/star-outline.svg" />
              </div>
            </div>
            <strong>{{ midRating }}</strong>
            <span>Based on {{ reviews.length }} Reviews</span>
          </div>
          <ul class="statistic__sum rating-sum">
            <li class="rating-sum__elem" @click="goToReviews(5)">
              <div class="rating-sum__top d-flex">
                <div class="rating-sum__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                </div>
                <div class="rating-sum__chart">
                  <span :style="{width: (this.rating5/this.reviews.length)*100 + '%'}"></span>
                </div>
              </div>
              <span>{{rating5}}</span>
            </li>
            <li class="rating-sum__elem" @click="goToReviews(4)">
              <div class="rating-sum__top d-flex">
                <div class="rating-sum__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <div class="rating-sum__chart">
                  <span :style="{width: (this.rating4/this.reviews.length)*100 + '%'}"></span>
                </div>
              </div>
              <span>{{rating4}}</span>
            </li>
            <li class="rating-sum__elem" @click="goToReviews(3)">
              <div class="rating-sum__top d-flex">
                <div class="rating-sum__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <div class="rating-sum__chart">
                  <span :style="{width: (this.rating3/this.reviews.length)*100 + '%'}"></span>
                </div>
              </div>
              <span>{{rating3}}</span>
            </li>
            <li class="rating-sum__elem" @click="goToReviews(2)">
              <div class="rating-sum__top d-flex">
                <div class="rating-sum__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <div class="rating-sum__chart">
                  <span :style="{width: (this.rating2/this.reviews.length)*100 + '%'}"></span>
                </div>
              </div>
              <span>{{rating2}}</span>
            </li>
            <li class="rating-sum__elem" @click="goToReviews(1)">
              <div class="rating-sum__top d-flex">
                <div class="rating-sum__stars">
                  <img src="../../assets/imgs/star.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                  <img src="../../assets/imgs/star-outline.svg" />
                </div>
                <div class="rating-sum__chart">
                  <span :style="{width: (this.rating1/this.reviews.length)*100 + '%'}"></span>
                </div>
              </div>
              <span>{{rating1}}</span>
            </li>
          </ul>
        </div>
        <div class="review-list__btns  col-md-4">
          <button class="review-list__btn">Ask a Question</button>
          <button class="review-list__btn">Write a Review</button>
        </div>
      </div>
      
      <ul
        v-for="review in reviewsComputed"
        :key="review.id"
        class="review-list__reviews"
      >
        <v-review-item :review="review"></v-review-item>
      </ul>
    </div>
  </section>
</template>

<script>
import vReviewItem from "@/components/product/v-review-item.vue";

export default {
  name: "vReviewList",
  props: ["reviews", "productId", "roundRating"],
  components: {
    vReviewItem,
  },
  data() {
    return {
      activeRating: null
    };
  },
  computed: {
    midRating() {
      const sum = this.reviews.reduce(
        (acc, current) => acc + current.rating,
        0
      );
      const midValue = (sum / this.reviews.length).toFixed(1);
      return midValue;
    },
    rating1() {
      return this.reviews.filter(review => review.rating == 1).length
    },
    rating2() {
      return this.reviews.filter(review => review.rating == 2).length
    },
    rating3() {
      return this.reviews.filter(review => review.rating == 3).length
    },
    rating4() {
      return this.reviews.filter(review => review.rating == 4).length
    },
    rating5() {
      return this.reviews.filter(review => review.rating == 5).length
    },
    reviewsComputed() {
      if (this.activeRating == null) {
        return this.reviews
      } else {
        switch (this.activeRating) {
          case (1): return this.reviews.filter(review => review.rating == 1);
          case (2): return this.reviews.filter(review => review.rating == 2);
          case (3): return this.reviews.filter(review => review.rating == 3);
          case (4): return this.reviews.filter(review => review.rating == 4);
          case (5): return this.reviews.filter(review => review.rating == 5);
        }
      }
    }
  },
  methods: {
    goToReviews(num) {
      this.activeRating == num ? this.activeRating = null : this.activeRating = num
    }
  },
};
</script>

<style lang="scss">
.review-list {
  background-color: $very-light-green;

  &__wrap {
    margin: 0 auto;
    width: 100%;
    max-width: 1230px;
    padding: 100px 15px;
  }

  &__title {
    margin-bottom: 70px;
  }

  &__stars {
    img {
      width: 22px;
      height: 22px;
    }
  }

  &__reviews {
    list-style: none;
  }

  &__btn {
    height: 40px;

    padding: 0 20px 1px;
    box-sizing: border-box;
    border: 1px solid #ccd6e0;
    border-radius: 3px;

    font: 700 13px/1 "Basis Grotesque Pro", Helvetica, sans-serif;
    color: black;

    box-shadow: none;
    background-color: transparent;
    appearance: none;
    outline: none;

    transition: all 0.2s;

    &:last-child {
      margin-left: 15px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}

.statistic {
  &__main {
    margin-right: 60px;

    strong {
      display: block;

      margin-bottom: 35px;

      font: 600 24px/30px "Basis Grotesque Pro", Helvetica, sans-serif;
    }

    span {
      font: 400 13px/30px "Basis Grotesque Pro", Helvetica, sans-serif;
    }
  }

  &__stars {
    margin-bottom: 60px;

    img {
      margin-right: 5px;

      width: 22px;
      height: 22px;
    }
  }
}

.rating-sum {
  list-style: none;

  &__elem {
    cursor: pointer;
  }

  &__elem > span {
    display: inline-block;
    margin-top: 5px;
    font-size: 16px;
  }

  &__stars {
    margin-right: 15px;

    img {
      margin-right: 3px;

      height: 14px;
      width: 14px;
    }
  }

  &__chart {
    position: relative;
    height: 15px;
    width: 130px;

    background-color: white;

    span {
      position: absolute;
      top: 0;
      left: 0;

      width: 70%;
      height: 15px;

      background-color: $dark-blue;
    }
  }
}
</style>
