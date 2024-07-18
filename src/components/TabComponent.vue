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
        <button
        v-for="tab in Object.keys(props.tabItems)"
        :key="tab"
        :class="['tab-button', {active: currentTab === tab}]"
        @click="currentTab = tab"
        >
        {{ tab }}
        </button>
        <component :is="props.tabItems[currentTab]" class="tab"></component>
    </div>
</template>
