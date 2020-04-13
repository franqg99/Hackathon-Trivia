<template>
  <div>
    <v-row>
      <v-col :cols="3">
        <v-container fluid>
          Choose Difficulty
          <v-radio-group v-model="radios" :mandatory="false">
            <v-radio
              v-for="(difficulty, idx) in difficulty"
              :key="idx"
              :label="difficulty"
              :value="difficulty"
            ></v-radio>
          </v-radio-group>
        </v-container>

        <v-container fluid>
          Choose Category
          <v-radio-group v-model="radios" :mandatory="false">
            <v-radio
              v-for="category in category.trivia_categories"
              :key="category.id"
              :label="category.name"
              :value="category.id"
            ></v-radio>
          </v-radio-group>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Api from "@/service/API";

export default {
  data() {
    return {
      category: [],
      difficulty: ["easy", "medium", "hard"]
    };
  },
  methods: {
    async generateCategory() {
      const categories = await Api.getAllCategory();
      this.category = categories;
    }
  },
  mounted() {
    this.generateCategory();
  }
};
</script>
