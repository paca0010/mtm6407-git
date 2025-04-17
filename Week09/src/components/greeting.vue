<script setup>

const msg = 'Hello World!';

import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log('Greeting has been mounted!');
});

onUnmounted(() => {
  console.log('Greeting has been un-mounted!');
});

</script>

<template>

<h2>{{ msg }}</h2>

</template>