<template>
  <div>
  <transition :enter-active-class="enterActiveClass"
              :leave-active-class="leaveActiveClass"
              mode="out-in">
    <questionnaire :question="currentQuestion" :answer="currentAnswer" :key="questionIndex" @prev="onPrev" @next="onNext" @selected="onSelected"></questionnaire>
  </transition>
  <result-bar :current-question-index="questionIndex"></result-bar>
  </div>
</template>

<script>
// @ is an alias to /src

import Questionnaire from "../components/Questionaire";
import ResultBar from "../components/ResultBar";
import {mapActions, mapGetters} from "vuex";
import {SET_ANSWER_ACTION} from "../store";

export default {
  name: "Home",
  data() {
    return {
      questionIndex: 0,
      enterActiveClass: '',
      leaveActiveClass: '',
    }
  },
  components: {
    ResultBar,
    Questionnaire
  },
  computed: {
    currentQuestion: function() {
      return this.question(this.questionIndex)
    },
    currentAnswer: function() {
      return this.answer(this.questionIndex)
    },
    ...mapGetters(['question', 'answer', 'numberOfQuestions'])
  },
  methods: {
    onPrev: function() {
      this.enterActiveClass = 'animated bounceInLeft'
      this.leaveActiveClass = 'animated bounceOutRight'
      this.questionIndex = this.questionIndex == 0 ? this.questionIndex : this.questionIndex - 1
    },
    onNext: function() {
      this.enterActiveClass = 'animated bounceInRight'
      this.leaveActiveClass = 'animated bounceOutLeft'
      this.questionIndex = this.questionIndex == (this.numberOfQuestions - 1) ? this.questionIndex : this.questionIndex + 1
    },
    onSelected: function(index) {
      this.setAnswer({
        questionIndex: this.questionIndex,
        answer: index
      })
    },
    ...mapActions({
      setAnswer: SET_ANSWER_ACTION
    })
  }
};
</script>
