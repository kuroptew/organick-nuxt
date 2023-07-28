<template>
  <section class="section-reviews">
    <div class="section-reviews__content_left" />
    <div class="section-reviews__content_center">
      <div class="container">
        <h3 class="section-reviews__subtitle">
          Testimonial
        </h3>
        <h1 class="section-reviews__title">
          What Our Customer Saying?
        </h1>
        <!--            swiper-->
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :loop="true"
          :autoplay="{
            &quot;delay&quot;: 8000,
            &quot;disableOnInteraction&quot;: false
          }"
          :pagination="{ clickable: true }"
        >
          <swiper-slide>
            <div class="section-reviews__customer">
              <img
                class="section-reviews-customer__img"
                src="~/assets/image/customer-avatar.png"
                alt=""
              >
              <star-rating :rating="5" />
              <p class="section-reviews-customer__comment">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </p>
              <h4 class="section-reviews-customer__name">
                Sara Taylor
              </h4>
              <div class="section-reviews-customer__role">
                Consumer 1
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="section-reviews__customer">
              <img
                class="section-reviews-customer__img"
                src="~/assets/image/customer-avatar.png"
                alt=""
              >
              <star-rating :rating="5" />
              <p class="section-reviews-customer__comment">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </p>
              <h4 class="section-reviews-customer__name">
                Sara Taylor
              </h4>
              <div class="section-reviews-customer__role">
                Consumer2
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="section-reviews__customer">
              <img
                class="section-reviews-customer__img"
                src="~/assets/image/customer-avatar.png"
                alt=""
              >
              <star-rating :rating="5" />
              <p class="section-reviews-customer__comment">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
              </p>
              <h4 class="section-reviews-customer__name">
                Sara Taylor
              </h4>
              <div class="section-reviews-customer__role">
                Consumer 3
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!--        info-->
        <ul class="section-reviews__info-list">
          <li class="section-reviews__item">
            <div class="section-reviews__item-container">
              <p class="section-reviews__item-number">
                100%
              </p>
              <p class="section-reviews__item-text">
                Organic
              </p>
            </div>
          </li>
          <li class="section-reviews__item">
            <div class="section-reviews__item-container">
              <p class="section-reviews__item-number">
                285
              </p>
              <p class="section-reviews__item-text">
                Active Product
              </p>
            </div>
          </li>
          <li class="section-reviews__item">
            <div class="section-reviews__item-container">
              <p class="section-reviews__item-number">
                350+
              </p>
              <p class="section-reviews__item-text">
                Organic Orchads
              </p>
            </div>
          </li>
          <li class="section-reviews__item">
            <div class="section-reviews__item-container">
              <p class="section-reviews__item-number">
                25+
              </p>
              <p class="section-reviews__item-text">
                Years of Farming
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="section-reviews__content_right" />
  </section>
</template>

<script>
import {
  Pagination,
  Autoplay,
} from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import StarRating from './StarRating.vue';

export default {
  components: {
    StarRating,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Autoplay],
    };
  },
};

</script>

<style lang="scss" scoped>
.section-reviews {
    display: grid;
    grid-template-columns: 375px auto 345px;
    filter: progid:DXImageTransform.Microsoft.BasicImage(rgb(252, 252, 252));

  &__subtitle {
    margin-bottom: 8px;
    @include font-size(36, 50);
    font-family: "Yellowtail", sans-serif;
    font-weight: normal;
    color: $green;
    text-align: center;
    text-transform: capitalize;
  }

  &__title {
    @include font-size(50, 60);
    margin-bottom: 60px;
    font-weight: bold;
    color: $dark-blue;
    text-align: center;
    text-transform: capitalize;
  }
}

.section-reviews__content_left,
.section-reviews__content_right {
  display: inline-block;
  height: 1267px;
  @include cover-background();
}

.section-reviews__content_left {
  background-image: url('~/assets/image/bg-reviews-left.png');
}

.section-reviews__content_right {
  background-image: url('~/assets/image/bg-reviews-right.png');
}

.section-reviews__content_center {
  background-color: #FCFCFC;
}

.container {
  margin: 0 auto;
  padding: 164px 0;
  max-width: 1108px;
  height: 100%;
}

.section-reviews__customer {
  margin: 0 auto;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 780px;
}

.section-reviews-customer {
  &__img {
    @include box(115px);
    margin-bottom: 20px;
    border-radius: 50%;
  }

  &__comment {
    margin-top: 25px;
    margin-bottom: 20px;
    font-family: 'Open Sans', sans-serif;
    @include font-size(18, 30);
    color: $black;
    text-align: center;
  }

  &__name {
    @include font-size(25, 30);
    font-weight: 600;
    color: $dark-blue;
  }

  &__role {
    font-family: 'Open Sans', sans-serif;
    @include font-size(15, 25);
    color: $black;
  }
}

.section-reviews__info-list {
  display: flex;
  justify-content: space-between;
  padding: 102px 40px 0 40px;
  border-top: 1px solid #E0E0E0;
  list-style: none;
}

.section-reviews__item {
  @include box(210px);
  padding: 5px;
  border: 5px solid $green;
  border-radius: 50%;

  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include box(190px);
    background-color: #F1F1F1;
    border-radius: 50%;
  }

  &-number {
    @include font-size(50, 60);
    font-weight: bold;
    color: $dark-blue;
  }

  &-text {
    font-family: 'Open Sans', sans-serif;
    @include font-size(18, 30);
    font-weight: 600;
    color: $dark-blue;
    text-transform: capitalize;
  }
}
</style>
