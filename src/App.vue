<template>
  <main-slide-view></main-slide-view>
</template>

<script>
import MainSlideView from './components/MainSlideView.vue'

export default {
  name: 'App',
  components: {
    MainSlideView
  }
}
</script>

<style>
@font-face {
  font-family: 'iranYekan_regular';
  src: url('./assets/fonts/regular.woff') format('woff'),
  url('./assets/fonts/regular.woff2') format('woff2')
}
@font-face {
  font-family: 'iranYekan';
  src: url('/assets/fonts/medium.woff');
}

#app {
  font-family: "iranYekan_regular", "iranYekan";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 26px;
}
</style>
