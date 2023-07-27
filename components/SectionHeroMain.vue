<template>
  <section class="section-hero">
    <div class="section-hero__content_left" />
    <div class="section-hero__content_center">
      <div class="container">
        <h3 class="section-hero__subtitle">
          100% Natural Food
        </h3>
        <h1 class="section-hero__title">
          Choose the best
          healthier way
          of life
        </h1>
        <app-button-with-arrow
          :type="'orange'"
          :text="'Explore Now'"
        />
      </div>
    </div>
    <div
      class="section-hero__content_right"
    />
  </section>
</template>

<script>
import AppButtonWithArrow from './UI/AppButtonWithArrow.vue';

export default {
  components: { AppButtonWithArrow },
};
</script>

<style lang="scss" scoped>
.section-hero {
  display: grid;
  grid-template-columns: 260px auto 1130px;

  &__subtitle {
    margin-bottom: 8px;
    @include font-size(36, 50);
    font-family: "Yellowtail", sans-serif;
    font-weight: normal;
    color: $green;
  }

  &__title {
    margin-bottom: 23px;
    @include font-size(70, 80);
    font-weight: bold;
    color: $dark-blue;
    letter-spacing: -1px;

  }
}

.section-hero__content_left {
  display: inline-block;
  height: 898px;
  background-image: url("~/assets/image/bg-hero-main-left.jpg");
  @include cover-background();
}

.section-hero__content_center {
  height: 898px;
  padding: 247px 0;
  background-color: #F1EFF0;

  .container {
    margin: 0 auto;
    max-width: 530px;
  }
}

.section-hero__content_right {
  display: inline-block;
  height: 898px;
  background-image: url("~/assets/image/bg-hero-main-right.jpg");
  @include cover-background();
}
</style>
