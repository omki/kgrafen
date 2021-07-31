<template>
  <section id="page">
    <div class="page-container">
      <h1>{{ $t('sensors.title') }}</h1>
      <div class="chapter" v-for="chapter in $t('sensors.chapters')" :key="chapter.title">
        {{chapter.title}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: false,
  data() {
    return {
      urls: {
        tydzienWSepUrl: "https://sep.com.pl/tydzienSEP/2017/tydzien_w_SEP_147.pdf",
        zebranieSepUrl: "https://graphenequantec.files.wordpress.com/2019/03/zebranie-inauguracyjne-rady-naukowo-technicznej-sep-rnt-sep.pdf"
      }
    }
  },
}
</script>

<style>
h2:not(:first-child) {
  margin-top: 20px;
}
.page-container {
  height: 2000px;
} 

.links {
  padding-top: 15px;
}

.float-half-left.smaller {
  float: left;
  width: 46%;
}

.float-half-right.smaller {
  float: right;
  width: 46%;
}
</style>
