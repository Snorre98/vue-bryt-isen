<script setup lang="ts">
import { ref } from 'vue';


interface TabItems {
    [key: string]: any;
}

const props = defineProps<{tabItems: TabItems}>();

const currentTab = ref<string>(Object.keys(props.tabItems)[0]);
</script>

<template>
    <div class="tabs-wrapper">
        <div class="tab-button-container">
        <button
        v-for="tab in Object.keys(props.tabItems)"
        :key="tab"
        :class="['tab-button', {active: currentTab === tab}]"
        @click="currentTab = tab"
        >
        {{ tab }}
        </button>
        </div>

        <component :is="props.tabItems[currentTab]" class="tab"></component>
    </div>
</template>

<style scoped lang="scss">


.tab-button-container {
    display: flex;
    border: 1px solid #fbead2;
}

.tab-button {
    flex-grow: 1;
    background-color: #1d1b1e;
    border: none;
    font-size: 1.5rem;

    &:hover{
        cursor: pointer;
        background-color: #fbead2;
        color: #1d1b1e;
    }
}


</style>
