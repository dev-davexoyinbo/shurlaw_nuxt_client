<template>
  <div class="image-cover hero-banner" style="">
    <div class="container">
      <div class="hero-search-wrap">
        <div class="hero-search">
          <h3>Find Your New Property</h3>
        </div>

        <hero-search-content />
        
      </div>
    </div>
  </div>
</template>

<script>
import HeroSearchContent from './HeroSearchContent.vue';
export default {
  components: { HeroSearchContent },};
</script>

<style>
</style>