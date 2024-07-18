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
        details: "details-1details-1 details-1 details-1details-1  details-1 details-1 details-1 details-1 details-1 details-1  details-1  details-1details-1details-1  details-1   details-1    details-1   details-1 details-1",
        gradient: "gradient-1"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2"
    },
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2"
    },
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2"
    },
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2"
    },
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2"
    },
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2"
    },
    {
        title: "title-1",
        details: "details-1",
        gradient: "gradient-1"
    },
    {
        title: "title-2",
        details: "details-2",
        gradient: "gradient-2"
    }
]

</script>

<template>
  <FilterComponent/>
  <TabComponent :tabItems="thisTabItems"/>
  <PageCardComponent :cardsContent="mock_data"></PageCardComponent>
</template>
