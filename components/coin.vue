<template>
  <div id="coin-wrap" v-bind:style="{'z-index': -index + 10}">
    <nuxt-link v-bind:to="link">
      <div class="coin-container">
        <div class="coin-title" v-bind:style="{'color' : topColor}">{{title}}</div>
        <div id="tridiv">
          <div
            class="scene"
            style="-webkit-transform:rotateX(348deg) rotateY(1234deg); -moz-transform:rotateX(348deg) rotateY(1234deg); -ms-transform:rotateX(348deg) rotateY(1234deg); transform:rotateX(348deg) rotateY(1234deg); "
          >
            <div class="shape cylinder-1 cyl-1">
              <div class="face bm"/>
              <div class="face tp" v-bind:style="{'background-color' : topColor}"/>
              <div
                v-for="face in 16"
                :key="face"
                v-bind:class="'face side s' + face"
                v-bind:style="{'background-color' : sideColor}"
              />
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'empty',
      type: String
    },
    link: {
      default: '/',
      type: String
    },
    topColor: {
      default: 'yellow',
      type: String
    },
    sideColor: {
      default: 'pink',
      type: String
    },
    index: {
      default: 0,
      type: Number
    }
  }
}
</script>

<style>
/* /!\ You need to add vendor prefixes in order to render the CSS properly (or simply use http://leaverou.github.io/prefixfree/) /!\ */
#coin-wrap {
  margin-top: -28px;
}
.coin-container {
  position: relative;
  height: 90px;
  text-align: center;
}
.coin-container:hover {
  font-weight: bold;
}
.coin-title {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 16px;
  filter: brightness(30%);
  line-height: 1;
  pointer-events: none;
}
#tridiv {
  perspective: 800px;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 162.5%;
}
.scene,
.shape,
.face,
.face-wrapper,
.cr {
  position: absolute;
  transform-style: preserve-3d;
}
.scene {
  width: 80em;
  height: 80em;
  top: 50%;
  left: 50%;
  margin: -40em 0 0 -40em;
}
.shape {
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 50%;
}
.face,
.face-wrapper {
  overflow: hidden;
  transform-origin: 0 0;
  backface-visibility: hidden;
  /* hidden by default, prevent blinking and other weird rendering glitchs */
}
.face {
  background-size: 100% 100% !important;
  background-position: center;
}
.face-wrapper .face {
  left: 100%;
  width: 100%;
  height: 100%;
}
.photon-shader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.side {
  left: 50%;
}
.cr,
.cr .side {
  height: 100%;
}
[class*='cylinder'] .tp {
  transform: rotateX(90deg) translateY(-50%);
}
[class*='cylinder'] .bm {
  transform: rotateX(-90deg) translateY(-50%);
}
[class*='cylinder'] .tp,
[class*='cylinder'] .bm,
[class*='cylinder'] .tp .photon-shader,
[class*='cylinder'] .bm .photon-shader {
  border-radius: 50%;
}
[class*='cylinder'] .bm {
  top: 100%;
}
/* .cyl-1 styles */
.cyl-1 {
  transform: translate3D(0em, 0em, 0em) rotateX(0deg) rotateY(0deg)
    rotateZ(0deg);
  opacity: 1;
  width: 12em;
  height: 1em;
  margin: -0.5em 0 0 -6em;
  animation: rotating 8s linear infinite;
}
.cyl-1:hover {
  animation: rotating 4s linear infinite;
}
.cyl-1 .tp,
.cyl-1 .bm {
  width: 12em;
  height: 12em;
}
.cyl-1 .side {
  width: 2.411948408555896em;
  height: 1em;
}
.cyl-1 .s16 {
  transform: rotateY(11.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s1 {
  transform: rotateY(33.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s2 {
  transform: rotateY(56.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s3 {
  transform: rotateY(78.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s4 {
  transform: rotateY(101.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s5 {
  transform: rotateY(123.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s6 {
  transform: rotateY(146.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s7 {
  transform: rotateY(168.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s8 {
  transform: rotateY(191.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s9 {
  transform: rotateY(213.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s10 {
  transform: rotateY(236.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s11 {
  transform: rotateY(258.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s12 {
  transform: rotateY(281.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s13 {
  transform: rotateY(303.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s14 {
  transform: rotateY(326.25deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1 .s15 {
  transform: rotateY(348.75deg) translate3D(-50%, 0, 5.975em);
}
.cyl-1:hover .face,
.cyl-1:hover .side,
.cyl-1:hover .tp {
  filter: brightness(125%);
  cursor: pointer;
}

@keyframes rotating {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
