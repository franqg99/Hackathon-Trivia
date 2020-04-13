<template>
  <div class="filtros">
    <v-container>
      Choose Difficulty
      <v-radio-group v-model="selectDifficulty" :mandatory="false">
        <v-radio
          v-for="(difficulty, idx) in difficulty"
          :key="idx"
          :label="difficulty"
          :value="difficulty"
        ></v-radio>
      </v-radio-group>
    </v-container>

    <v-container>
      Choose Category
      <v-radio-group v-model="selectCategory" :mandatory="false">
        <v-radio
          v-for="category in category.trivia_categories"
          :key="category.id"
          :label="category.name"
          :value="category.id"
        ></v-radio>
      </v-radio-group>
    </v-container>
    <v-btn x-large color="success" dark @click="getTest()">Get Test</v-btn>
  </div>
</template>

<script>
import Api from "@/service/API";

export default {
  data() {
    return {
      category: [],
      difficulty: ["easy", "medium", "hard"],
      selectCategory: "",
      selectDifficulty: ""
    };
  },
  methods: {
    async generateCategory() {
      const categories = await Api.getAllCategory();
      this.category = categories;
    },
    getTest() {
      this.$root.$emit(this.selectCategory, this.selectDifficulty, "getTest");
    }
  },
  mounted() {
    this.generateCategory();
  }
};
</script>
<style>
.filtros {
  width: 30%;
  margin-left: 60px;
}
</style>
