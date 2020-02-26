<template>
  <div class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">
          Question Number
        </p>
        <p class="title">
          {{ currentQuestionIndex + 1 }}/{{ numberOfQuestions }}
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">
          Answered
        </p>
        <p class="title">
          {{ answeredQuestions }}
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">
          Correct Answers
        </p>
        <p class="title">
          {{ correctAnswers }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ResultBar",
  computed: {
    ...mapGetters(["numberOfQuestions", "correctAnswers", "answeredQuestions"])
  },
  props: ["currentQuestionIndex"]
};
</script>
