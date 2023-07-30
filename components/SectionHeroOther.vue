<template>
  <section
    class="section-hero"
    :style="{backgroundImage:`url(${bgImg})`}"
  >
    <div
      class="container"
      :style="{backgroundImage:`url(${bgPattern})`}"
    >
      <h1 class="section-hero__title">
        {{ title }}
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    bgImg: {
      type: String,
      required: true,
    },
    bgPattern: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-hero {
  @include cover-background;

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 184px 0;
    @include cover-background;
  }

  &__title {
    @include font-size(70, 82);
    color: $dark-blue;
    text-align: center;
   }
}
</style>
