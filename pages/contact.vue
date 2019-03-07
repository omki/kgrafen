<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.contact')}}</h1>
      <br/>
      {{$t('pages.contact.send_email')}} <a href="mailto:komitetgrafen@gmail.com">komitetgrafen@gmail.com</a>

      <div class="accessForm">
        <h2>Proszę o przyjęcie mnie w poczet Członków Polskiego Komitetu SEP ds. Technologii Grafenowej</h2>
        <div class="name">Imię i Nazwisko <input type="text"></div>
        <div class="email">Email <input type="text"></div>
        <div class="telephone">Telefon <input type="text"></div>
        <div class="terms"><input type="checkbox"> Zapoznałe(a)m się z <nuxt-link v-bind:to="'/declaration_terms'">Regulaminem</nuxt-link> Polskiego Komitetu SEP ds. Technologii Grafenowej.</div>
        <div class="telephone"><button type="button">Wyślij</button></div>
      </div>

      Dziękuję za wypełnienie wormularza P. O. Przewodniczącego Komitetu dr Tadeusz Habdank Wojewódzki
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

.accessForm > div {
  margin: 5px 0;
}
</style>
