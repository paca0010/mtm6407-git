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
        <input type="email" placeholder="johndoe@gmail.com" v-model="formData.email">
        <button type="submit">Submit</button>

        <!-- {{ formData.firstName }} -->
    </form>

</template>    

<!-- <style scoped>

form {
    display: flex;
    flex-direction:row;
    gap: 10px;
    width: 20%;
}

</style> -->