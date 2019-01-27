<template>
  <div>
    <topview/>
    <div class="left-side-navigation">
      <navigation/>
    </div>
    <div class="right-side-content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Topview from '@/components/Topview.vue'
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Topview,
    Navigation
  }
}
</script>

<style>
html {
  background: #fff6d5;
  color: #765e00;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  margin-bottom: 20px;
}

img {
  width: 100%;
}

.button--yellow {
  display: inline-block;
  border-radius: 4px;
  border: 2px solid #fbd96e;
  color: #fbd96e;
  text-decoration: none;
  padding: 10px 30px;
  text-shadow: 1px 1px rgba(255, 0, 0, 0.67843);
  font-weight: 500;
  font-size: 20px;
  box-shadow: 2px 2px 1px 0px rgba(255, 0, 0, 0.67843);
}

.button--yellow:hover {
  background-color: rgba(255, 0, 0, 0.47843);
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.left-side-navigation {
  float: left;
  width: 20%;
}

.right-side-content {
  float: left;
  width: 80%;
}

.float-full {
  float: left;
  width: 100%;
}

.float-half-left {
  float: left;
  width: 49%;
}

.float-half-right {
  float: right;
  width: 49%;
}

</style>
