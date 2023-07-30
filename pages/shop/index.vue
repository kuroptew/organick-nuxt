<template>
  <div class="shop__list">
    <card-product
      v-for="p in products"
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

const products = [
  {
    id: 1,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 2,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 3,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 4,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 5,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 6,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 7,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 8,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 9,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 10,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 11,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
  {
    id: 12,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
  },
];

definePageMeta({
  layout: 'other',
});
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
