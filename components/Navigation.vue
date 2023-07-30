<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink>Pages</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/shop">
          Shop
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink>Projects</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/news">
          News
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.nav{
  margin-left: 150px;

  &__list {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
  }

  &__item {
    a {
      @include font-size(20,24);
      font-weight: bold;
      color: $dark-blue;
    }

    .router-link-exact-active {
      color:$orange;
    }

    &:not(:last-child){
      margin-right: 42px;
    };
  }
}
</style>
