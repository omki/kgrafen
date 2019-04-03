<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.projects')}}</h1>

      <div class="float-full">
        <div class="float-half-left">
          <div class="category-links">
            <nuxt-link to="/projects/Energie Odnawialne">Energie Odnawialne</nuxt-link> ~
            <nuxt-link to="/projects/Elektronika">Elektronika</nuxt-link> ~
            <nuxt-link to="/projects/Elektromobilność">Elektromobilność</nuxt-link> ~
            <nuxt-link to="/projects/Materiały">Materiały</nuxt-link> ~
            <nuxt-link to="/projects/Elektrotechnika">Elektrotechnika</nuxt-link> ~
            <nuxt-link to="/projects/Kompozyty">Kompozyty</nuxt-link>
          </div>

          <img src="../../assets/images/KSGrafenFields.png">
          Polski Komitet Naukowy SEP do spraw Technologii Grafenowej ~ kierunki badawczo popularyzatorskie
        </div>

        <div class="float-half-right">
          <section id="reviews_body">
            <article class="float-full" v-for="publication in publications" :key="publication.id">
              <div class="pic">
                <a
                  :href="publication.link"
                  class="w_hover img-link img-wrap"
                  target="_blank"
                >
                  <img :src="publication.imageUrl">
                </a>
              </div>
              <div class="float-text">
                <h3>
                  <a
                    :href="publication.link"
                    target="_blank"
                  >
                    <b>{{publication.title}}</b>
                  </a>
                </h3>
                <div class="post-info">
                  <a
                    :href="publication.issue.link"
                    target="_blank"
                  >
                    {{publication.issue.name}}
                  </a>
                </div>

                <div class="post-info">
                  <a
                    v-for="author in publication.authors"
                    :key="author.id"
                    class="post_author"
                    :href="author.link"
                    target="_blank"
                    :title="author.name"
                  >
                    {{author.name}}
                  </a>&nbsp;
                </div>

                <div class="text">
                  <p>
                    {{publication.abstract}}
                  </p>
                </div>
              </div>
            </article>

          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: false,
  data() {
    return {
      publications: [
        {
          link: "http://www.sigma-not.pl/publikacja-32608-mikronanokompozyt-grafit-cynk-jako-materiał-do-konstrukcji-sensora-temperatury-węzła-tarcia-elektronika-konstrukcje-technologie-zastosowania-2008-1.html",
          imageUrl: "http://images.sigma-not.pl/2008/13/1",
          title: "Mikronanokompozyt grafit-cynk jako materiał do konstrukcji sensora temperatury węzła tarcia",
          issue: {
            name: "WIADOMOŚCI ELEKTROTECHNICZNE 2008/4",
            link: "http://www.sigma-not.pl/zeszyt-1628-elektronika-konstrukcje-technologie-zastosowania-1.html"
          },
          authors: [
            {
              name: "TADEUSZ HABDANK-WOJEWÓDZKI", 
              link: "http://www.sigma-not.pl/autor-32608-0-tadeusz-habdank-wojewodzki.html"
            },
            {
              name: "JÓZEF HABDANK", 
              link: "http://www.sigma-not.pl/autor-32608-1-jozef-habdank.html"
            }
          ],
          abstract: "Mikronanokompozyty są mieszaninami faz nano i faz mikro oraz faz przejściowych, tzw. mezofaz, przeważnie powstałych np. w procesach technologicznych. Występuje korelacja pomiędzy skalą wielkości składników fazowych a ich właściwościami [1, 2]. W nanokompozytach obserwujemy polepszenie właściwości mechanicznych, tribologicznych oraz eletrotribologicznych, również w przecięciu ze skalą mikro. [...]"
        },
        {
          link: "http://www.sigma-not.pl/publikacja-34185-modyfikacja-powierzchni-mikro--i-nanoproszków---napełniaczy-mikronanokompozytów-polimerowych-wiadomosci-elektrotechniczne-2008-4.html",
          imageUrl: "http://images.sigma-not.pl/2008/74/4",
          title: "Modyfikacja powierzchni mikro- i nanoproszków - napełniaczy mikronanokompozytów polimerowych",
          issue: {
            name: "KONSTRUKCJE, TECHNOLOGIE, ZASTOSOWANIA 2008/1",
            link: "http://www.sigma-not.pl/zeszyt-1708-wiadomosci-elektrotechniczne-4.html"
          },
          authors: [
            {
              name: "TADEUSZ HABDANK-WOJEWÓDZKI", 
              link: "http://www.sigma-not.pl/autor-32608-0-tadeusz-habdank-wojewodzki.html"
            },
            {
              name: "Lech Subocz", 
              link: "http://www.sigma-not.pl/autor-34185-1-lech-subocz.html"
            }
          ],
          abstract: `Nanokompozyty polimerowe znajdują się obecnie
                    w głównym nurcie badań wielu laboratoriów naukowych.
                    W odróżnieniu od nanokompozytów mikronanokompozyty
                    posiadają dwa typy napełniaczy proszkowych: jeden w skali
                    nano oraz dodatkowy w skali mikro, stanowiący pomost
                    do makroskali oraz poszerzający możliwości modyfikacji
                    ich własności. W celu zmian ich własności wykonuje
                    się modyfikacje powierzchn[...]`
        },
        {
          link: "http://www.sigma-not.pl/publikacja-76552-grafenowe-elektrody-transparentne-dla-drukowanych-ogniw-fotowoltaicznych-elektronika-konstrukcje-technologie-zastosowania-2013-5.html",
          imageUrl: "http://images.sigma-not.pl/2013/13/5.jpg",
          title: "Grafenowe elektrody transparentne dla drukowanych ogniw fotowoltaicznych",
          issue: {
            name: "",
            link: ""
          },
          authors: [
              {
                  name: "Daniel Janczak", 
                  link: "http://www.sigma-not.pl/autor-76552-0-daniel-janczak.html"
              },
              {
                  name: "Marcin Słoma", 
                  link: "http://www.sigma-not.pl/autor-76552-1-marcin-sloma.html"
              },
              {
                  name: "Grzegorz Wróblewski", 
                  link: "http://www.sigma-not.pl/autor-76552-2-grzegorz-wroblewski.html"
              },
              {
                  name: "Małgorzata Jakubowska", 
                  link: "http://www.sigma-not.pl/autor-76552-3-malgorzata-jakubowska.html"
              },
              {
                  name: "Anna Młożniak", 
                  link: "http://www.sigma-not.pl/autor-76552-4-anna-mlozniak.html"
              },
          ],
          abstract: `W ostatnich latach obserwowany jest wzrost zainteresowania odnawialnymi .rod.ami energii. Prowadzi si. wiele bada. maj.cych na celu usprawnienie metod wytwarzania i zwi.kszenia wydajno.ci ekologicznych .rode. energii elektrycznej. Spowodowane jest to rosn.cymi cenami paliw kopalnych, stale zwi.kszaj.cym si. zapotrzebowaniem na energi., szczegolnie w krajach rozwijaj.cych si. oraz problemami .rodowiskowymi jak wysokie st..enie dwutlenku w.gla w atmosferze, zmiany klimatyczne czy zanieczyszczenie powierza [1]. Elektrownie j.drowe stanow. dobr. alternatyw. dla paliw kopalnych, ale uwa.ane s. za niebezpieczne w rejonach nara.onych na wyst.powanie trz.sie. ziemi, tsunami i innych katastrof, gdy. ewentualne awarie mog. doprowadzi. do d.ugoterminowego ska.enia znacznego obszaru [2]. Rozwi.zania produkcji odnawialnej energii elektrycznej rownie. nie s. bez wad i nie do ko.ca s. przyjazne dla .rodowiska. Budowa elektrowni wodnej wi..e si. z konieczno.ci. budowy zapory i zalania du.ych obszarow co niesie za sob. du.e zmiany w ekosystemie [3]. Rownie. farmy wiatrowe nie s. idealnym pomys.em gdy. generuj. ha.as i wibracje na ktore skar.. si. okoliczni mieszka.cy, a obracaj.ce si. .opaty wirnika turbiny stanowi. zagro.enie dla przelatuj.cych ptakow [4]. Te niedogodno.ci sk.aniaj. naukowcow i inwestorow do poszukiwania innych .rode. energii i dlatego energia s.oneczna mo.e odgrywa. znacz.c. rol. w przysz.o.ci. Technologia wytwarzania krzemowych ogniw s.onecznych jest ju. dobrze rozwini.ta, ale nadal zbyt droga w porownaniu do innych masowych .rode. energii przeliczaj.c na kWh wytworzonej energii. Dlatego prowadzi si. badania nad organicznymi ogniwami s.onecznymi, mog.cymi sta. si. .rod.em nisko kosztowej energii elektrycznej. Ponadto, u.ycie materia.ow organicznych daje wielk. szans. produkcji elastycznych elementow fotowoltaicznych. Artyku. opisuje przejrzyste elektrody drukowanie jako cz... ogniwa fotowoltaicznego. Tlenek indu (ITO) lub [...] `
        },
      ]
    }
  }
}
</script>

<style>
article {
  margin-bottom: 20px;
}

.page-container {
  height: 2000px;
}

.links {
  padding-top: 15px;
}

.pic {
  float: left;
  width: 30%;
}

.float-text {
  float: right;
  width: 68%;
}
.category-links {
  margin-bottom: 20px;
  font-size: 18px;
}
</style>
