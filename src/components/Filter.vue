<template>
  <div>
    <h1>hola</h1>
    <v-container fluid>
      <p>{{ radios || "null" }}</p>
      <v-radio-group v-model="radios" :mandatory="false">
        <v-radio
          :label="category.name"
          :value="category.id"
          v-for="category in categories"
          :key="category.id"
        ></v-radio>
      </v-radio-group>
    </v-container>
  </div>
</template>

<script>
import Api from "@/service/API";

export default {
  data() {
    return {
      category: []
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
