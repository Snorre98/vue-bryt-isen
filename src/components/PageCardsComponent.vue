<script setup lang="ts">
import CardComponent from './CardComponent.vue';


interface cardContent {
    title?: string,
    details?: string,
    gradient?: string,
    relevance?: "s" | "m" | "l" | "xl" | "bar",
}

defineProps<{cardsContent: cardContent[]}>()


</script>


<template>
    <div class="cards-wrapper">
   
            <CardComponent 
                v-for="item in cardsContent" :key="item.title"
                :title="item.title"
                :details="item.details" 
                :gradient="item.gradient"
                :relevance="item.relevance"
            />
     
    </div>
</template>
<style scoped>

.cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 1280px;
    height: fit-content;
    background-color: #fbead2;
    gap: 4px;
}

</style>
