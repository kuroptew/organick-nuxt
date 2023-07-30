<template>
  <div class="review-consumer">
    <img
      class="review-consumer__img"
      :src="avatar"
      alt="Avatar"
    >
    <star-rating :rating="rating" />
    <p class="review-consumer__comment">
      {{ comment }}
    </p>
    <h4 class="review-consumer__name">
      {{ name }}
    </h4>
    <div class="review-consumer__role">
      {{ role }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.review-consumer {
  margin: 0 auto;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 780px;

  &__img {
    @include box(115px);
    margin-bottom: 20px;
    border-radius: 50%;
  }

  &__comment {
    margin-top: 25px;
    margin-bottom: 20px;
    font-family: 'Open Sans', sans-serif;
    @include font-size(18, 30);
    color: $black;
    text-align: center;
  }

  &__name {
    @include font-size(25, 30);
    font-weight: 600;
    color: $dark-blue;
  }

  &__role {
    font-family: 'Open Sans', sans-serif;
    @include font-size(15, 25);
    color: $black;
  }
}

</style>
