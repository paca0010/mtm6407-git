<script setup>
// Individual/Single contact

    defineProps({
       contact: Object 
    });


</script>

<template>

    <div class="single-contact">
        <h2>{{ contact.name }}</h2>
        <p>{{ contact.address }}</p>
        <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
        <p>{{ contact.phone }}</p>
    </div>

</template>

<style scoped>

</style>