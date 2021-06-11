<template>
  <section id="page">
    <div class="page-container">
      <h1>{{ $t('page.header.title') }} ~ {{ $t('navigation.contact') }}</h1>
      <br>
      <b>{{ $t('pages.contact.join_club') }}
        <a
          href="https://grapheneclub.netlify.com/"
          target="_blank"
        >Graphene Club</a></b>
      <br>
      <br>
      {{ $t('pages.contact.send_email') }}
      <a href="mailto:komitetgrafen@gmail.com">komitetgrafen@gmail.com</a>
      <br>
      <!-- <br>
      {{$t('pages.contact.join_video_conference_room')}}
      <a href="https://appear.in/grafen" target="_blank">appear.in/grafen</a> -->
      <br>
      <br>
      <div class="accessForm">
        <h2>{{ $t('pages.contact.contact_form.header') }}</h2>
        <div class="name">
          {{ $t('pages.contact.contact_form.name_surname') }}
          <input
            v-model="name"
            type="text"
          >
        </div>
        <div class="email">
          {{ $t('pages.contact.contact_form.email') }}
          <input
            v-model="email"
            type="text"
          >
        </div>
        <div class="telephone">
          {{ $t('pages.contact.contact_form.phone') }}
          <input
            v-model="phone"
            type="text"
          >
        </div>
        <div class="terms">
          <input
            v-model="termsRead"
            type="checkbox"
          >
          {{ $t('pages.contact.contact_form.read') }}
          <nuxt-link :to="'/declaration_terms'">
            {{ $t('pages.contact.contact_form.terms') }}
          </nuxt-link>
          {{ $t('pages.contact.contact_form.committee_name') }}
        </div>
        <div class="telephone">
          <button
            :disabled="!termsRead"
            type="button"
            @click="writeToFirestore"
          >
            {{ $t('pages.contact.contact_form.send') }}
          </button>
        </div>
      </div>
      <div
        v-if="writeSuccessful"
        class="thanksForForm"
      >
        <br>{{ $t('pages.contact.contact_form.thank_you_note') }}<br>
        {{ $t('pages.contact.contact_form.title') }}
      </div>
      <div class="kgraphene_society">
        <h2>KGrafen Society</h2>
        <h3>Przewodniczący doktor Habdank Tadeusz</h3>
        <div class="legitymacja">
          <div>
            <img
              src="../assets/images/contact/legitymacja_habdank/habdank_photo.png"
              alt=""
            >
            <div>P.o. przewodniczącego Polskiego Komitetu SEP ds. Technologii Grafenowej</div>
            <div>Doktor Habdank Tadeusz</div>
          </div>
          <div>
            <img
              src="../assets/images/contact/legitymacja_habdank/legitymacja_habdank_front.png"
              alt=""
            >
            <div>SEP EXPERT</div>
            <div>Stowarzyszenie Elektryków Polski</div>
            <div>Rok założenia 1919</div>
            <div>EKSPERT W DZIEDZINIE: [23] Inżynieria materiałowa</div>
            <div>nr legitymacji: 17</div>
            <div>Doktor Habdank Tadeusz</div>
          </div>
          <div>
            <img
              src="../assets/images/contact/legitymacja_habdank/legitymacja_habdank_back.png"
              alt=""
            >
            <div>SEP ~ Stowarzyszenie Elektryków Polski</div>
            <div>Association od Polish Electrical Engineers</div>
            <div>LEGITYMACJA EXPERTA SEP</div>
            <div>ZARZĄD GŁÓWNY</div>
            <div>ul. Świętokrzyska 14</div>
            <div>00-050 Warszawa</div>
          </div>
        </div>
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

.legitymacja {
  display: flex;
}

.legitymacja > div {
  margin-left: 10px;
}

.legitymacja img {
  width: 100%;
}

</style>
