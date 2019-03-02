<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.mission_vision')}}</h1>
      <div class="float-full">
        <div class="float-half-left">
          <div class="float-half-left">
            <a :href="urls.tydzienWSepUrl" target="_blank">
              <img src="../assets/images/articles/tydzien_w_sep.png" alt="">
            </a>
            {{$t('pages.mision_vision.captions.week_in_sep')}}
          </div>
          <div class="float-half-right">
            <a :href="urls.zebranieSepUrl" target="_blank">
              <img src="../assets/images/articles/zebranie_sep.png" alt="">
            </a>
            {{$t('pages.mision_vision.captions.zebranie_sep')}}
          </div>
        </div>
        <div class="float-half-right">
          <h2>{{$t('pages.mision_vision.mission.title')}}</h2>
          <p>{{$t('pages.mision_vision.mission.content')}}</p>
          <h2>{{$t('pages.mision_vision.vision.title')}}</h2>
          <p>{{$t('pages.mision_vision.vision.content')}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      urls: {
        tydzienWSepUrl: "https://sep.com.pl/tydzienSEP/2017/tydzien_w_SEP_147.pdf",
        zebranieSepUrl: "https://graphenequantec.files.wordpress.com/2019/03/zebranie-inauguracyjne-rady-naukowo-technicznej-sep-rnt-sep.pdf"
      }
    }
  },
  scrollToTop: false,
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
