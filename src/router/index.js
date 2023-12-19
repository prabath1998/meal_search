import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import SearchByName from '../views/SearchByName.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealList,
  },
  {
    path: "/by-name/:name",
    name: "byName",
    component: SearchByName,
  },
  {
    path: "/by-name/:name",
    name: "byName",
    component: SearchByName,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
