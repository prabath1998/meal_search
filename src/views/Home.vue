<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");

  ingredients.value = response.data;
});
</script>

<template>
  <div class="flex flex-col p-8">
    <div class="flex justify-center mt-2 gap-2">
      <router-link
        class="bg-orange-400 rounded-md p-2 hover:bg-orange-600"
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="{ letter }"
      >
        {{ letter }}
      </router-link>
    </div>

    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>
