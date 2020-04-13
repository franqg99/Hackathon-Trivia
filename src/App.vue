<template>
  <div>
    <Navbar />
    <QuestionsViews />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import QuestionsViews from "@/views/QuestionsViews.vue";

export default {
  name: "App",

  components: {
    QuestionsViews,
    Navbar
  }
};
</script>
