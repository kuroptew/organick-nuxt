<template>
  <section class="section-news">
    <div class="container">
      <h3 class="section-news__subtitle">
        News
      </h3>
      <div class="section-news__container-title">
        <h2 class="section-news__title">
          We Believe in Working
          Accredited Farmers
        </h2>
        <nuxt-link to="/news">
          <app-button-arrow
            :text="'More news'"
            :type="'white'"
          />
        </nuxt-link>
      </div>
      <div class="section-news__list">
        <card-news
          v-for="n in news"
          :key="n.id"
          :title="n.title"
          :text="n.text"
          :name="n.writer"
          :bg-img="n.bgImg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButtonArrow from './UI/AppButtonArrow.vue';
import CardNews from './CardNews.vue';

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
];

</script>

<style lang="scss" scoped>
.section-news {
  margin-top: 178px;
  margin-bottom: 250px;
  .container {
    margin: 0 auto;
    max-width: 1400px;
  }

  .section-news__container-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 48px;
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
    max-width: 702px;
    @include font-size(50, 60);
    font-weight: bold;
    color: $dark-blue;
    text-transform: capitalize;
  }

  &__list {
    display: flex;
    justify-content: space-between;
  }
}
</style>
