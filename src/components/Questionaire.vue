<template>
  <div class="columns">
    <div class="column is-8-desktop is-offset-2-desktop">
      <div class="card">
        <div class="card-content">
          <h1 class="title is-4 has-text-centered">{{ question.question }}</h1>

          <table class="table is-fullwidth is-hoverable is-bordered">
            <tbody>
              <tr
                v-for="(a, i) in question.answers"
                :key="i"
                :class="{ 'is-selected': answer === i }"
              >
                <td class="has-text-centered" @click="select(i)">
                  {{ a }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
          <a @click="previous" class="card-footer-item">Previous</a>
          <a @click="next" class="card-footer-item">Next</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questionaire",
  props: ["question", "answer"],
  methods: {
    next: function() {
      this.$emit("next");
    },
    previous: function() {
      this.$emit("prev");
    },
    select: function(index) {
      this.$emit("selected", index);
    }
  }
};
</script>
