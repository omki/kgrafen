<template>
  <section class="navigation"/>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style>
.navigation {
  padding-top: 60px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('../assets/images/graphenemodel.jpg');
  background-repeat: no-repeat;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 500;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  color: #fbd96e;
  text-shadow: 2px 2px #ff0000ad;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  color: #fbd96e;
  text-shadow: 2px 2px #ff0000ad;
  font-weight: 500;
}
</style>
