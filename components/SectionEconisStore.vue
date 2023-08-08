<template>
  <section class="section-econis">
    <div class="section-econis__container">
      <h3 class="section-econis__subtitle">
        Eco Friendly
      </h3>
      <h2 class="section-econis__title">
        Econis is a Friendly
        Organic Store
      </h2>
      <ul class="section-econis__list">
        <li class="section-econis__item">
          <h4 class="item__title">
            Start with Our Company First
          </h4>
          <p class="item__text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </li>
        <li class="section-econis__item">
          <h4 class="item__title">
            Learn How to Grow Yourself
          </h4>
          <p class="item__text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </li>
        <li class="section-econis__item">
          <h4 class="item__title">
            Farming Strategies of Today
          </h4>
          <p class="item__text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.section-econis {
  min-height: 930px;
  position: relative;
  background: url("../assets/image/bg-green-field.png");
  background-position: center left;
  background-size: 50%;
  background-repeat: no-repeat;

  &__container {
    position: absolute;
    width: 723px;
    top: 50%;
    left: 50%;
    transform: translateX(-80px) translateY(-50%);
    padding: 80px 90px;
    border-radius: 20px;
    z-index: 999;
    background-color: #FFF;
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
    @include font-size(50, 60);
    margin-bottom: 40px;
    font-weight: bold;
    color: $dark-blue;
    text-transform: capitalize;
  }

  &__list {
    list-style: none;
    width: 635px;
  }

  &__item {
    &:not(:last-child){
      margin-bottom: 35px;
    }

    .item__title {
      @include font-size(25, 30);
      margin-bottom: 8px;
      font-weight: bold;
      color: $dark-blue;
      text-transform: capitalize;
    }

    .item__text {
      font-family: 'Open Sans', sans-serif;
      @include font-size(18, 30);
      color: $black;
    }
  }
}

</style>
