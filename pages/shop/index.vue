<template>
  <section-hero-other
    :title="'Shop'"
    :bg-img="bgShop"
    :bg-pattern="bgPatternShop"
  />
  <div class="shop__list">
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
</template>

<script setup>
import CardProduct from '../../components/CardProduct.vue';

import img from '../../assets/image/broccoli-img.png';
import bgShop from '../../assets/image/bg-shop-hero.png';
import bgPatternShop from '../../assets/image/bg-pattern-shop.svg';

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
  {
    id: 9,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 10,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 11,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 12,
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
.shop__list {
  max-width: 1400px;
  margin: 90px auto 140px auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 20px;
  row-gap: 40px;
}
</style>
