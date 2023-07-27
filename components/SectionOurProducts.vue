<template>
  <section class="section-our-products">
    <div class="container">
      <h3 class="section-our-products__subtitle">
        Categories
      </h3>
      <h2 class="section-our-products__title">
        Our Products
      </h2>
      <div class="section-our-products__list">
        <card-product
          v-for="p in products"
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
      <app-button-with-arrow
        :type="'blue'"
        :text="'Load more'"
      />
    </div>
  </section>
</template>

<script>
import CardProduct from './CardProduct.vue';
import img from '../assets/image/broccoli-img.png';
import AppButtonWithArrow from './UI/AppButtonWithArrow.vue';

export default {
  components: { AppButtonWithArrow, CardProduct },
  data() {
    return {
      products: [
        {
          id: 1,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
        {
          id: 2,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
        {
          id: 3,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
        {
          id: 4,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
        {
          id: 5,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
        {
          id: 6,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
        {
          id: 7,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
        {
          id: 8,
          img,
          category: 'Vegetable',
          name: 'Calabrese Broccoli',
          price: 14,
          oldPrice: 20,
          rating: 5,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-our-products {
  margin-top: 176px;
  margin-bottom: 200px;
  .container {
    margin: 0 auto;
    max-width: 1400px;

    button {
      margin: 0 auto;
    }
  }

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
    margin-bottom: 40px;
    font-weight: bold;
    color: $dark-blue;
    text-align: center;
    text-transform: capitalize;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    margin-bottom: 120px;
  }
}
</style>
