<script setup lang="ts">
import TabComponent from './components/TabComponent.vue';
import Main from './components/MainPage.vue';
import Favorites from './components/FavoritesPage.vue';
import FilterComponent from './components/FilterComponent.vue';
import PageCardComponent from './components/PageCardsComponent.vue';

const thisTabItems = {
  Main,
  Favorites
};


const mock_data  = [
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1",
        relevance: "l"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2",
        relevance: "m"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2",
        relevance: "l"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2",
        relevance: "s"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2",
        relevance: "s"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2",
        relevance: "bar"
    },
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1",
        relevance: "xl"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2",
        relevance: "s"
    },
   
]

</script>

<template>
    <div class="page-wrapper">
        <FilterComponent/>
        <TabComponent :tabItems="thisTabItems"/>
        <PageCardComponent :cardsContent="mock_data"></PageCardComponent>
    </div>
</template>

<style scoped lang="scss">

.page-wrapper {
    width: 100%;
}
</style>
