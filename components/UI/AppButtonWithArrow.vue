<template>
  <button
    class="btn"
    :class="`btn_${type}`"
  >
    <p
      class="btn__text"
      :class="`btn__text_${type}`"
    >
      {{ text }}
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
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'dark',
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  padding: 28px 40px;
  width: 220px;
  border-radius: 16px;
  cursor: pointer;

  &_dark{
    background-color: $dark-blue;
  }

  &_light{
    background-color: $orange;
  }

&:hover {
   opacity: 0.8;
 }
}

.btn__text {
  @include font-size(20,24);
  font-weight: bold;

  display: inline-block;
  margin-right: 8px;
  text-transform: capitalize;

  &_dark {
    color: #FFF;
  }

  &_light {
    color: $dark-blue;
  }
}

.btn__icon {
  @include box(19px);
}

</style>
