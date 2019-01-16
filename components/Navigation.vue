<template>
  <section class="navigation">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/contact">Contact us</nuxt-link>
    <nuxt-link to="/social">Social media</nuxt-link>
    <nuxt-link to="/projects">Projects</nuxt-link>
    <nuxt-link to="/mission_vision">Mission & Vision</nuxt-link>
    <nuxt-link to="/forum">Forum</nuxt-link>
    <nuxt-link to="/declaration_terms">Declaration & Terms</nuxt-link>
  </section>
</template>

<script>
import Coin from './coin.vue'
export default {
  scrollToTop: false,
  components: {
    Coin
  }
}
</script>

<style>
a {
  display: block;
}
</style>
