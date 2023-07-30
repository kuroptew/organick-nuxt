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
        <app-button-with-arrow
          :text="'More news'"
          :type="'white'"
        />
      </div>
      <ul class="section-news__list">
        <card-news :bg-img="bgSalats" />
        <card-news :bg-img="bgTomatos" />
      </ul>
    </div>
  </section>
</template>

<script>
import AppButtonWithArrow from './UI/AppButtonWithArrow.vue';
import CardNews from './CardNews.vue';

import bgSalats from '../assets/image/bg-salats.png';
import bgTomatos from '../assets/image/bg-tomatos.png';

export default {
  components: { CardNews, AppButtonWithArrow },

  setup() {
    return {
      bgSalats,
      bgTomatos,
    };
  },
};
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
