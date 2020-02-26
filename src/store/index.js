import Vue from "vue";
import Vuex from "vuex";
import Quiz from "../assets/Quiz.json";

Vue.use(Vuex);
export const SET_ANSWER_ACTION = 'setAnswer';
export const RESET_ANSWERS_ACTION = 'resetAnswers';

export default new Vuex.Store({
  state: {
    ...Quiz,
    answers: Quiz.questions.reduce((accum, question, index) => {
      accum[index] = undefined
      return accum
    }, {})
  },
  mutations: {
    [SET_ANSWER_ACTION]: function({answers}, {questionIndex, answer}) {
      answers[questionIndex] = answer
    },
    [RESET_ANSWERS_ACTION]: function({answers}) {
      Object.keys(answers).forEach(key => answers[key] = undefined)
    }
  },
  getters: {
    numberOfQuestions: ({questions}) => questions.length,
    correctAnswers: ({questions, answers}) => questions.map((q, i) => answers[i] === q.correctIndex ? 1 : 0).reduce((acc, s) => acc + s),
    answeredQuestions: ({answers}) => Object.values(answers).map(v => v === undefined ? 0 : 1).reduce((acc, s) => acc + s, 0),
    question: ({questions}) => (index) => questions[index],
    answer: ({answers}) => (index) => answers[index]
  },
  actions: {
    [SET_ANSWER_ACTION]: function({commit}, payload) {
      commit(SET_ANSWER_ACTION, payload)
    },
    [RESET_ANSWERS_ACTION]: function({commit}) {
      commit(RESET_ANSWERS_ACTION)
    }
  }
});


