 <script setup>
import ContactForm from './components/ContactForm.vue';
import CarSelector from './components/CarSelector.vue';
import Greeting from './components/Greeting.vue';
import UsersList from './components/UsersList.vue';

import { ref } from 'vue';

const count = ref(0);

const handleShowMessage = (name) => {
  alert(`Welcome, ${name} `);
}

const incrementCount = () => {
  count.value =  count.value + 1;
}

const handleEscapeEditor = (e) => {
  // check if the escape key was pressed
  if(e.keyCode === 27) {
    console.log('User exited editor');
  }

}

const handleSave = (e) => {
  //e.preventDefault();

  // CTRL + S
  if(e.ctrlKey == true && e.keyCode === 83){
    console.log('CTRL + S has been pressed.')
  }
  console.log(e)
}

const handleControlKey = (e) => {
  console.log(e)
}

const showGreeting = ref(true);

</script>

<template>

  <!-- Click Event -->
  <button v-on:click="handleShowMessage('John')">Show Message</button>

  <!-- Click Event (shorthand) -->
  <button @click="incrementCount">Click me ({{ count }})</button>

  <!-- Keyboard Events (using a conditional within function scope) -->
  <form>
    <textarea @keyup="handleSave" class="text-editor"></textarea>
  </form>

  <!-- Keyboard Events (shorthand) -->
  <form>
    <textarea @keyup="handleControlKey"></textarea>
  </form>

  <ContactForm />

  <CarSelector />

  <div class="mount-test">

    <button @click="showGreeting = !showGreeting">
      {{ showGreeting ? 'Hide' : 'Show' }}
    </button>
    <Greeting v-if="showGreeting" />

  </div>

  <UsersList />



</template>

<style scoped>

.text-editor {
  margin-top: 20px;
  width: 680px;
  height: 500px;
}

.mount-test{
  margin-top: 60px;
}

</style>
