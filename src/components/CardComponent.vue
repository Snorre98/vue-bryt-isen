<script setup lang="ts">
import { computed } from 'vue';



const props = defineProps<{
    title?: string,
    details?: string,
    gradient?: string,
    relevance?: "s" | "m" | "l" | "xl" | "bar",

}>()

const sizeMap = {
    s: { cardWidth: 210, cardHeight: 498 },
    m: { cardWidth: 424, cardHeight: 498 },
    l: { cardWidth: 852, cardHeight: 498 },
    xl: { cardWidth: 1066, cardHeight: 498 },
    bar: { cardWidth: 1280, cardHeight: 105 },
};

const cardSize = computed(() => {
    return props.relevance ? sizeMap[props.relevance] : { cardWidth: 210, cardHeight: 210 };
});

</script>

<template>
    <div class="card-wrapper" :style="{ width: `${cardSize.cardWidth}px`, height: `${cardSize.cardHeight}px` }">     
        <div class="card-header">
            <h2 class="card-title">{{ title }}</h2>
            <button class="card-edit-btn">Edit</button>
        </div>
       
        <div class="card-gradient">{{ gradient }}</div>
        <div class="card-details">{{ details }}</div>
    </div>
</template>

<style scoped lang="scss">

// tre størrelser
// alle sørger for at man fyller 1280px
// 210 x 210
// 854 x 498
// 424 x 498
// 1069 x 430

// 1280 x 105

// blokker: 1280 x 638





.card-wrapper {
    background-color: #1d1b1e;

}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}

.card-edit-btn {
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    background-color: rgb(255, 166, 0);
    color: black;
    border: none;
    cursor: pointer;
}

.card-title {
    padding: 0;
    margin: 0;
}

.card-details {
    height: 40%;
    overflow: hidden;
}

.card-gradient {
    margin: 0.2rem;
    height: 40%;
}

</style>
