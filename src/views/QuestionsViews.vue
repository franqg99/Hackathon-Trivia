<template>
  <div>
    <QuestionsList :questions="questions" />
  </div>
</template>

<script>
import QuestionsList from "../components/QuestionsList";
import Api from "@/service/API.js";

export default {
  data() {
    return {
      questions: []
    };
  },
  components: {
    QuestionsList
  },
  methods: {
    async generateQuestion() {
      const question = await Api.getQuestion();
      this.questions = question;
    }
  },
  mounted() {
    this.generateQuestion();
  }
};
</script>

<style lang="scss" scoped></style>
