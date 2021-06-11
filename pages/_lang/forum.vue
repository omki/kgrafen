<template>
  <section id="page">
    <div class="page-container">
      <h1>{{ $t('page.header.title') }} ~ {{ $t('navigation.forum') }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  scrollToTop: false,
}
</script>

<style>
.page-container {
  height: 2000px;
}

.links {
  padding-top: 15px;
}
</style>
