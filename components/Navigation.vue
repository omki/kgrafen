<template>
  <section class="navigation">

   
    <coin v-for="item in navigation_items" :key="item.id" :topColor="item.topColor" 
    :sideColor="item.sideColor" :title="$t('navigation.'+item.title)" :link="item.link +'?lang='+$store.state.locale"></coin>

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
</style>
