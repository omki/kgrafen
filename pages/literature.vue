<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.literature')}}</h1>

      <div class="books"> 
        <div class="book" v-for="book in books" :key="book.id">
          <a :href="book.link" target="_blank"><img :src="book.imageUrl" alt=""></a>
          <div class="bookTitle">"{{book.title}}"</div>
          {{book.authors}}, {{book.year}}, {{book.publisher}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          title: "Nanotechnologia w praktyce",
          link: "https://pzwl.pl/Nanotechnologia-w-praktyce,14576651,p.html",
          imageUrl: "https://emp-scs.img-osdw.pl/img-p/1/kipzwl/9720c7ef/std/10e-1a7/14803026o.jpg",
          authors: "Kamila Żelechowska",
          year: "2016",
          publisher: "Wydawnictwo Naukowe PWN"
        },
        {
          title: "Grafen ~ Otrzymywanie, charakterystyka, zastosowania",
          link: "https://pzwl.pl/Grafen,76584007,p.html",
          imageUrl: "https://emp-scs.img-osdw.pl/img-p/1/kipzwl/9720c7ef/std/10e-1a7/76655383o.jpg",
          authors: "Agnieszka Dąbrowska, Andrzej Huczko, Magdalena Kurcz",
          year: "2016",
          publisher: "Wydawnictwa Uniwersytetu Warszawskiego"
        },
        {
          title: "Nanorurki węglowe ~ Otrzymywanie, charakterystyka, zastosowania",
          link: "https://pzwl.pl/Nanorurki-weglowe,5072767,p.html",
          imageUrl: "https://emp-scs.img-osdw.pl/img-p/1/kipzwl/9720c7ef/std/10e-1a7/6656966o.jpg",
          authors: "Andrzej Huczko, Magdalena Kurcz, Magdalena Popławska",
          year: "2014",
          publisher: "Wydawnictwo Uniwersytetu Warszawskiego"
        },
      ]
    }
  }
}
</script>

<style>
.page-container {
  height: 2000px;
}

.books {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

}
.bookTitle {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
