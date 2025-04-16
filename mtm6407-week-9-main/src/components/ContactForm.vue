<script setup>

import { ref } from 'vue';

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
});

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${formData.value.firstName} ${formData.value.lastName}, Email: ${formData.value.email}`);
}

</script>

<template>

    <form @submit="handleSubmit">
        <input type="text" name="firstName" placeholder="John" v-model="formData.firstName">
        <input type="text" name="lastName" placeholder="Doe" v-model="formData.lastName">
        <input type="email" name="email" placeholder="johndoe@gmail.com" v-model="formData.email">
        <button type="submit">Submit</button>
    </form>

</template>