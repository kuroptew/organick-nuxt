<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
      <navigation />
      <header-search />
      <cart />
    </div>
  </header>
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1590px;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
  align-items: center;
}
</style>
