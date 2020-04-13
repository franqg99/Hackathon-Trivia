<template>
  <div>
    <Navbar />
    <QuestionsViews />
    <Filter />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import QuestionsViews from "@/views/QuestionsViews.vue";
import Filter from "@/components/Filter.vue";

export default {
  name: "App",

  components: {
    QuestionsViews,
    Navbar,
    Filter
  }
};
</script>
