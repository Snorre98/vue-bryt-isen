<script setup lang="ts">
import { computed } from 'vue';
import { filterStore } from '../stores/filterStore';

/*
watch(filterOptions, setSelected);
*/


/*simulation API call*/
setTimeout(() => {
    filterStore.filterOptions = [{label:'A', value:'a'}, {label:'B', value: 'b'}, {label:'C', value: 'c'}];
}, 5000);


const isChecked = (value: string) => {
  return computed(() => filterStore.selectedOptions[value]);
};
/*
<div>Selected:
        <span v-for="option in filterStore.filterOptions" :key="option.label">
            <span v-if="filterStore.selectedOptions[option.value]">{{ option.value }} </span>
        </span>
    </div>*/

</script>

<template>
    <div class="filter-container">
        <div class="filter-title">Filter</div>
        <div class="filter-item-container">
            <div v-for="option in filterStore.filterOptions" :key="option.label" class="filter-item">
            <input type="checkbox" 
                   :value="option.value" 
                   v-model="filterStore.selectedOptions[option.value]"
                   :id="`checkbox-${option.value}`"
                   class="filter-checkbox"
            />
            <label :for="`checkbox-${option.value}`" 
                   class="filter-label"
                   :class="{ 'checked-label': isChecked(option.value).value }"
            >
                {{ option.label }}
            </label>
        </div>
        </div>
        
    </div>
   
 
</template>

<style scoped lang="scss">

.filter-container {
    display: flex;
    align-items: start;
    flex-direction: column;
}

.filter-title {
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    border-top: 2px solid #fbead2;
    border-left: 2px solid #fbead2;
    border-right: 2px solid #fbead2;
    font-size: 1rem;
    font-weight: 600;
}

.filter-item-container {
    display: flex;
    width: 100%;
}

.filter-item{
    flex-grow: 1;
    display: flex;
}

.filter-checkbox {
    display: none;
}

.filter-label {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fbead2;

    background-color: #1d1b1e;
    border: 1px solid #fbead2;
  
    width: 100%;
    &:hover {
        cursor: pointer;
        background-color: #fbead2;
        color: #1d1b1e;
    }
}

.checked-label {
    background-color: #fbead2;

    color: #1d1b1e;
}

</style>
