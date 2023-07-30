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
          <swiper-slide
            v-for="c in customers"
            :key="c.id"
          >
            <review-customer
              :avatar="c.avatar"
              :comment="c.comment"
              :name="c.name"
              :role="c.role"
              :rating="c.rating"
            />
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
// Import Swiper Vue.js components
import {
  Pagination,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import ReviewCustomer from './ReviewCustomer.vue';
import StarRating from './StarRating.vue';

import avatarImg from '../assets/image/customer-avatar.png';

export default {
  components: {
    ReviewCustomer,
    StarRating,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const customers = [
      {
        id: 1,
        name: 'Sara Taylor',
        avatar: avatarImg,
        rating: 5,
        comment:
                'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.\n',
        role: 'Consumer 1',
      },
      {
        id: 2,
        name: 'Sara Taylor',
        avatar: avatarImg,
        rating: 5,
        comment:
            'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.\n',
        role: 'Consumer 2',
      },
      {
        id: 3,
        name: 'Sara Taylor',
        avatar: avatarImg,
        rating: 5,
        comment:
            'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.\n',
        role: 'Consumer 3',
      },
    ];

    return {
      customers,
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
