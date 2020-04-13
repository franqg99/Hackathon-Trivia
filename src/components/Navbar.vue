<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Trivia Game</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="newToken">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    newToken() {}
  }
};
</script>

<style lang="scss" scoped></style>
