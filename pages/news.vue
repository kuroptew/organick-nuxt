<template>
  <div class="news__list">
    <card-news
      v-for="n in news"
      :key="n.id"
      :title="n.title"
      :text="n.text"
      :name="n.writer"
      :bg-img="n.bgImg"
    />
  </div>
</template>

<script setup>
import CardNews from '../components/CardNews.vue';

import bgSalats from '../assets/image/bg-salats.png';
import bgTomatos from '../assets/image/bg-tomatos.png';

const news = [
  {
    id: 1,
    writer: 'Rachi Card',
    bgImg: bgSalats,
    date: {
      day: 25,
      month: 'Nov',
    },
    title: 'Benefits of Vitamin C & How to Get It',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 2,
    writer: 'Rachi Card',
    bgImg: bgTomatos,
    date: {
      day: 25,
      month: 'Nov',
    },
    title: 'Benefits of Vitamin C & How to Get It',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 3,
    writer: 'Rachi Card',
    bgImg: bgSalats,
    date: {
      day: 25,
      month: 'Nov',
    },
    title: 'Benefits of Vitamin C & How to Get It',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 4,
    writer: 'Rachi Card',
    bgImg: bgTomatos,
    date: {
      day: 25,
      month: 'Nov',
    },
    title: 'Benefits of Vitamin C & How to Get It',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 5,
    writer: 'Rachi Card',
    bgImg: bgSalats,
    date: {
      day: 25,
      month: 'Nov',
    },
    title: 'Benefits of Vitamin C & How to Get It',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
  {
    id: 6,
    writer: 'Rachi Card',
    bgImg: bgTomatos,
    date: {
      day: 25,
      month: 'Nov',
    },
    title: 'Benefits of Vitamin C & How to Get It',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
];

definePageMeta({
  layout: 'other',
});

</script>

<style lang="scss" scoped>
.news__list {
  max-width: 1400px;
  margin: 120px auto 185px auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 48px;
  row-gap: 112px;
}

</style>
