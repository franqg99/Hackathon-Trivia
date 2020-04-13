<template>
  <div id="questions">
    <QuestionsCard
      v-for="(question, idx) in questions"
      :key="idx"
      :question="question"
    />
  </div>
</template>

<script>
import QuestionsCard from "@/components/QuestionsCard.vue";
export default {
  props: {
    questions: Array
  },
  components: {
    QuestionsCard
  }
};
</script>

<style lang="scss" scoped>
#questions {
  width: 70%;
  float: right;
  margin-top: -1050px;
  display: flex;
  flex-wrap: wrap;
}
</style>
