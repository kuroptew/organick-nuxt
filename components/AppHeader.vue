<template>
  <header class="header">
    <div class="header-container">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
      <app-navigation />
      <search />
      <cart />
    </div>
  </header>
</template>

<script>

</script>

<style lang="scss" scoped>
.header-container {
  max-width: 1590px;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
  align-items: center;
}
</style>
