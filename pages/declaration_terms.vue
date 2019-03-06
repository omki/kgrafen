<template>
  <section id="page">
    <div class="page-container">
      <h1>{{$t('page.header.title')}} ~ {{$t('navigation.declaration_terms')}}</h1>

      <h2>Deklaracja</h2>
      <h2>Uchwała</h2>
      <div class="column-3">
        <img src="../assets/images/declaration/uchwala.jpg" alt="">
      </div>
      <h2>Regulamin</h2>
      <div class="column-3">
        <img src="../assets/images/declaration/regulamin1.jpg" alt="">
      </div>
      <div class="column-3">
        <img src="../assets/images/declaration/regulamin2.jpg" alt="">
      </div>
      <div class="column-3">
        <img src="../assets/images/declaration/regulamin3.jpg" alt="">
      </div>
      <h2>Statut</h2>
      <div class="column-3">
        <a href="https://graphenequantec.files.wordpress.com/2019/03/statutsep.pdf" target="_blank">
          <img src="../assets/images/declaration/statut.jpg" alt="">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: false,
}
</script>

<style>
h2{
  margin-top: 20px;
}
.page-container {
  height: 2000px;
}

.links {
  padding-top: 15px;
}

.column-3 {
  display: inline-grid;
  width: 30%;
}
</style>
