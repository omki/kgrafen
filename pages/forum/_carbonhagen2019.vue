<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{title}}</h1>
      <a href="http://www.carbonhagen.com/cbh" target="_blank"><img :src="imageUrl" alt /></a>
      <div class="page_title">9th symposium on two~dimensional materials</div>
      <div class="page_subtitle">Copenhagen, August 21~22, 2019</div>
      <div class="content">
        <div class="pictures">
          <img src="./images/carbonhagen2019_posters.jpg" alt />
          Poster session
        </div>
        <div class="description" v-html="$t('pages.forum.carbohagen2019.description')">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: false,
  data() {
    return {
      title: 'Carbonhagen 2019',
      year: 2019,
      imageUrl:
        'http://www.carbonhagen.com/_/rsrc/1556543454758/config/header%20800.jpg.1556543454471.jpg',
      link: '/carbonhagen2019'
    }
  }
}
</script>

<style>
.page_title {
  font-size: 24px;
}

.page_subtitle {
  font-size: 18px;
  margin-bottom: 20px;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
}

img {
  width: 100%;
}

.page-container {
  padding: 20px;
}

.links {
  padding-top: 15px;
}

.join_conference {
  text-align: center;
  width: 50%;
  margin: 0 100px;
}
</style>
