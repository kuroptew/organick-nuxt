<template>
  <nuxt-link :to="`/shop/${id}`">
    <div
      class="card-product"
      :class="`card-product_${type}`"
    >
      <div class="card-product__category">
        {{ category }}
      </div>
      <img
        class="card-product__img"
        :src="img"
        alt="Product image"
      >
      <h4 class="card-product__title">
        {{ name }}
      </h4>
      <div class="card-product__info">
        <div class="price">
          <span
            v-if="oldPrice"
            class="price_old"
          >${{ oldPrice.toFixed(2) }}</span>
          <span class="price_current">${{ price.toFixed(2) }}</span>
        </div>
        <star-rating :rating="rating" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import StarRating from './StarRating.vue';

export default {
  components: { StarRating },
  props: {
    type: {
      type: String,
      default: 'light',
    },
    id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: null,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-product {
  padding: 30px;
  border-radius: 20px;
  width: 335px;

  &_light {
    background-color: #FFF;
  }

  &_dark {
    background-color: $light-grey;
  }

  &__category {
    margin-bottom: 12px;
    padding: 6px 12px;
    display: inline-block;
    background-color: $dark-blue;
    @include font-size(15,20);
    font-family: 'Open Sans', sans-serif;
    color: #FFF;
    border-radius: 6px;
  }

  &__img {
    margin-bottom: 2px;
    object-fit: cover;
    @include box(275px,324px)
  }

  &__title {
    color: $dark-blue;
    margin-bottom: 12px;
    @include font-size(20,24);
    font-weight: 600;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 6px;
    border-top: 1px solid #DEDDDD;
  }

  .price_old {
    margin-right: 8px;
    text-decoration: line-through;
    @include font-size(15,20);
    font-family: 'Open Sans', sans-serif;
    color:#B8B8B8;
    font-weight: 600;
  }

  .price_current {
    @include font-size(18,25);
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    color: $dark-blue;
  }
}
</style>
