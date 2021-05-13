<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.literature')}}</h1>

      <div v-if="getBooksByLanguage().length != 0" class="sectionHeader">{{$t('pages.literature.books_header')}}</div>
      <div class="books"> 
        <div class="book" v-for="book in getBooksByLanguage()" :key="book.id">
          <a :href="book.link" target="_blank"><img :src="book.imageUrl" alt=""></a>
          <div class="bookTitle">"{{book.title}}"</div>
          {{book.authors}}, {{book.year}}, {{book.publisher}}
        </div>
      </div>
      <div v-if="getArticlesByLanguage().length != 0" class="sectionHeader">{{$t('pages.literature.articless_header')}}</div>
      <div class="articles"> 
        <div class="article" v-for="book in getArticlesByLanguage()" :key="book.id">
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
      books_pl: [
        {
          title: "Nanotechnologia w praktyce",
          link: "https://pzwl.pl/Nanotechnologia-w-praktyce,14576651,p.html",
          imageUrl: "https://graphenequantec.files.wordpress.com/2021/05/nanotechnologia.jpg",
          authors: "Kamila Żelechowska",
          year: "2016",
          publisher: "Wydawnictwo Naukowe PWN"
        },
        {
          title: "Grafen ~ Otrzymywanie, charakterystyka, zastosowania",
          link: "https://pzwl.pl/Grafen,76584007,p.html",
          imageUrl: "https://graphenequantec.files.wordpress.com/2021/05/grafen_ocz.jpg",
          authors: "Agnieszka Dąbrowska, Andrzej Huczko, Magdalena Kurcz",
          year: "2016",
          publisher: "Wydawnictwa Uniwersytetu Warszawskiego"
        },
        {
          title: "Nanorurki węglowe ~ Otrzymywanie, charakterystyka, zastosowania",
          link: "https://pzwl.pl/Nanorurki-weglowe,5072767,p.html",
          imageUrl: "https://graphenequantec.files.wordpress.com/2021/05/nanorurki.jpg",
          authors: "Andrzej Huczko, Magdalena Kurcz, Magdalena Popławska",
          year: "2014",
          publisher: "Wydawnictwo Uniwersytetu Warszawskiego"
        },
        {
          title: "Raport z Akceleracji Projektu ~ Czujniki grafenowe",
          link: "https://graphenequantec.files.wordpress.com/2021/05/raport_czujniki_grafenowe.pdf",
          imageUrl: "https://graphenequantec.files.wordpress.com/2021/05/raport.jpg",
          authors: "Doktor Habdank, et al.",
          year: "2013"
        },
      ],
      books_en: [
        {
          title: "Graphene Science Handbook: Mechanical and Chemical Properties",
          link: "https://www.crcpress.com/Graphene-Science-Handbook-Mechanical-and-Chemical-Properties/Aliofkhazraei-Ali-Milne-Ozkan-Mitura-Gervasoni/p/book/9781466591233",
          imageUrl: "https://images.tandf.co.uk/common/jackets/amazon/978146659/9781466591233.jpg",
          authors: "Mahmood Aliofkhazraei et al",
          year: "2016",
          publisher: "CRC Press"
        },
        {
          title: "The Handbook of Graphene Electrochemistry",
          link: "https://graphenequantec.wordpress.com/graphite-quantum-technology-library-2/graphite-quantum-technology-library/",
          imageUrl: "https://images.tandf.co.uk/common/jackets/amazon/978146659/9781466591271.jpg",
          authors: "Dale A. C. Brownson, Dimitrios K. Kampouris and Craig E. Banks",
          year: "2014",
          publisher: "Springer"
        },
        {
          title: "Graphene Science Handbook: Mechanical and Chemical Properties",
          link: "https://www.crcpress.com/Graphene-Science-Handbook-Mechanical-and-Chemical-Properties/Aliofkhazraei-Ali-Milne-Ozkan-Mitura-Gervasoni/p/book/9781466591233",
          imageUrl: "https://graphenequantec.files.wordpress.com/2016/11/gebc.png?w=199&h=300",
          authors: "Mahmood Aliofkhazraei et al",
          year: "2016",
          publisher: "CRC Press"
        },
        {
          title: "Handbook of Graphene Technology and Innovations",
          link: "https://www.mightyape.co.nz/product/handbook-of-graphene-hardback/28505518",
          imageUrl: "https://d3fa68hw0m2vcc.cloudfront.net/084/215097971.jpeg",
          authors: "Sulaiman Wadi Harun",
          year: "2019",
          publisher: "John Wiley & Sons Inc"
        },
      ],
      articles_pl: [],
      articles_en: [
        {
          title: "Graphene-oxide/TiO2 nanocomposite films with electron-donors for multicolor holography",
          link: "https://www.osapublishing.org/oe/fulltext.cfm?uri=oe-27-2-1740&id=404139",
          imageUrl: "https://graphenequantec.files.wordpress.com/2019/08/graphene_nanocomposite_holography.png",
          authors: "Jiarui Wu, et al.",
          year: "2016",
          publisher: "Optics Express"
        },
      ]
    }
  },
  methods: {
    getBooksByLanguage() {
      let lang = this.$store.state.locale;
      if (lang == 'pl') return this.books_pl;
      if (lang == 'en') return this.books_en;
    },
    getArticlesByLanguage() {
      let lang = this.$store.state.locale;
      if (lang == 'pl') return this.articles_pl;
      if (lang == 'en') return this.articles_en;
    }
  }
}
</script>

<style>
.page-container {
  height: 2000px;
}

.books, .articles {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

}
.bookTitle {
  font-weight: bold;
  margin-bottom: 5px;
}

.sectionHeader {
  font-size: 24px;
  font-weight: bold;
  margin: 40px 0 10px;
}

</style>
