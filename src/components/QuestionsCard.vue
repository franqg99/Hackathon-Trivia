<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>Question</div>
      <p class="display-1 text--primary">be•nev•o•lent</p>
      <p>{{ question.category }}</p>
      <div class="text--primary">
        well meaning and kindly.
        <br />"a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-checkbox
        v-model="checkbox1"
        :label="`Checkbox 1: ${checkbox1.toString()}`"
      ></v-checkbox>
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
  }
};
</script>

<style lang="scss" scoped></style>
