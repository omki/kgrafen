<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.forum')}}</h1>
      
      <div class="join_conference">
        <h3>{{$t('pages.contact.join_video_conference_room')}}</h3><br/>
        <a href="http://appear.in/grafen" target="_blank">
          <img src="../assets/images/videoconferenceroom.png" alt="">
        </a>
      </div>
      
      <br/><br/>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: false,
}
</script>

<style>
.page-container {
  height: 2000px;
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
