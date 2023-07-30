<link rel="stylesheet" href="../assets/style/colors.scss">
<template>
  <section class="section-about-us">
    <div class="container">
      <div class="section-about-us__content_right">
        <h3 class="section-about-us__subtitle">
          About us
        </h3>
        <h2 class="section-about-us__title">
          We Believe in Working
          Accredited Farmers
        </h2>
        <p class="section-about-us__text">
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
        <ul
          class="section-about-us__list"
        >
          <li class="section-about-us__item">
            <div class="section-about-us-item__marker">
              <img
                class="section-about-us-item__icon"
                :src="leafSvg"
                alt="Иконка листка"
              >
            </div>
            <div class="section-about-us-item__info">
              <h4 class="section-about-us-item__title">
                Organic Foods Only
              </h4>
              <p class="section-about-us-item__text">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
              </p>
            </div>
          </li>
          <li class="section-about-us__item">
            <div class="section-about-us-item__marker">
              <img
                class="section-about-us-item__icon"
                :src="mailSvg"
                alt="Иконка почты"
              >
            </div>
            <div class="section-about-us-item__info">
              <h4 class="section-about-us-item__title">
                Organic Foods Only
              </h4>
              <p class="section-about-us-item__text">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
              </p>
            </div>
          </li>
        </ul>
        <app-button-with-arrow
          :text="'Shop now'"
          :type="'blue'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButtonWithArrow from './UI/AppButtonWithArrow.vue';

import mailSvg from '../assets/image/mailSvg.svg';
import leafSvg from '../assets/image/leafSvg.svg';

</script>

<style lang="scss" scoped>
.section-about-us {
  background-color: $light-grey;

  .container {
    display: flex;
    align-items: center;
    min-height: 1067px;
    margin: 0 auto;
    max-width: 1920px;
    padding-left: 34px;
    padding-right: 260px;
    background-image: url('~/assets/image/bg-citrus-img.png');
    background-repeat: no-repeat;
    background-position: center left 100px;
    z-index: 1000;
  }

  &__content_right {
    max-width: 702px;
    margin-left: auto;
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
    margin-bottom: 14px;
    @include font-size(50, 60);
    font-weight: bold;
    color: $dark-blue;
    text-transform: capitalize;
  }

  &__text {
    margin-bottom: 46px;
    font-family: 'Open Sans', sans-serif;
    @include font-size(18, 30);
    color: $black;
  }

  &__list {
    list-style: none;
    margin-bottom: 46px;
  }
  &__item {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 32px;
    }
    .section-about-us-item__marker {
      display: inline-block;
      position: relative;
      margin-right: 20px;
      @include box(101px);
      border-radius: 20px;
      background-color: #FFF;
    }

    .section-about-us-item__icon {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      @include box(56px);
      transform: translateX(-50%) translateY(-50%);
    }

    .section-about-us-item__info {
      display: inline-block;
    }

    .section-about-us-item__title {
      @include font-size(25, 30);
      font-weight: bold;
      color: $dark-blue;
      margin-bottom: 12px;
    }

    .section-about-us-item__text {
      font-family: 'Open Sans', sans-serif;
      @include font-size(18, 30);
      color: $black;
    }
  }
}
</style>
