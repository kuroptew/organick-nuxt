<template>
  <section-hero-other
    :title="'Shop single'"
    :bg-img="bgShopSingle"
    :bg-pattern="bgPatternShopSingle"
  />
  <section-product
    :img="product.img"
    :category="product.category"
    :price="product.price"
    :old-price="product.oldPrice"
    :rating="product.rating"
    :name="product.name"
    :description="product.description"
  />
  <section-related-products />
</template>

<script setup>
import { computed } from 'vue';
import SectionProduct from '../../components/SectionProduct.vue';

import bgShopSingle from '../../assets/image/bg-shop-single-hero.png';
import bgPatternShopSingle from '../../assets/image/bg-pattern-shop-single.svg';
import img from '../../assets/image/broccoli-img.png';
import SectionRelatedProducts from '../../components/SectionRelatedProducts.vue';

const { id } = useRoute().params;

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

const product = computed(() => products.find((p) => p.id === +id));
</script>

<style scoped>

</style>
