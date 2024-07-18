<script setup lang="ts">

defineProps<{
    title?: string,
    details?: string,
    gradient?: string,

}>()

</script>

<template>
    <div class="card-wrapper">
        <div class="card-header">
            <h2 class="card-title">{{ title }}</h2>
            <button class="card-edit-btn">Edit</button>
        </div>
       
        <div class="card-gradient">{{ gradient }}</div>
        <div class="card-details">{{ details }}</div>
    </div>
</template>

<style scoped lang="scss">

.card-wrapper {
    padding: 1rem;
    box-shadow: 0 0 5px 2px rgba(134, 134, 134, 0.15);
    width: 250px;
    height: 300px;
    max-height: 600px;
    background-color: darkslategray;
    border-radius: 0.15rem;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.card-edit-btn {
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    background-color: rgb(255, 166, 0);
    color: black;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
}

.card-title {
    padding: 0;
    margin: 0;
}

.card-details {
    border: 2px solid black;
    height: 40%;
    overflow: hidden;
}

.card-gradient{
    border: 2px solid black;
    margin: 0.2rem;
    height: 40%;
    &&:hover{
        background-color: red;
    }
}

</style>
