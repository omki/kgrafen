<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.mission_vision')}}</h1>
      <div class="float-full">
        <div class="float-half-left">
          <div class="float-half-left">
            <iframe 
              src="https://sep.com.pl/tydzienSEP/2017/tydzien_w_SEP_147.pdf" 
              height="500"
              frameborder="0">
              </iframe>
          </div>
          <div class="float-half-right">
            <iframe 
              src="https://graphenequantec.files.wordpress.com/2019/03/zebranie-inauguracyjne-rady-naukowo-technicznej-sep-rnt-sep.pdf" 
              height="500"
              frameborder="0">
              </iframe>
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
  scrollToTop: false,
}
</script>

<style>
h2 {
  margin-top: 20px;
}
.page-container {
  height: 2000px;
}

.links {
  padding-top: 15px;
}
</style>
