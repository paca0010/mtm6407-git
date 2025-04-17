<script setup>

import { ref, onMounted } from 'vue';

// setup state values

const users = ref([]);
const isFetching = ref(true);
const error = ref(null);

const fetchUsers = async () => {
  try { 
    // successful code
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok) throw new Error('Failed to fetch users!');
    users.value = await response.json();
  }

  catch (err) {
    //error
    error.value = err.message;
  }

  finally {
    isFetching.value = false;
  }
}

onMounted(fetchUsers);

</script>

<template>

<div class="users-list">
    <h2>Users</h2>
    <hr/>

    <p v-if="isFetching">Loading users...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <ul v-if="users.length">
        <li v-for="user in users">
            {{ user.name }} - {{ user.email }} - {{ user.phone }}
        </li>
    </ul>
</div>

</template>