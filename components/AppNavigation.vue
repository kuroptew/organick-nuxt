<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link>Pages</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link>Shop</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link>Projects</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link>News</nuxt-link>
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
}

.nav__list {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
}

.nav__item {
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
</style>
