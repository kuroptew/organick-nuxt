<template>
  <section class="section-offers">
    <div class="container">
      <h3 class="section-offers__subtitle">
        Offer
      </h3>
      <div class="section-offers__container-title">
        <h2 class="section-offers__title">
          We Offer Organic For You
        </h2>
        <nuxt-link to="/shop">
          <app-button-arrow
            :text="'View all products'"
            :type="'orange'"
          />
        </nuxt-link>
      </div>
      <div class="section-offers__list">
        <card-product
          v-for="p in offerProducts"
          :id="p.id"
          :key="p.id"
          :type="'dark'"
          :img="p.img"
          :category="p.category"
          :price="p.price"
          :old-price="p.oldPrice"
          :rating="p.rating"
          :name="p.name"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButtonArrow from './UI/AppButtonArrow.vue';
import CardProduct from './CardProduct.vue';
import img from '../assets/image/broccoli-img.png';

const offerProducts = [
  {
    id: 1,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 2,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 3,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    id: 4,
    img,
    category: 'Vegetable',
    name: 'Calabrese Broccoli',
    price: 14,
    oldPrice: 20,
    rating: 5,
    description: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
];

</script>

<style lang="scss" scoped>
.section-offers {
  padding: 258px 0 200px 0;
  background-color: $dark-blue;

  .container {
    margin: 0 auto;
    max-width: 1400px;
  }

  .section-offers__container-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
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
    color: #FFF;
    text-transform: capitalize;
  }

  &__list {
    display: flex;
    justify-content: space-between;
  }
}
</style>
