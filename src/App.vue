<script setup lang="ts">
import TabComponent from './components/TabComponent.vue';
import Main from './components/MainPage.vue';
import Favorites from './components/FavoritesPage.vue';
import FilterComponent from './components/FilterComponent.vue';

const thisTabItems = {
  Main,
  Favorites
}

</script>

<template>
  <TabComponent :tabItems="thisTabItems"/>
  <FilterComponent/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
