<script setup lang="ts">
import CardComponent from './CardComponent.vue';


interface cardContent {
    title?: string,
    details?: string,
    gradient?: string,
}

defineProps<{cardsContent: cardContent[]}>()


</script>

<template>
    <div class="cards-wrapper">
        <div v-for="item in cardsContent">
            <CardComponent 
            :title="item.title" 
            :details="item.details" 
            :gradient="item.gradient"/>
        </div>
    </div>
</template>

<style scoped>

.cards-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 1280px;
    max-height: 1080px;
}

</style>
