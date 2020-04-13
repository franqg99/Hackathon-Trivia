<template>
  <div>
    <Prueba />
    <QuestionsList :questions="questions" />
  </div>
</template>

<script>
import QuestionsList from "../components/QuestionsList";
import Api from "@/service/API.js";
import Prueba from "../components/Prueba";

export default {
  data() {
    return {
      questions: []
    };
  },
  components: {
    QuestionsList,
    Prueba
  },
  methods: {
    async generateQuestion() {
      const question = await Api.getQuestion();
      this.questions = question;
    },
    getTest(selectCategory, selectDifficulty) {
      alert("hola" + selectCategory + selectDifficulty);
    }
  },
  mounted() {
    this.generateQuestion();
    this.$root.$on("getTest", (selectCategory, selectDifficulty) => {
      this.getTest();
      console.log(selectDifficulty, selectCategory);
    });
  }
};
</script>

<style lang="scss" scoped></style>
