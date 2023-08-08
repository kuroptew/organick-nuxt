<template>
  <section class="section-choose-us">
    <div class="container">
      <div class="section-choose-us__content">
        <div class="section-choose-us__content_left">
          <h3 class="section-choose-us__subtitle">
            Why Choose Us
          </h3>
          <h2 class="section-choose-us__title">
            We do not buy from the
            open market & traders.
          </h2>
          <p class="section-choose-us__text">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
          </p>
          <ul class="section-choose-us__list-info">
            <li class="section-choose-us__item-info">
              <h4 class="item-info__title">
                100% Natural Product
              </h4>
              <p class="item-info__text">
                Simply dummy text of the printing and typesetting industry Lorem Ipsum
              </p>
            </li>
            <li class="section-choose-us__item-info">
              <h4 class="item-info__title">
                Increases resistance
              </h4>
              <p class="item-info__text">
                Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
              </p>
            </li>
          </ul>
        </div>
        <img
          class="section-choose-us__img"
          src="../assets/image/green-vegetables-img.png"
        >
      </div>
      <ul class="section-choose-us__list-advantages">
        <li class="item-advantages">
          <div class="item-advantages__container-img">
            <img
              class="item-advantages__img"
              :src="svgCart"
              alt="Icon cart"
            >
          </div>
          <h4 class="item-advantages__title">
            Return Policy
          </h4>
          <p class="item-advantages__text">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
        <li class="item-advantages">
          <div class="item-advantages__container-img">
            <img
              class="item-advantages__img"
              :src="svgLeafs"
              alt="Icon cart"
            >
          </div>
          <h4 class="item-advantages__title">
            100% Fresh
          </h4>
          <p class="item-advantages__text">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
        <li class="item-advantages">
          <div class="item-advantages__container-img">
            <img
              class="item-advantages__img"
              :src="svgClock"
              alt="Icon cart"
            >
          </div>
          <h4 class="item-advantages__title">
            Support 24/7
          </h4>
          <p class="item-advantages__text">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
        <li class="item-advantages">
          <div class="item-advantages__container-img">
            <img
              class="item-advantages__img"
              :src="svgCard"
              alt="Icon cart"
            >
          </div>
          <h4 class="item-advantages__title">
            Secured Payment
          </h4>
          <p class="item-advantages__text">
            Simply dummy text of the printintypesetting industry.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import svgCart from '../assets/image/cartSvg.svg';
import svgLeafs from '../assets/image/leafsSvg.svg';
import svgClock from '../assets/image/clockSvg.svg';
import svgCard from '../assets/image/cardSecuritySvg.svg';

</script>

<style lang="scss" scoped>
.section-choose-us {
  padding: 190px 0;
  background-color: $light-grey;

  .container {
    margin: 0 auto;
    max-width: 1400px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 90px;

    &_left {
      max-width: 670px;
    }
  }

  &__subtitle {
    margin-bottom: 6px;
    @include font-size(36, 50);
    font-family: "Yellowtail", sans-serif;
    font-weight: normal;
    color: $green;
    text-transform: capitalize;
  }

  &__title {
    @include font-size(50, 60);
    margin-bottom: 25px;
    font-weight: bold;
    color: $dark-blue;
    text-transform: capitalize;
  }

  &__text {
    margin-bottom: 36px;
    font-family: 'Open Sans', sans-serif;
    @include font-size(18, 30);
    color: $black;
  }

  &__list-info {
    list-style: none;
  }

  &__item-info {
    max-width: 486px;
    &:not(:last-child){
      margin-bottom: 24px;
    }
  }

  &__img {
    @include box(680px, 590px);
    border-radius: 30px;
    object-fit: cover;
  }

  .item-info {
    &__title {
      position: relative;
      margin-bottom: 12px;
      padding: 30px 54px;
      @include box(340px, 80px);
      background-color: #ECECEC;
      border-radius: 50px;
      @include font-size(20, 20);
      font-weight: 500;
      color: $dark-blue;

      &::before {
        content: '';
        position: absolute;
        display: block;
        @include box(20px);
        top: 50%;
        left: 27px;
        transform: translateY(-50%);
        border-radius: 50%;
        border: 4px solid $green;
      }
    }

    &__text {
      padding-left: 60px;
      font-family: 'Open Sans', sans-serif;
      @include font-size(18, 30);
      color: $black;
    }
  }

  &__list-advantages {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 140px;
    column-gap: 30px;

    .item-advantages {
      min-height: 335px;
      padding: 50px 25px 20px 25px;
      border-radius: 30px;
      text-align: center;
      background-color: #FFF;

      &__container-img {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        @include box(95px);
        border-radius: 18px;
        background-color: #F9F8F8;
      }

      &__title {
        @include font-size(25, 30);
        margin-bottom: 12px;
        font-weight: bold;
        color: $dark-blue;
        text-transform: capitalize;
      }

      &__text {
        margin-bottom: 36px;
        font-family: 'Open Sans', sans-serif;
        @include font-size(18, 30);
        color: $black;
      }
    }
  }
}

</style>
