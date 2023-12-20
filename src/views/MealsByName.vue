<script setup>
import { computed, ref } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchmeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>

<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchmeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-5 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <img
        class="rounded-t-xl h-48 w-full object-cover"
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
      />
      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">lore</p>
        <div>
          <a class="px-3 py-2 rounded border border-red-600 hover:bg-red-500 hover:text-white transition-colors" :href="meal.strYoutube" target="_blank">Youtube</a>
          <!-- <a :href="meal.strYoutube" target="_blank">View</a> -->
          <router-link to="/">View</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
