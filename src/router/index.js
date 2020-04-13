import Vue from "vue";
import VueRouter from "vue-router";
import QuestionsViews from "../views/QuestionsViews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QuestionsViews",
    component: QuestionsViews
  }
];

const router = new VueRouter({
  routes
});

export default router;
