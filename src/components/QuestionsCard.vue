<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>{{ question.category }}</div>
      <div class="text--primary">{{ question.question }}</div>
    </v-card-text>
    <v-card-actions>
      <v-checkbox
        v-model="checkbox1"
        :label="`${checkbox1.toString().toUpperCase()}`"
      ></v-checkbox>
      <v-btn @click="checkAnswer(question)">Check</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: true
    };
  },
  props: {
    question: Object
  },
  methods: {
    checkAnswer(question) {
      if (question.correct_answer.toLowerCase() == this.checkbox1.toString()) {
        alert("It's Ok");
      } else {
        alert("fallaste perro");
      }
      // if (question.correct_answer == this.checkbox1) {
      // }
    }
  }
};
</script>

<style lang="scss" scoped></style>
