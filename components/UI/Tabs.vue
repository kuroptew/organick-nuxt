<template>
  <div class="tab-nav">
    <span
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', {'selected': tab.name === selectedTab}]"
      @click="clickOnTab(tab.name)"
    >{{ tab.label }}
    </span>
  </div>
  <div class="tab-content">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  names: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(['changeTab']);

const clickOnTab = (tabName) => {
  emit('changeTab', tabName);
};
</script>

<style lang="scss" scoped>
.tab {
  &-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;

    &__item {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      border-radius: 16px;
      cursor: pointer;
      padding: 23px 60px;
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      color: $dark-blue;
      background-color: $green-grey;
      @include font-size(25,30);

      &:hover {
        opacity: 0.8;
        transition:all 0.3s ease-in-out;
      }

      &.selected {
        background-color: $dark-blue;
        color: #FFF;
      }
    }
  }

  &-content {
    max-width: 1140px;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    @include font-size(18, 30);
    color: $black;
    text-align: center;
  }
}
</style>
