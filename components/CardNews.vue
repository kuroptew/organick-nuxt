<template>
  <div
    class="card-news"
    :style="{backgroundImage:`url(${bgImg})`}"
  >
    <div class="card-news__date">
      <span class="card-news__date_day">25</span>
      <span class="card-news__date_month">Nov</span>
    </div>
    <div class="card-news__info">
      <div class="card-news__writer">
        <svg
          class="card-news__writer-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z"
            fill="#EFD372"
          />
        </svg>

        <span class="card-news__writer-name">
          By Rachi Card
        </span>
      </div>
      <h4 class="card-news__title">
        The Benefits of Vitamin D & How to Get It
      </h4>
      <p class="card-news__text">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
      </p>
      <app-button-with-arrow
        :text="'Read more'"
        :type="'orange'"
      />
    </div>
  </div>
</template>

<script>
import AppButtonWithArrow from './UI/AppButtonArrow.vue';

export default {
  components: { AppButtonWithArrow },
  props: {
    bgImg: {
      type: String,
      required: true,
    },
    date: {
      day: {
        type: Number,
        required: true,
      },
      month: {
        type: String,
        required: true,
      },
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-news {
  display: inline-block;
  position: relative;
  min-width: 677px;
  height: 524px;
  @include cover-background;
  padding: 43px 32px;
  border-radius: 20px;

  &__date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include box(82px);
    background-color: #FFF;
    border-radius: 50%;

    span {
      display: block;
      font-weight: bold;
      color: $dark-blue;
    }

    &_day {
      @include font-size(25, 30);
    }

    &_month {
      @include font-size(20, 24);
    }
  }

  &__info {
    max-width: 612px;
    padding: 46px 90px 60px 57px;
    position: absolute;
    top: 50%;
    background-color: #FFF;
    border-radius: 30px;
    box-shadow: 0 20px 35px #A7A7A7;
  }

  &__writer {
    margin-bottom: 15px;
  }

  &__writer-icon {
    margin-right: 8px;
    @include box(18px, 20px);
  }

  &__writer-name {
    @include font-size(18, 21);
    color: $dark-blue;
  }

  &__title {
    margin-bottom: 2px;
    @include font-size(25 ,30);
    color: $dark-blue;
  }

  &__text {
    margin-bottom: 15px;
    font-family: 'Open Sans', sans-serif;
    @include font-size(18 ,30);
    color: $black;
  }
}
</style>
