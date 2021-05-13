<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.contact')}}</h1>
      <br>
      <b>{{$t('pages.contact.join_club')}}
      <a href="https://grapheneclub.netlify.com/" target="_blank">Graphene Club</a></b>
      <br>
      <br>
      {{$t('pages.contact.send_email')}}
      <a href="mailto:komitetgrafen@gmail.com">komitetgrafen@gmail.com</a>
      <br>
      <!-- <br>
      {{$t('pages.contact.join_video_conference_room')}}
      <a href="https://appear.in/grafen" target="_blank">appear.in/grafen</a> -->
      <br>
      <br>
      <div class="accessForm">
        <h2>{{$t('pages.contact.contact_form.header')}}</h2>
        <div class="name">
          {{$t('pages.contact.contact_form.name_surname')}}
          <input v-model="name" type="text">
        </div>
        <div class="email">
          {{$t('pages.contact.contact_form.email')}}
          <input v-model="email" type="text">
        </div>
        <div class="telephone">
          {{$t('pages.contact.contact_form.phone')}}
          <input v-model="phone" type="text">
        </div>
        <div class="terms">
          <input type="checkbox" v-model="termsRead">
          {{$t('pages.contact.contact_form.read')}}
          <nuxt-link v-bind:to="'/declaration_terms'">{{$t('pages.contact.contact_form.terms')}}</nuxt-link>
          {{$t('pages.contact.contact_form.committee_name')}}
        </div>
        <div class="telephone">
          <button @click="writeToFirestore" :disabled="!termsRead" type="button">
            {{$t('pages.contact.contact_form.send')}}
          </button>
        </div>
      </div>
      <div class="thanksForForm" v-if="writeSuccessful">
        <br>{{$t('pages.contact.contact_form.thank_you_note')}}<br>
        {{$t('pages.contact.contact_form.title')}}
      </div>
      <div class="kgraphene_society">
        <h2>KGrafen Society</h2>
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
