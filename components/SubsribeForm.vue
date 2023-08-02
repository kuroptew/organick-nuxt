<template>
  <section class="section-subscribe-form">
    <div class="container">
      <h2 class="subscribe-form__title">
        Subscribe to
        our Newsletter
      </h2>
      <form class="subsrcibe-form">
        <input
          class="subsrcibe-form__input"
          type="email"
          placeholder="Your email adress"
        >
        <button class="subscribe-form__btn">
          Subscribe
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.section-subscribe-form {
  margin-top: 140px;
  margin-bottom: 120px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 105px 70px;
  max-width: 1400px;
  background-image: url("~/assets/image/bg-subscribe-form.png");
  @include cover-background();
  border-radius: 30px;
}

.subscribe-form__title {
  max-width: 357px;
  @include font-size(50,60);
  font-weight: bold;
  color: #FFF;
}

.subsrcibe-form__input {
  width: 350px;
  margin-right: 6px;
  padding: 30px 23px;
  border: none;
  border-radius: 16px;
  @include font-size(18,21);
  font-style: italic;
  color: $black;

  &::placeholder {
    color: #ABABAB;
  }
}

.subscribe-form__btn {
  padding: 28px;
  width: 220px;
  text-align: center;
  @include font-size(20,23);
  border-radius: 16px;
  font-weight: bold;
  background-color: $dark-blue;
  color: #FFF;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }
}

</style>
