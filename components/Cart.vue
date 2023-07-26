<template>
  <button class="cart">
    <div class="cart-container__icon">
      <svg
        class="cart__icon"
        fill="none"
      >
        <path
          d="M11.5689 23.0001C12.2439 23.0001 12.7911 22.4529 12.7911 21.7779C12.7911 21.1029 12.2439 20.5557 11.5689 20.5557C10.8939 20.5557 10.3467 21.1029 10.3467 21.7779C10.3467 22.4529 10.8939 23.0001 11.5689 23.0001Z"
          fill="white"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.1246 23.0001C20.7996 23.0001 21.3468 22.4529 21.3468 21.7779C21.3468 21.1029 20.7996 20.5557 20.1246 20.5557C19.4496 20.5557 18.9023 21.1029 18.9023 21.7779C18.9023 22.4529 19.4496 23.0001 20.1246 23.0001Z"
          fill="white"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.79102 1H5.57291L8.40933 17.0731H23.5369"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.90221 13.1837L23.1494 13.2907C23.2587 13.2908 23.3647 13.2529 23.4493 13.1837C23.5339 13.1144 23.5918 13.0179 23.6133 12.9107L25.3151 4.40145C25.3289 4.33283 25.3272 4.26203 25.3102 4.19414C25.2933 4.12625 25.2615 4.06297 25.2171 4.00886C25.1727 3.95476 25.1169 3.91118 25.0536 3.88128C24.9903 3.85138 24.9212 3.83589 24.8513 3.83594L6.35838 3.83594"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    Cart ({{ total }})
  </button>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.cart{
  display: flex;
  align-items: center;
  padding: 5px 6px;
  @include box(160px, 66px);
  @include font-size(18,21);
  font-weight: bold;
  color: $dark-blue;
  margin-left: 12px;
  border: 1px solid #E0E0E0;
  border-radius: 33px;
  background-color: transparent;
  cursor: pointer;

  &:hover{
    color: rgba($dark-blue, 0.8);

    .cart-container__icon {
      opacity: 0.8;
    }

  }
}

.cart-container__icon{
  position: relative;
  display: inline-block;
  margin-right: 12px;
  @include box(56px);
  border-radius: 50%;
  background-color: $dark-blue;
}

.cart__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  @include box(27px, 24px);
  transform: translateX(-50%) translateY(-50%);
  z-index: 100;
}
</style>
