<template>
  <section id="page">
    <div class="page-container">
      <h1>{{ $t('page.header.title') }} ~ {{ $t('navigation.social') }}</h1>

      <div
        class="youtube column-3"
        fxFlex="30"
      >
        <div class="socialimage">
          <img
            src="../assets/images/social/youtube.png"
            alt=""
          >
        </div>
        <div class="aspect-ratio">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qzUjnlP17Dc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="aspect-ratio">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/niW6nhdBs1Q"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="aspect-ratio">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XgSa23Ise40"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="aspect-ratio">
          <iframe
            src="https://www.youtube.com/embed/4OeR7S5TcUw"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>

      <div
        class="column-3"
        fxFlex="30"
      >
        <div class="socialimage">
          <img
            src="../assets/images/social/facebook.png"
            alt=""
          >
        </div>
        <no-ssr>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/KGrafen/"
            data-tabs="timeline"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/KGrafen/"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/KGrafen/">Polski Komitet Naukowy SEP ds Technologii grafenowej</a>
            </blockquote>
          </div>
        </no-ssr>
        <no-ssr>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/graphenenews/"
            data-tabs="timeline"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/graphenenews/"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/graphenenews/">Graphene Quantum Technology</a>
            </blockquote>
          </div>
        </no-ssr>
        <no-ssr>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/Graphene-Electrodes-Implanted-1149904715019877/"
            data-tabs="timeline"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/Graphene-Electrodes-Implanted-1149904715019877/"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/Graphene-Electrodes-Implanted-1149904715019877/">Graphene Electrodes Implanted</a>
            </blockquote>
          </div>
        </no-ssr>
      </div>

      <div
        class="column-3"
        fxFlex="30"
      >
        <div class="socialimage">
          <img
            src="../assets/images/social/wordpress.png"
            alt=""
          >
        </div>
        <a
          href="https://graphenequantec.wordpress.com"
          target="_blank"
        >
          <img
            src="../assets/images/graphene.png"
            alt=""
          >
          Polish Science Committee in charge by Association of Polish Electrical Engineers for Graphene Technology.
        </a>
      </div>
    </div>
  </section>
</template>

<script>
// import { FB } from '../plugins/fb-sdk.js'

export default {
    //   data: function () {
    //     return {isFBReady: false}
    // },
    // mounted: function () {
    //     this.isFBReady = Vue.FB != undefined
    //     window.addEventListener('fb-sdk-ready', this.onFBReady)
    // },
    // beforeDestroy: function () {
    //     window.removeEventListener('fb-sdk-ready', this.onFBReady)
    // },
    // methods: {
    //     onFBReady: function () {
    //       this.isFBReady = true
    //     }
    // }

  created: function() {
    if (process.client) {
    console.log('created main');
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '208927772784560',
        xfbml      : true,
        version    : 'v2.7'
      });

      //This function should be here, inside window.fbAsyncInit
    //   FB.getLoginStatus(function(response) {
    //     console.log(response);
    //  });

   };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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

.column-3 {
  display: inline-grid;
  margin-top: 30px;
  text-align: center;
  width: 30%;
}

no-ssr {
  margin-bottom: 20px;
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
