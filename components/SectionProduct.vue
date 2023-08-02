<template>
  <section class="section-product">
    <div class="container">
      <div class="product__content_left">
        <div class="product__category">
          {{ category }}
        </div>
        <img
          class="product__img"
          :src="img"
          alt="Картинка товара"
        >
      </div>
      <div class="product__content_right">
        <h3 class="product__title">
          {{ name }}
        </h3>
        <star-rating :rating="rating" />
        <div class="product__price">
          <span
            v-if="oldPrice"
            class="product__price-old"
          > ${{ oldPrice.toFixed(2) }}</span>
          <span class="product__price-current">${{ price.toFixed(2) }}</span>
        </div>
        <p class="product__text">
          {{ description }}
        </p>
        <label class="product__count-label">
          Quantity:
          <input
            v-model="count"
            class="product__count"
            type="text"
          >
        </label>

        <app-button-arrow
          :type="'blue'"
          :text="'Add to cart'"
        />
      </div>
      <div class="product__tabs">
        Tabs
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import StarRating from './StarRating.vue';
import AppButtonArrow from './UI/AppButtonArrow.vue';

defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
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
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'Description products',
  },
});

const count = ref(1);
</script>

<style lang="scss" scoped>
.section-product {
  max-width: 1920px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: 44% 50%;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 80px;
  align-items: center;
  margin-top: 130px;
  margin-bottom: 140px;
  padding-left: 260px;
  padding-right: 320px;
}

.product__tabs {
  align-self: flex-start;
  grid-area: 2 / 1 / 3 / 3;
}

.product {
  &__content_left {
    position: relative;
    border-radius: 16px;
    background-color: #F9F8F8;
  }

  &__category {
    position: absolute;
    padding: 6px 12px;
    top: 38px;
    left: 35px;
    display: inline-block;
    background-color: $dark-blue;
    @include font-size(15,20);
    font-family: 'Open Sans', sans-serif;
    color: #FFF;
    border-radius: 6px;
  }

  &__img {
    display: block;
    border-radius: 16px;
    object-fit: cover;
    @include box(100%,100%)
  }

  &__title {
    color: $dark-blue;
    margin-bottom: 10px;
    @include font-size(40,48);
    font-weight: 600;
  }

  &__price {
    margin-top: 10px;
    margin-bottom: 28px;

  &-old {
    margin-right: 8px;
    text-decoration: line-through;
    @include font-size(20, 28);
    font-family: 'Open Sans', sans-serif;
    color: #B8B8B8;
    font-weight: 600;
  }
    &-current {
      @include font-size(25,34);
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      color: $dark-blue;
    }
  }

  &__text {
    margin-bottom: 35px;
    @include font-size(18,30);
    font-family: 'Open Sans', sans-serif;
    color: $black;
  }

  &__count-label {
    margin-right: 20px;
    @include font-size(20,24);
    font-weight: bold;
    color: $dark-blue;
  }

  &__count {
    margin-left: 22px;
    width: 135px;
    padding: 29px;
    text-align: center;
    border: 2px solid $dark-blue;
    border-radius: 16px;
  }
}
</style>
