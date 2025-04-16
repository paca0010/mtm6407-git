<script setup>
import ContactForm from './components/ContactForm.vue';
import CarSelector from './components/CarSelector.vue';
import { ref } from 'vue';

const count = ref(0);

const handleShowMessage = (name) => {
  alert(`Welcome, ${name} `);
}

const incrementCount = () => {
  count.value = count.value + 1;
}

const handleEscapeEditor = (e) => {
  // Check if the pressed key is 'Escape'
  if (e.keyCode === 27) {
    console.log('User exited editor');
  }
}


const handleSave = (e) => {
    //e.preventDefault(); stop the default behviour
    //CTRL + S
    e.preventDefault();
    if (e.ctrlKey == true && e.keyCode === 83) {
    console.log('CTRL + S has been pressed.')
  }
  console.log(e)
}


const handleControlKey = (e) => {
  console.log(e)
}


</script>

<template>
<!-- Click Event -->
  <button v-on:click="handleShowMessage('Dei')">Show Message</button>

<!-- Click Event (Shorthand) -->
 <button @click="incrementCount">Click Me ({{ count }})</button>

 <!-- Keyboard Events (using a conditional within funtional scope)-->
  <form>
    <textarea @keyup="handleSave" class="text-editor"></textarea>
  </form>

<!-- Keyboard Events (shorthand)-->
  <form>
    <textarea @keyup="handleControlKey" class="small-editor"></textarea>
  </form>

  <ContactForm/>

  <CarSelector />

</template>

<style scoped>
.text-editor {
  margin-top: 20px;
  width: 680px;
  height: 300px;
  border: 2px solid #3630de;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
}

.small-editor {
  margin-top: 20px;
  border: 2px solid #3630de;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
}
</style>
