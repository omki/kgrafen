<template>
  <div class="VueToNuxtLogo">
    <img src="../assets/images/pcs_graphene_octa.png" >
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  position: relative;
  width: 160px;
  height: 180px;
}

.VueToNuxtLogo img {
  width: 100%;
  animation: turn 2s linear forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(360deg);
  }
}
</style>
