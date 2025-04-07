<script setup>

import Contact from './Contact.vue';

defineProps({
    contacts: Array
})


</script>

<template>
    <h1>Contacts List</h1>
    <ul>
        <li v-for="contact in contacts">
            <Contact v-bind:contact="contact" />
        </li>
    </ul>
</template>

<style scoped>

</style>