<template>
  <div>
    <Navbar />
    <QuestionsViews />
    <Prueba />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import QuestionsViews from "@/views/QuestionsViews.vue";
import Prueba from "@/components/Prueba.vue";

export default {
  name: "App",

  components: {
    QuestionsViews,
    Navbar,
    Prueba
  }
};
</script>
