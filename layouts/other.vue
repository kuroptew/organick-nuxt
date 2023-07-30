<template>
  <div>
    <app-header />
    <main>
      <section-hero-other
        :title="titleHero"
        :bg-img="bgHero"
        :bg-pattern="bgPatternHero"
      />
      <slot />
      <subsribe-form />
    </main>
    <app-footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import bgAbout from '../assets/image/bg-about-hero.png';
import bgPatternAbout from '../assets/image/bg-pattern-about.svg';
import bgShop from '../assets/image/bg-shop-hero.png';
import bgPatternShop from '../assets/image/bg-pattern-shop.svg';
import bgNews from '../assets/image/bg-news-shop.png';
import bgPatternNews from '../assets/image/bg-pattern-news.svg';

const route = useRoute();

const dataHero = {
  '/about': {
    title: 'About us',
    bgImg: bgAbout,
    bgPattern: bgPatternAbout,
  },
  '/shop': {
    title: 'Shop',
    bgImg: bgShop,
    bgPattern: bgPatternShop,
  },
  '/news': {
    title: 'Recent news',
    bgImg: bgNews,
    bgPattern: bgPatternNews,
  },
};

const titleHero = computed(() => dataHero[route.path]?.title);
const bgHero = computed(() => dataHero[route.path]?.bgImg);
const bgPatternHero = computed(() => dataHero[route.path]?.bgPattern);
</script>

<style scoped>

</style>
