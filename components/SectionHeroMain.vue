<template>
  <section class="section-hero">
    <div class="section-hero-left" />
    <div class="section-hero-center">
      <h1 class="section-hero__title">
        <span>100% Natural Food</span>
        Choose the best
        healthier way
        of life
      </h1>
      <button class="section-hero__btn">
        <p class="btn__text">
          Explore now
        </p>
        <svg
          class="btn__icon"
        >
          <circle
            cx="9.5"
            cy="9.5"
            r="9.5"
            fill="#335B6B"
          />
          <path
            d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="section-hero-right" />
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.section-hero {
  display: grid;
  grid-template-columns: 260px auto 1130px;
}

.section-hero-left {
  display: inline-block;
  height: 898px;
  background-image: url("~/assets/image/bg-hero-main-left.jpg");
  @include cover-background();
}

.section-hero-center {
  height: 898px;
  padding: 247px 0;
  background-color: #F1EFF0;
}

.section-hero-right {
  display: inline-block;
  height: 898px;
  background-image: url("~/assets/image/bg-hero-main-right.jpg");
  @include cover-background();
}

.section-hero__title {
  max-width: 530px;
  @include font-size(70, 80);
  margin-bottom: 23px;
  font-weight: bold;
  color: $dark-blue;
  letter-spacing: -1px;

  span {
    display: block;
    margin-bottom: 8px;
    @include font-size(36, 50);
    font-family: "Yellowtail", sans-serif;
    font-weight: normal;
    color: $green;
  }
}

.section-hero__btn {
  display: flex;
  align-items: center;
  padding: 28px 40px;
  width: 220px;
  background-color: $orange;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}

.btn__text {
  @include font-size(20,24);
  font-weight: bold;
  color: $dark-blue;
  display: inline-block;
  margin-right: 8px;
}

.btn__icon {
  @include box(19px);
}

</style>
