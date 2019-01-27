<template>
  <section class="navigation">
    <coin top-color="#4087C7" side-color="#4074A2" title="Home" link="/"></coin>
    <coin top-color="#FBAA28" side-color="#C99032" title="Contact us" link="/contact"></coin>
    <coin top-color="#EA99EE" side-color="#BD82BF" title="Social media" link="/social"></coin>
    <coin top-color="#96D9EE" side-color="#7FAFBF" title="Projects" link="/projects"></coin>
    <coin top-color="#8FEC70" side-color="#7BBE64" title="Mission & Vision" link="/mission_vision"></coin>
    <coin top-color="#FFED0D" side-color="#CBBE1B" title="Forum" link="/forum"></coin>
    <coin top-color="#BB5770" side-color="#9B5364" title="Declaration & Terms" link="/declaration_terms"></coin>
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
