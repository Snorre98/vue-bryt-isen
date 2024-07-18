<script setup lang="ts">
import { ref, watch } from 'vue';

interface filterOption {
    label: string;
    value: string;
}
const filterOptions = ref<filterOption[]>([{label:'A', value:'a'}, {label:'B', value: 'b'}]);

const selectedFilter = ref<{ [key: string]: boolean }>({});

const setSelected = () => {
    selectedFilter.value = {};
    filterOptions.value.forEach((option) => {
        selectedFilter.value[option.value] = false;
    })
}

watch(filterOptions, setSelected);

</script>

<template>
    <div v-for="option in filterOptions" :key="option.label">
        <input type="checkbox" 
        :value="option.value" 
        v-model="selectedFilter[option.value]"
        />
        <label>{{ option.label }}</label>
    </div>
    <div>Selected:
        <span v-for="option in filterOptions" :key="option.label">
            <span v-if="selectedFilter[option.value]">{{ option.value }} </span>
        </span>
    </div>
</template>
