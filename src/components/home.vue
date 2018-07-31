<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Welcome to Pizza Planet</h1>
        <h2>hungry?</h2>
        <button class="btn btn-success" @click="goToMenu">Let's Order!</button>
      </div>
    </div>
  </div>
</template>

<style>
  #home {
    background: url('../../src/assets/pizza-hero.jpg');
    height: 800px;
    padding: 10%;
  }

  h1, h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 80%;
    margin: 0 auto;
    padding: 10px 30px 30px 30px;
  }
</style>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push({name: "menuLink"});
    }
  }
}
</script>
