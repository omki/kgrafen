<template>
  <div>
    <h2>Dodaj video do kategorii {{category}}</h2>
    <div class="insert-video">
      <input type="text" v-model="videoId" placeholder="wprowadź id video z YouTube" class="insert-video-input">
      <button @click="writeToFirestore">
        <span>Dodaj</span>
      </button>
    </div>

    <div class="thumbs">
      <img v-for="video in videos" :key="video.text" @click="selectVideo(video.id)" :src="'https://img.youtube.com/vi/'+ video.data().text +'/mqdefault.jpg'"> 
    </div>
    <div class="video">
      <iframe v-if="selectedVideo" id="ytplayer" type="text/html" width="640" height="360"
        :src="'https://www.youtube.com/embed/' + selectedVideo + '?autoplay=1&origin=http://example.com'"
        frameborder="0"></iframe>
    </div>

    <!-- https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id=YQHsXMglC9A&key=AIzaSyAkfWLJzhLVGxE0onSNBWpg3gc-kX_Xvl8 -->


  </div>
</template>
<script lang="ts">
import {fireDb} from '../../../plugins/firebase.js'
import { Route } from 'vue-router'

  export default {
    data() {
      return {
        videoId: "",
        category: '',
        videos: [],
        selectedVideo: ''
      }
    },
    created() {
      this.category = this.$route.params.category // this should not throw TS errors now
      this.readFromFirestore()
    },
    methods: {
      async writeToFirestore() {
        if (this.videoId.length!=11) return
        const ref = fireDb.collection("videos").doc(this.videoId)
        const document = {
          text: this.videoId,
          category: this.category,
          creationTimestamp: Date.now()
        }
        try {
          await ref.set(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.readFromFirestore()
      },
      async readFromFirestore() {
        const ref = fireDb.collection("videos").where("category", "==", this.category)
        console.log('this.category', this.category)
        let snap
        try {
          snap = await ref.get()
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.videos = snap.docs
        if (this.videos.length > 0) {
          this.selectVideo(this.videos[0].id)
        }
      },
      selectVideo(videoId) {
        this.selectedVideo = videoId
      }
    }
  }

</script>

<style>
  .thumbs {
    float: left;
    width: 20%;
  }
  .video {
    float: right;
    width: 78%;
  }
  .insert-video {
    margin: 20px 0;
  }
  .insert-video-input {
    width: 200px;
  }
</style>
