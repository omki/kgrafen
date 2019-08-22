<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{title}}</h1>
      <a href="http://www.carbonhagen.com/cbh" target="_blank"><img :src="imageUrl" alt /></a>
      <div class="page_title">9th symposium on two~dimensional materials</div>
      <div class="page_subtitle">Copenhagen, August 21~22, 2019</div>
      <div class="content">
        <div class="pictures">
          <img src="./images/carbonhagen2019_posters.jpg" alt />
          Poster session
        </div>
        <div class="description">
          W Kopenhadze odbyło się kolejne sympozjum w tematyce materiałów 2D. Cykl spotkań Carbonhagen rozpoczał się w roku 2010 kiedy to był jednym z dwóch sympozjów poświęconych tematyce grafenu i innych dwuwymiarowych materiałów w Europie. W tym roku, podczas swojej dziewiątej i już ostatniej odsłony, towarzyszy mu około 50 podobnych spotkań na terenie Europy.
          <br />
          <br />
          Nasz przedstawiciel na konferencji Carbohagen 2019, członek Polskiego Komitetu Naukowego SEP do spraw Technologii Grafenowej, Michał Radwański uczestniczył w tym wydarzeniu wraz z ponad 125 przedstawicielami badań nad grafenem. Najliczniejszymi byli naukowcy z Danii i UK, nie zabrakło także badaczy z Chin i USA. Podszas dwóch dni wypełnionych nowinkami na temat prac nad materiałami 2D można było usłyszeć o najnowszych osiagnięciach w dziedzinie syntezy i obróbki wysokiej jakości grafenu, produkcji urzadzeń przy użyciu heterostruktur i metod metrologii grafenu. Wielu prelegentów przedstawiało swoje prace lub nadmieniało postępy w twistronice (ang. twistronics), czyli badaniu właściwości dwuwarstwowego grafenu gdzie warstwy są przekręcone względem siebie pokazując całkiem nowe właściwości w zależności od kąta przesunięcia oraz zapowiadało, że to początek całego nowego rozdziału badań nad grafenem i w następnej kolejności, pozostałymi materiałami 2D. Interesujące dla Polskiego Komitetu Naukowego SEP do spraw Technologii Grafenowej w kontekście prac nad nanokompozytami z grafenowymi wypełniaczami było wystąpienie Marii Iliut z uniwersytetu w Manchester, współzałożycielki firmy gra~fine, w którym zaprezentowała spektakularny sukces produkowanego przez nich ubówia, gdzie guma produkowana jest z kompozytu grafenowego, znacznie przewyższajacego wytrzymałość, elastyczność i odporność na ścieranie dostępnego na rynku obówia sportowego.
          <br />
          <br />
          Spotkanie zaowocowało nawiązaniem kultarowych znajomości oraz umożliwiło przedstawienie naszego Komitetu na międzynarodowym szczeblu. Otworzyło nowe możliwości współpracy i wymiany doświadczeń z światowymi liderami prac nad grafenem.
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
      title: 'Carbonhagen 2019',
      year: 2019,
      imageUrl:
        'http://www.carbonhagen.com/_/rsrc/1556543454758/config/header%20800.jpg.1556543454471.jpg',
      link: '/carbonhagen2019'
    }
  }
}
</script>

<style>
.page_title {
  font-size: 24px;
}

.page_subtitle {
  font-size: 18px;
  margin-bottom: 20px;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
}

img {
  width: 100%;
}

.page-container {
  padding: 20px;
}

.links {
  padding-top: 15px;
}

.join_conference {
  text-align: center;
  width: 50%;
  margin: 0 100px;
}
</style>
