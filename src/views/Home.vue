<script setup>
import { computed } from 'vue';
import store from '../store';

const meals = computed(() => store.state.meals)
</script>

<template>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>