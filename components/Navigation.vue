<template>
  <section class="navigation">

   
    <coin v-for="item in navigation_items" :key="item.id" :topColor="item.topColor" 
    :sideColor="item.sideColor" :title="$t('navigation.'+item.title)" :link="item.link +'?lang='+$store.state.locale"></coin>

    <!-- <canvas id="renderCanvas" touch-action="none"></canvas> -->
    <div class="fullerene">
      <div class="aspect-ratio-fullerene">
        <iframe src="https://grafen.surge.sh/" frameborder="0" width="100%"></iframe>
      </div>
      {{$t('page.header.title')}} ~ {{$t('navigation.fullerene')}}
    </div>

    <div class="choose-language">
      <p> {{$t('home.lang.title')}}</p>

      <select name="lang" @change="changeLang()" v-model="key">
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select> 
    </div>

    <div class="kgrafen-symbol">
      <img :src= "require('../assets/images/kgrafen_symbol_' + $store.state.locale + '.png')">
      <p> {{$t('page.header.title')}}</p>
    </div>


  </section>
</template>

<script>
import Coin from './coin.vue'

export default {
  // head() {
  //   return {
  //     script: [
  //       { src: 'https://preview.babylonjs.com/babylon.js' },
  //       { src: 'https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js' },
  //       { src: 'https://code.jquery.com/pep/0.4.3/pep.js' },
  //       { src: 'http://grafen.surge.sh/sphere.js' }
  //     ]
  //   }
  // },
  data() {
    return {
      key: "",
      navigation_items: {
        "home": {topColor: "#4087C7", sideColor: "#4074A2", title: "home", link: "/"},
        "contact": {topColor: "#FBAA28", sideColor: "#C99032", title: "contact", link: "/contact"},
        "social": {topColor: "#EA99EE", sideColor: "#BD82BF", title: "social", link: "/social"},
        "projects": {topColor: "#96D9EE", sideColor: "#7FAFBF", title: "projects", link: "/projects"},
        "mission_vision": {topColor: "#8FEC70", sideColor: "#7BBE64", title: "mission_vision", link: "/mission_vision"},
        "forum": {topColor: "#FFED0D", sideColor: "#CBBE1B", title: "forum", link: "/forum"},
        "declaration_terms": {topColor: "#BB5770", sideColor: "#9B5364", title: "declaration_terms", link: "/declaration_terms"}    
      }
    }
  },
  scrollToTop: false,
  components: {
    Coin
    // vSelect
  },
  methods: {
    changeLang () {
      //mutate 'locale' in store
      this.$store.commit('SET_LANG', this.key)
      //re-route to the current page but with the selected language in a query string
      this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${this.key}` })
    }
  }
}
</script>

<style>
  .choose-language {
    padding: 30px;
  }
  .kgrafen-symbol {
    padding: 20px;
  }
  
  .fullerene {
    margin: 20px 20px 0;
    box-sizing: border-box;
  }
  .aspect-ratio-fullerene {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .aspect-ratio-fullerene iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0; top: 0;
  }
</style>
