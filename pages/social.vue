<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.social')}}</h1>

      <div class="youtube column-3" fxFlex="30">
        <div class="socialimage">
          <img src="../assets/images/social/youtube.png" alt="">
        </div>
        <div class="aspect-ratio">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/niW6nhdBs1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="aspect-ratio">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XgSa23Ise40" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="aspect-ratio">
          <iframe src="https://www.youtube.com/embed/4OeR7S5TcUw" frameborder="0" allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<style>
.page-container {
  height: 2000px;
}

.links {
  padding-top: 15px;
}

.column-3 {
  margin-top: 30px;
  text-align: center;
  width: 33.33%;
}

.socialimage img {
  width: 60px;
  margin-bottom: 10px;
}

.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 51%;
}
.aspect-ratio iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0; top: 0;
}
</style>
