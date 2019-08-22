<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.forum')}}</h1>
      
      <div class="join_conference">
        <h3>{{$t('pages.contact.join_video_conference_room')}}</h3><br/>
        <a href="http://appear.in/grafen" target="_blank">
          <img src="~assets/images/videoconferenceroom.png" alt="">
        </a>
      </div>
      
      <br/><br/>
      <h1>{{$t('pages.forum.conferences.title')}}</h1>
      <div class="conferences">
      <div class="conference" v-for="conference in conferences" :key="conference.id">
          <a :href="conference.link"><img :src="conference.imageUrl" alt=""></a>
          <div class="bookTitle">"{{conference.name}}"</div>
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
      conferences: [
        {
          name: "Carbonhagen 2019",
          year: 2019,
          imageUrl: "http://www.carbonhagen.com/_/rsrc/1556543454758/config/header%20800.jpg.1556543454471.jpg",
          link: "/forum/carbonhagen2019"
        }
      ]
    }
  }
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

.conferences {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}

.conference  {
  font-size: 18px;
}

.conference img {
  width: 100%;
}
</style>
