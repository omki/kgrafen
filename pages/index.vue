<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}}</h1>

      <div class="float-full">
        <div class="float-half-left">
          <img :src= "require('../assets/images/activities_' + $store.state.locale + '.png')">
          {{$t('page.header.title')}} ~ {{$t('pages.home.pillars_caption')}}
        </div>

        <div class="float-half-right">
          
          <h2>{{$t('pages.home.headline.title')}}</h2>
          <div>{{$t('pages.home.headline.description')}}</div>

          <div class="activity" v-for="(item, index) in activities" :key="index">
            <div class="activity-title">Ad.{{index + 1}}. {{$t('pages.home.activities.' + item.title + '.title')}}</div>
            <div class="activity-description">{{$t('pages.home.activities.' + item.title + '.description')}}</div>
          </div>
          
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">

  export default {
    data() {
      return {
        activities: [
          {title: 'Mobilizing'},
          {title: 'Archiving'},
          {title: 'Research'},
          {title: 'Commercial'},
          {title: 'Scientific'},
          {title: 'Popularization'},
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

.activity-title {
  margin-top: 20px;
  font-weight: bold;
}
</style>
