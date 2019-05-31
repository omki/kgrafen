<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.contact')}}</h1>
      <br>
      {{$t('pages.contact.send_email')}}
      <a href="mailto:komitetgrafen@gmail.com">komitetgrafen@gmail.com</a>
      <br>
      <br>
      {{$t('pages.contact.join_video_conference_room')}}
      <a href="http://appear.in/grafen" target="_blank">appear.in/grafen</a>
      <br>
      <br>
      <div class="accessForm">
        <h2>Proszę o przyjęcie mnie w poczet Członków Polskiego Komitetu SEP ds. Technologii Grafenowej</h2>
        <div class="name">
          Imię i Nazwisko
          <input v-model="name" type="text">
        </div>
        <div class="email">
          Email
          <input v-model="email" type="text">
        </div>
        <div class="telephone">
          Telefon
          <input v-model="phone" type="text">
        </div>
        <div class="terms">
          <input type="checkbox" v-model="termsRead">
          Zapoznałe(a)m się z
          <nuxt-link v-bind:to="'/declaration_terms'">Regulaminem</nuxt-link>Polskiego Komitetu SEP ds. Technologii Grafenowej.
        </div>
        <div class="telephone">
          <button @click="writeToFirestore" :disabled="!termsRead" type="button">Wyślij</button>
        </div>
      </div>
      <div class="thanksForForm" v-if="writeSuccessful">
        <br>Dziękuję za wypełnienie formularza <br>
        P. O. Przewodniczącego Komitetu dr Tadeusz Habdank Wojewódzki
      </div>
    </div>
  </section>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      writeSuccessful: false,
      name: '',
      phone: '',
      email: '',
      termsRead: false
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection('contacts').doc(this.email)
      const document = {
        name: this.name,
        phone: this.phone,
        email: this.email
      }
      try {
        await ref.set(document).then(() => {
          this.name = ''
          this.phone = ''
          this.email = ''
          this.termsRead = false
          this.writeSuccessful = true
        })
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
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

.accessForm > div {
  margin: 5px 0;
}
</style>
