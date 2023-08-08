<template>
  <section class="section-our-products">
    <div class="container">
      <h3 class="section-our-products__subtitle">
        Categories
      </h3>
      <h2 class="section-our-products__title">
        Our Products
      </h2>
      <div class="section-our-products__list">
        <card-product
          v-for="p in products"
          :id="p.id"
          :key="p.id"
          :type="'dark'"
          :img="p.img"
          :category="p.category"
          :price="p.price"
          :old-price="p.oldPrice"
          :rating="p.rating"
          :name="p.name"
        />
      </div>
      <app-button-arrow
        :type="'blue'"
        :text="'Load more'"
      />
    </div>
  </section>
</template>

<script setup>
import CardProduct from './CardProduct.vue';
import AppButtonArrow from './UI/AppButtonArrow.vue';
import img from '../assets/image/broccoli-img.png';

const products = [
  {
    id: 1,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 2,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 3,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 4,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 5,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 6,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 7,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 8,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
];

</script>

<style lang="scss" scoped>
.section-our-products {
  margin-top: 176px;
  margin-bottom: 200px;

  .container {
    margin: 0 auto;
    max-width: 1400px;

    .btn {
      display: block;
      margin: 0 auto;
    }
  }

  &__subtitle {
    margin-bottom: 8px;
    @include font-size(36, 50);
    font-family: "Yellowtail", sans-serif;
    font-weight: normal;
    color: $green;
    text-transform: capitalize;
  }

  &__title {
    @include font-size(50, 60);
    margin-bottom: 40px;
    font-weight: bold;
    color: $dark-blue;
    text-transform: capitalize;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    margin-bottom: 120px;
  }
}
</style>
