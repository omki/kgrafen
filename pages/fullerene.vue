<template>
  <section id="page">
    <div class="fullerene">
      <div class="aspect-ratio-fullerene">
        <iframe
          src="https://grafen.surge.sh/"
          frameborder="0"
          width="100%"
        />
      </div>
      {{ $t('page.header.title') }} ~ {{ $t('navigation.fullerene') }}
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
  .fullerene {
    margin: 20px 20px 0;
    box-sizing: border-box;
  }
  .aspect-ratio-fullerene {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .aspect-ratio-fullerene iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0; top: 0;
  }
</style>
