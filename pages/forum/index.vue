<template>
  <section id="page">
    <div class="page-container">
      <h1>{{ $t('page.header.title') }} ~ {{ $t('navigation.forum') }}</h1>
      
      <div class="join_conference">
        <h3>{{ $t('pages.contact.join_video_conference_room') }}</h3><br>
        <a
          href="https://appear.in/grafen"
          target="_blank"
        >
          <img
            src="~assets/images/videoconferenceroom.png"
            alt=""
          >
        </a>
      </div>
      
      <br><br>
      <a
        href="http://www.carbonhagen.com/cbh"
        target="_blank"
      >
        <h1>{{ $t('pages.forum.conferences.title') }}</h1>
      </a>
      <div class="conferences">
        <div
          v-for="conference in conferences"
          :key="conference.id"
          class="conference"
        >
          <nuxt-link :to="conference.link">
            <img
              :src="conference.imageUrl"
              alt=""
            >
          </nuxt-link>
          <div class="bookTitle">
            <nuxt-link to="/forum/Carbonhagen2019">
              "{{ $t('page.header.title') }} ~ {{ conference.name }}"
            </nuxt-link>
          </div>
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
          imageUrl: "https://www.carbonhagen.com/_/rsrc/1556543454758/config/header%20800.jpg.1556543454471.jpg",
          link: "/forum/carbonhagen2019" +'?lang='+ this.$store.state.locale
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
  width: 70%;
}

.conference  {
  font-size: 18px;
}

.conference img {
  width: 100%;
}
</style>
