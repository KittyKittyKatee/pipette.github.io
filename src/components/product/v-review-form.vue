<template>
  <div class="review-list__form review-form">
    <form>
      <div class="review-form__input-group-2">
        <div class="review-form__input input">
          <label for>name</label>
          <input v-model="name" type="text" name id placeholder="Enter your name" />
        </div>
        <div class="review-form__input input">
          <label for>email</label>
          <input v-model="email" type="email" name id placeholder="Enter your email" />
        </div>
      </div>
      <div class="review-form__rating"></div>
      <div class="review-form__input-group">
        <div class="review-form__input input">
          <label for>Title of Review</label>
          <input v-model="title" type="text" name id placeholder="Give your review a Title" />
        </div>
        <div class="review-form__input input">
          <label for>How was your overall experience?</label>
          <textarea v-model="text" name id></textarea>
        </div>
      </div>
      <button class="review-form__btn" @click="sendReview">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "vReviewForm",
  data() {
    return {
      name: "",
      email: "",
      title: "",
      rating: [],
      text: "",
      activeRating: null
    };
  },
  props: {
    msg: String
  },
  methods: {
    ...mapActions(["ADD_REVIEW"]),
    sendReview(e) {
      e.preventDefault();
      let formData = {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        productId: this.productId,
        autor: this.name,
        title: this.title,
        text: this.text
      };
      this.ADD_REVIEW(formData);
      console.log(formData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
</style>
