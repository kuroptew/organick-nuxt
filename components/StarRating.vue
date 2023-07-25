<template>
  <div class="star-rating">
    <span
      v-for="index in starLimit"
      :key="index"
      class="star"
    />
    <div
      class="star-rating_colored"
      :style="{width:widthRating}"
    >
      <span
        v-for="index in starLimit"
        :key="index"
        class="star star_colored"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    widthRating() {
      return `${(this.rating / this.starLimit) * 100}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;
  &_colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left:0;
    overflow: hidden;
  }
}
  .star {
    display: inline-block;
    margin-right: 3px;
    flex-shrink: 0;
    @include box(15px);

    &:last-child{
      margin-right: 0;
    }

    &_colored {
      background-image: url('../assets/image/star-orange.svg');
      @include cover-background;
    }
  }
</style>
