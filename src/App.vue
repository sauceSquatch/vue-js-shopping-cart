<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  },
  name: 'app',
  data () {

  }
}
</script>

<style>

</style>
