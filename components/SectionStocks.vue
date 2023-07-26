<template>
  <section class="section-stocks">
    <div class="container">
      <div class="stock stock_natural">
        <h3 class="stock__subtitle">
          Natural!!
        </h3>
        <h2 class="stock__title">
          Get Garden Fresh Fruits
        </h2>
      </div>
      <div class="stock stock_offer">
        <h3 class="stock__subtitle">
          Offer!!
        </h3>
        <h2 class="stock__title">
          Get 10% off on Vegetables
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.section-stocks {
  margin-top: 154px;
  margin-bottom: 190px;
}
.container {
  margin: 0 auto;
  max-width: 1400px;
}

.stock {
  display: inline-block;
  padding: 110px 55px;
  @include box(682px, 367px);
  @include cover-background;
  border-radius: 20px;

  &:not(:last-child) {
    margin-right: 36px;
  }

  &__subtitle {
    margin-bottom: 8px;
    font-family: 'Yellowtail', sans-serif;
    @include font-size(36, 49);
    font-weight: normal;
  }

  &__title {
    max-width: 278px;
    @include font-size(40, 47);
    font-weight: bold;
  }

  &_natural {
    background-image: url('~/assets/image/bg-stock-natural.png');
    color: #FFF;
  }

  &_offer {
    background-image: url('~/assets/image/bg-stock-offer.png');

    .stock__subtitle {
      color:$green;
    }

    .stock__title {
      color: $dark-blue;
    }
  }
}
</style>
