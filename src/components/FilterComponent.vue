<script setup lang="ts">
import { filterStore } from '../stores/filterStore';

/*
watch(filterOptions, setSelected);
*/


/*simulation API call*/
setTimeout(() => {
    filterStore.filterOptions = [{label:'A', value:'a'}, {label:'B', value: 'b'}, {label:'C', value: 'c'}];
}, 5000);

</script>

<template>
    <div v-for="option in filterStore.filterOptions" :key="option.label">
        <input type="checkbox" 
        :value="option.value" 
        v-model="filterStore.selectedOptions[option.value]"
        />
        <label>{{ option.label }}</label>
    </div>
    <div>Selected:
        <span v-for="option in filterStore.filterOptions" :key="option.label">
            <span v-if="filterStore.selectedOptions[option.value]">{{ option.value }} </span>
        </span>
    </div>
</template>
