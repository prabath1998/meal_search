<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 h-full hover:bg-orange-100 transition-colors inline-flex items-center"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full hover:bg-orange-100 transition-colors inline-flex items-center"
        >Meals by letter</router-link
      >
      <router-link
        :to="{ name: 'byIngredient' }"
        class="px-2 h-full hover:bg-orange-100 transition-colors inline-flex items-center"
        >Meals by ingredient</router-link
      >
    </div>
  </header>
</template>
