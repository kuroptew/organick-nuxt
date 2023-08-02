<template>
  <section class="section-related-products">
    <div class="container">
      <h2 class="section-related-products__title">
        RelatedProducts
      </h2>
      <div class="section-related-products__list">
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
    </div>
  </section>
</template>

<script setup>
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
];
</script>

<style lang="scss" scoped>
.section-related-products {
  margin-top: 140px;
  margin-bottom: 140px;

  .container {
    max-width: 1400px;
    margin: 0 auto;
  }

  &__title {
    margin-bottom: 40px;
    @include font-size(50, 60);
    font-weight: bold;
    color: $dark-blue;
    text-transform: capitalize;
    text-align: center;
  }

  &__list {
    display: flex;
    justify-content: space-between;
  }
}
</style>
