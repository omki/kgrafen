<template>
  <section class="topview">
    <div class="aspect-ratio-header">
      <iframe src="https://www.youtube.com/embed/jrOESc_vBh4?autoplay=1" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div class="header">
        <logo/>
        <h1 class="title">
          KGrafen
        </h1>
        <h2 class="subtitle">
          {{$t('page.header.title')}}
        </h2>
        <div class="links">
          <a
            href="#page"
            class="button--yellow">{{$t('page.header.button_text')}}</a>
        </div>
      </div>
    </div>
  </section>
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
.topview {
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background: url('../assets/images/graphenemodel.jpg'); */
  background-repeat: no-repeat;
  background-size: 100% 100vh;
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

.header {
  padding: 100px;
  z-index: 10;
}
.aspect-ratio-header {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 51%;
}
.aspect-ratio-header iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0; top: 0;
  z-index: -1;
}
</style>
