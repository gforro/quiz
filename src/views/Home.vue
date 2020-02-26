<template>
  <div>
    <h1 class="subtitle has-text-centered">Click bellow to start the quiz!</h1>
    <router-link to="/quiz">
      <div @click="start" @mouseenter="isMouseOver = true" @mouseleave="isMouseOver = false" class="notification has-text-centered" :class="hoverClass"><h1 class="title">Play Quiz</h1></div>
    </router-link>
  </div>
</template>
<script>
  import {RESET_ANSWERS_ACTION} from "../store";
  import {mapActions} from 'vuex';

  export default {
    name: 'Home',
    data() {
      return {
        isMouseOver: false
      }
    },
    computed: {
      hoverClass: function() {
        return this.isMouseOver ? 'is-danger' : 'is-primary'
      }
    },
    methods: {
      start() {
        this.reset()
      },
      ...mapActions({reset: RESET_ANSWERS_ACTION})
    }
  }
</script>
