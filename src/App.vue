<template>
  <div id="app">
    <quiz-header></quiz-header>
    <section class="section">
      <div class="container">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    components: {
      quizHeader: Header
    }
  }
</script>

<style lang="scss"></style>
