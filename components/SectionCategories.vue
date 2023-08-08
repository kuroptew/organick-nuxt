<template>
  <section class="section-categories">
    <div class="container">
      <ul class="categories__list">
        <li class="categories__item categories__item_juice">
          <nuxt-link to="/shop">
            <button class="categories__btn">
              Organic juice
            </button>
          </nuxt-link>
        </li>
        <li class="categories__item categories__item_food">
          <nuxt-link to="/shop">
            <button class="categories__btn">
              Organic food
            </button>
          </nuxt-link>
        </li>
        <li class="categories__item categories__item_nuts">
          <nuxt-link to="/shop">
            <button class="categories__btn">
              Nuts Cookis
            </button>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.section-categories {
  padding: 187px 0;
  background-color: #F1F8F4;

  .container {
    margin: 0 auto;
    max-width: 1920px;
  }
}

.categories {
  &__list {
    display: flex;
    gap: 42px;
    list-style: none;
  }

 &__item {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 583px;
   width: 612px;
   @include cover-background();

   &_juice {
     background-image: url("../assets/image/bg-juice.png");
   }

   &_food {
     background-image: url("../assets/image/bg-organic-food.png");
   }

   &_nuts {
     background-image: url("../assets/image/bg-nuts.png");
   }
 }

  &__btn {
    min-width: 316px;
    padding: 33px;
    text-align: center;
    border-radius: 20px;
    background-color: #FFF;
    @include font-size(25,30);
    font-weight: 500;
    color: $dark-blue;
    text-transform: capitalize;
    cursor: pointer;

    &:hover {
      transition: color 0.3s ease-in-out  ;
      color:$orange;
    }
  }
}

</style>
